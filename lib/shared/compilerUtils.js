const { DefineConstNode } = require('../parser/DefineConstNode');

const writeInstruction = (instruction, indent = 1) => {
  return `${new Array(indent).fill(undefined).map(() => '\t')}${instruction}\n`;
};

const generateRootBody = () => {
  return writeInstruction('section .text', 0)
    + writeInstruction('global main')
    + writeInstruction('main', 0)
  ;
};

const generateFunctionEnd = () => {
  return writeInstruction('mov rax, 60')
    + writeInstruction('mov rdi, 0')
    + writeInstruction('syscall')
};

const generatePrintWithData = (data) => {
  return writeInstruction('mov rax, 1')
    + writeInstruction('mov rdi, 1')
    + writeInstruction(`mov rsi, ${data}`)
    + writeInstruction(`mov rdx, ${data.length}`)
    + writeInstruction('syscall')
  ;
};

const generateDefineCode = node => {
  if (node instanceof DefineConstNode) {
    return `${node.name} db ${node.expression}`;
  }
};

const generateDataSection = (nodes) => {
  return writeInstruction(`section .data`)
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