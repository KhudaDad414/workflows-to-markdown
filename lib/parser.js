const fs = require('fs');
const yaml = require('js-yaml');
const cronstrue = require('cronstrue');
const { getFilesPath } = require('./utils');

function getDescription(string) {
  //loop over lines
  const lines = string.split('\n').map((line) => line.trim());
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('#') && lines[i - 1].startsWith('name:')) {
      return line.substring(1);
    }
  }
  return null;
}
function readWorkflowFile(path) {
  const file = fs.readFileSync(path, 'utf8');
  const doc = yaml.load(file);
  const desc = getDescription(file);
  return { ...doc, path, desc };
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
  if (!event) {
    return ['any'];
  }
  switch (eventName) {
    case 'push':
      return event.branches || event.tags || event.paths || ['any'];
    case 'discussion':
    case 'discussion_comment':
    case 'issue_comment':
    case 'issues':
    case 'label':
    case 'milestone':
    case 'page_build':
    case 'project':
    case 'project_card':
    case 'project_column':
    case 'pull_request':
    case 'pull_request_review':
    case 'pull_request_review_comment':
    case 'pull_request_target':
    case 'registry_package':
    case 'release':
    case 'workflow_run':
      return event.types || ['any'];
    case 'schedule':
      return event.map((type) =>
        cronstrue.toString(type[Object.keys(type)[0]])
      );
    case 'workflow_dispatch':
      return ['on dispatch'];
  }
}
function mapWorkflowByEvent(acc, workflow) {
  // if `on` is array then convert it into object
  if (Array.isArray(workflow.on)) {
    workflow.on = workflow.on.reduce((acc, event) => {
      return { ...acc, [event]: {} };
    }, {});
  }
  //if `on` is an string then convert it into object
  if (typeof workflow.on === 'string' || workflow.on instanceof String) {
    workflow.on = { [workflow.on]: {} };
  }
  Object.entries(workflow.on).forEach(([eventName, event]) => {
    const eventTypes = getEventTypes(eventName, event);
    eventName = eventName.replace(/_/g, '_ ');
    if (!acc[eventName]) {
      acc[eventName] = {};
    }
    try {
      eventTypes.forEach((eventType) => {
        if (!acc[eventName][eventType]) {
          acc[eventName][eventType] = [];
        }
        acc[eventName][eventType].push({
          workflowName: workflow.name,
          workflowPath: workflow.path,
          desc:
            workflow.desc ||
            'Your first comment after <code>name</code> parameter in workflow will appear here.',
          jobs: getJobs(workflow.jobs),
        });
      });
    } catch (e) {
      console.error(
        'something went wrong while parsing action types',
        workflow
      );
      throw e;
    }
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
function reduceEventTypes(acc, [eventTypeName, eventType], index, eventTypes) {
  const matchedTypeNames = [];
  for (let i = eventTypes.length - 1; i >= 0; i--) {
    const [itemTypeName, itemTypeValue] = eventTypes[i];
    if (
      eventTypeName !== itemTypeName &&
      JSON.stringify(eventType) === JSON.stringify(itemTypeValue)
    ) {
      matchedTypeNames.push(`<code>${itemTypeName}</code>`);
      eventTypes.splice(i, 1);
    }
  }

  if (matchedTypeNames.length > 0) {
    acc[matchedTypeNames.join(', ') + `, <code>${eventTypeName}</code>`] =
      eventType;
  } else {
    const isEmpty =
      !eventTypeName || eventTypeName === {} || eventTypeName === 'null';
    const eventTypeNameCode = `<code> ${
      isEmpty ? 'any' : eventTypeName
    } </code>`;
    acc[eventTypeNameCode] = eventType;
  }
  return acc;
}
function mergeSimilarEventsMap(acc, [eventName, event]) {
  acc[eventName] = Object.entries(event).reduce(reduceEventTypes, {});
  return acc;
}
module.exports = parseWorkflows;
