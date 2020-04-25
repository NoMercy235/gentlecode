const fs = require('fs');

const readFileContent = (path) => {
  return fs.readFileSync(path, { encoding: 'utf8' });
};

const writeToFile = (path, content) => {
  fs.writeFileSync(path, content, { encoding: 'utf8' });
};

module.exports = {
  readFileContent,
  writeToFile,
}