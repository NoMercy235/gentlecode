const { DefineConstNode } = require('../parser/DefineConstNode');

const generateRootBody = () => {
  return 'section .text\n'
    + '\tglobal main\n'
    + 'main:\n'
  ;
};

const generateFunctionEnd = () => {
  return '\tmov rax, 60\n'
    + '\tmov rdi, 0\n'
    + '\tsyscall\n'
};

const generatePrintWithData = (data) => {
  return '\tmov rax, 1\n'
    + '\tmov rdi, 1\n'
    + `\tmov rsi, ${data}\n`
    + '\tmov rdx, 13\n'
    + '\tsyscall\n'
};

const generateDefineCode = node => {
  if (node instanceof DefineConstNode) {
    return `${node.name} db ${node.expression}`;
  }
};

const generateDataSection = (nodes) => {
  return `section .data\n`
    + nodes
      .map(node => `\t${generateDefineCode(node)}`)
      .join('\n')
    + '\n'
  ;
};

module.exports = {
  generateRootBody,
  generateDataSection,
  generateFunctionEnd,
  generatePrintWithData,
};