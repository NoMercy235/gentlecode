const path = require('path');
const { readFileContent } = require('./shared/ioUtils');
const { lexText } = require('./lexer');

const text = readFileContent(path.join(__dirname, '..', 'examples', 'first-steps.gec'));
const tokens = lexText(text);
console.log(tokens);
