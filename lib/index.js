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
    throw error;
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
    acc += `| <a href="${step.workflowPath.replace(
      /\\/g,
      '/'
    )}" id="${getMarkdownHeaderId(step.workflowName)}">${
      step.workflowName
    }</a> | ${step.desc} |\n`;
    return acc;
  }, `## Workflows \n\n | Workflow | Description | \n | --- | --- | \n`);
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
  const table = Object.entries(workflows).reduce((acc, [eventName, value]) => {
    // generate title and headers
    const event_talbe = Object.entries(value).reduce(
      (acc, [key, value]) => {
        acc[0] += `<th>${key}</th>`;
        acc[1] +=
          '<td>' +
          value.reduce(
            (acc, details) =>
              (acc += `<li><a href='#${getMarkdownHeaderId(
                details.workflowName
              )}'>${details.workflowName}</a></li>`),
            '<ul>'
          );
        acc[1] += '</ul>';

        return acc;
      },
      [`\n<th rowspan=2><code>${eventName}</code></th>`, '']
    );
    acc += `<tr>${event_talbe[0]}</tr>\n<tr>${event_talbe[1]}</tr>`;
    return acc;
  }, '\n');
  return `## Event-Workflow Map\n\n<table>${table}</table>\n\n`;
}

module.exports = {
  getWorkflowsMarkdown,
  writeFile,
};
