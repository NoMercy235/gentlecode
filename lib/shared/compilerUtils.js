const { DefineConstNode } = require('../parser/DefineConstNode');

const generateRootBody = () => {
  return 'section .text\n'
    + '\tglobal main\n'
    + 'main:\n'
  ;
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
};