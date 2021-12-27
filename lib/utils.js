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
    if (files[i].endsWith('.yml') || files[i].endsWith('.yaml')) {
      filePaths.push(path.join(dir, files[i]));
    }
  }
  return filePaths;
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
  getMarkdownHeaderId,
  writeFile,
};
