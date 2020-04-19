const path = require('path');
const { readFileContent } = require('./shared/ioUtils');
const { lexText } = require('./lexer');
const { generateAST } = require('./parser');

const text = readFileContent(path.join(__dirname, '..', 'examples', 'first-steps.gec'));
const tokens = lexText(text);

const ast = generateAST(tokens);
ast.print();
