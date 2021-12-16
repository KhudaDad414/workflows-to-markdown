const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { getFilesPath } = require('./utils');

function readWorkflowFile(workflow) {
  const doc = yaml.load(fs.readFileSync(workflow));
  return { ...doc, path: workflow };
}
function orderWorkflows(workflows) {
  return Object.entries(workflows)
    .sort(
      ([, event], [, event2]) =>
        Object.keys(event2).length - Object.keys(event).length
    )
    .reduce(
      (acc, [eventName, event]) => ({
        ...acc,
        [eventName]: Object.entries(event)
          .sort(([, eventType1], [, eventType2]) => {
            return eventType2.length - eventType1.length;
          })
          .reduce(
            (acc, [eventTypeName, eventType]) => ({
              ...acc,
              [eventTypeName]: eventType,
            }),
            {}
          ),
      }),
      {}
    );
}
function parseWorkflows(WorkflowPaths) {
  const workflowsPaths = getFilesPath(WorkflowPaths);
  if (workflowsPaths.length < 1) {
    throw new Error('No workflows found.');
  }
  const workflows = workflowsPaths.map(readWorkflowFile);
  const workflowsByEvent = workflows.reduce(mapWorkflowByEvent, {});
  const optimizedWorkflowsByEvent = Object.entries(workflowsByEvent).reduce(
    mergeSimilarEventsMap,
    {}
  );
  const orderedWorkflows = orderWorkflows(optimizedWorkflowsByEvent);
  return orderedWorkflows;
}
function getEventTypes(eventName, event) {
  let eventTypes = event ? event.types || event.branches : null;
  if (!eventTypes) {
    if (eventName === 'schedule') {
      eventTypes = event.map((type) => type[Object.keys(type)[0]]);
    } else eventTypes = [JSON.stringify(event)];
  }
  return eventTypes;
}
function mapWorkflowByEvent(acc, workflow) {
  Object.entries(workflow.on).forEach(([eventName, event]) => {
    if (!acc[eventName]) {
      acc[eventName] = {};
    }
    const eventTypes = getEventTypes(eventName, event);
    eventTypes.forEach((eventType) => {
      if (!acc[eventName][eventType]) {
        acc[eventName][eventType] = [];
      }
      acc[eventName][eventType].push({
        workflowName: workflow.name,
        workflowPath: workflow.path,
        desc: 'A short description about the workflow will appear here...',
        jobs: getJobs(workflow.jobs),
      });
    });
  });
  return acc;
}
function getJobs(jobs) {
  const jobsMap = Object.entries(jobs).reduce((acc, [jobName, job]) => {
    acc[job.name] = jobs[jobName].steps.map((step) => step.name);
    return acc;
  }, {});
  return jobsMap;
}
function mergeSimilarEventsMap(acc, [eventName, event]) {
  acc[eventName] = Object.entries(event).reduce(
    (acc, [eventTypeName, eventType], index, eventTypes) => {
      /////
      const matchedTypeNames = [];
      for (let i = eventTypes.length - 1; i >= 0; i--) {
        const [itemTypeName, itemTypeValue] = eventTypes[i];
        if (
          eventTypeName !== itemTypeName &&
          JSON.stringify(eventType) === JSON.stringify(itemTypeValue)
        ) {
          matchedTypeNames.push(itemTypeName);
          eventTypes.splice(i, 1);
        }
      }
      if (matchedTypeNames.length > 0) {
        acc[
          matchedTypeNames.reduce((acc, name) => {
            acc += ', ' + name;
            return acc;
          }, eventTypeName)
        ] = eventType;
      } else {
        acc[eventTypeName] = eventType;
      }
      return acc;
    },
    {}
  );
  return acc;
}

module.exports = parseWorkflows;
