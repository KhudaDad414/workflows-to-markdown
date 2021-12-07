const parseWorkflows = require('./parser');
const cronstrue = require('cronstrue');
const { getMarkdownHeaderId, toTitleCase, writeFile } = require('./utils');

function getWorkflowsMarkdown(path) {
  try {
    const workflowsWithEvents = parseWorkflows(path);
    const workflowTriggersMarkdown = workflowsToTable(workflowsWithEvents);
    const workflowsMarkdown = workflowsInfoToMarkdown(workflowsWithEvents);

    return workflowTriggersMarkdown + workflowsMarkdown;
  } catch (error) {
    console.error(error);
  }
}
function workflowsInfoToMarkdown(workflows) {
  const steps = [];
  Object.entries(workflows).forEach(([, event]) => {
    Object.entries(event).forEach(([, eventType]) => {
      steps.push(...eventType);
    });
  });

  const stepsWithoutDuplicates = removeDuplicates(steps);
  return stepsWithoutDuplicates.reduce((acc, step) => {
    acc += `### [${step.workflowName}](${step.workflowPath
      .replace(/\\/g, '/')
      .substring(4)}) \n`;
    acc += `${step.desc} \n`;
    return acc;
  }, `## Workflows \n`);
}
//remove duplicated objects from array
function removeDuplicates(arr) {
  return arr.filter(
    (workflow, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.workflowName === workflow.workflowName &&
          t.workflowPath === workflow.workflowPath
      )
  );
}

function workflowsToTable(workflows) {
  return Object.entries(workflows).reduce((acc, [eventName, value]) => {
    // generate title and headers
    const event_talbe = Object.entries(value).reduce(
      (acc, [key, value]) => {
        acc[0] += `${
          eventName === 'schedule' ? cronstrue.toString(key) : key
        } | `;
        acc[1] += `--- | `;

        acc[2] += value.reduce(
          (acc, details) =>
            (acc += `<li>[${details.workflowName}](#${getMarkdownHeaderId(
              details.workflowName
            )})</li>`),
          '<ul>'
        );
        acc[2] += ' </ul> |';

        return acc;
      },
      [`\n | ${toTitleCase(eventName)} | `, '| ', '| ']
    );
    acc += event_talbe[0] + '\n' + event_talbe[1] + '\n' + event_talbe[2];
    return acc;
  }, '\n');
}

module.exports = {
  getWorkflowsMarkdown,
  writeFile,
};
