#! /usr/bin/env node

const { program } = require('commander');
program
  .option(
    '-o, --output',
    'path to an .md file that you want your documentation to be saved there. The default template is .github/workflows/README.md'
  )
  .action(markDone);

program.parse();
function markDone() {
  console.log('done    '.repeat(20));
}
