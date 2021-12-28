# workflows-to-markdown [![NPM version](https://img.shields.io/npm/v/workflows-to-markdown.svg?style=flat)](https://www.npmjs.com/package/workflows-to-markdown)

Workflows to markdown is supposed to generate a map of your event-workflows. It will show you what event causes which workflows to run.


## Install

> Note: You can use [Workflows to Markdown Action](https://github.com/KhudaDad414/workflows2md-action) if you want to automate the process of map generation.

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save-dev workflows-to-markdown
```

## CLI

```
Usage: cli [options]

Options:
  -o, --output <path>  path to an .md file that you want your documentation to be saved there. (default:
                       ".github/workflows/README.md")
  -i, --input <path>   path to a directory that contains your workflow files. (default: ".github/workflows")
  -h, --help           display help for command
```
