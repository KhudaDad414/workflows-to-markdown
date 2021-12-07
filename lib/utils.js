const fs = require('fs');
const path = require('path');

function getMarkdownHeaderId(str) {
  return str.toLowerCase().replace(/\s/g, '-');
}

//get file paths from a directory
function getFilesPath(dir) {
  var filePaths = [];
  var files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    filePaths.push(path.join(dir, files[i]));
  }
  return filePaths;
}

function toTitleCase(str) {
  const formatted = str.replace(/_/g, ' ').replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  switch (str) {
    case 'schedule':
      return 'Schedules:';
    default:
      return `When ${formatted}:`;
  }
}

//write string to file
function writeFile(filePath, content) {
  fs.writeFile(filePath, content, function (err) {
    if (err) {
      throw err;
    }
    console.log(`The file ${filePath} was saved!`);
  });
}
module.exports = {
  getFilesPath,
  toTitleCase,
  getMarkdownHeaderId,
  writeFile,
};
