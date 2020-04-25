const writeInstruction = (instruction, indent = 1) => {
  return `${new Array(indent).fill(undefined).map(() => '\t')}${instruction}\n`;
};

const generateExternSection = () => {
  return writeInstruction('extern printf', 0);
};

const generateRootBody = () => {
  return writeInstruction('section .text', 0)
    + writeInstruction('global main')
    + writeInstruction('main:', 0)
  ;
};

const generateFunctionEnd = () => {
  return writeInstruction('mov rax, 60')
    + writeInstruction('mov rdi, 0')
    + writeInstruction('syscall')
};

const generatePrintWithData = (data) => {
  return writeInstruction(`mov rdi, fmtstr`)
    + writeInstruction(`mov rsi, ${data}`)
    + writeInstruction('mov rax, 0')
    + writeInstruction('call printf')
  ;
};

const generateDefineStringCode = node => {
  return `${node.name} db ${node.expression}`;
};

const generateDefineCode = node => {
  return `${node.name} ${node.type} ${node.expression}`;
};

const generateDataSection = (nodes) => {
  return writeInstruction(`section .data`, 0)
    + writeInstruction(`fmtstr db "%s", 10, 0`)
    + nodes
      .map(node => writeInstruction(generateDefineCode(node)))
      .join('')
  ;
};

module.exports = {
  generateExternSection,
  generateRootBody,
  generateDataSection,
  generateFunctionEnd,
  generatePrintWithData,
  generateDefineStringCode,
};