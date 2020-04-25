const path = require('path');
const { readFileContent, writeToFile } = require('./shared/ioUtils');
const { lexText } = require('./lexer');
const { generateAST } = require('./parser');
const { generateAsm } = require('./compiler');

const examplesPath = path.join(__dirname, '..', 'examples');
const outputPath = path.join(__dirname, '..', 'output');

const text = readFileContent(path.join(examplesPath, 'first-steps.gec'));
const tokens = lexText(text);

const ast = generateAST(tokens);
// ast.print();

const asmCode = generateAsm(ast);
writeToFile(path.join(outputPath, 'output.asm'), asmCode);
