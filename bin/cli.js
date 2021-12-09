#! /usr/bin/env node
const { getWorkflowsMarkdown, writeFile } = require('../lib');
const { program } = require('commander');
program
  .option(
    '-o, --output <path>',
    'path to an .md file that you want your documentation to be saved there.',
    '.github/README.md'
  )
  .option(
    '-i, --input <path>',
    'path to a directory that contains your workflow files.',
    '.github/workflows'
  )
  .parse();

const { output, input } = program.opts();
const markdown = getWorkflowsMarkdown(input);
console.log(markdown);
writeFile(output, markdown);
