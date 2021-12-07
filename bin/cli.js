#!/usr/bin/env node
const tool = require('command-line-tool');
const version = require('../package').version;

console.log(version);

function parseCommandLine() {
  const cliData = require('../lib/cli-data');
  try {
    return tool.getCli(cliData.definitions, cliData.usageSections);
  } catch (err) {
    handleError(err);
  }
}
