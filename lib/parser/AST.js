const { ProgramNode } = require('./nodes/ProgramNode');
const { printNonBinaryTree } = require('../shared/utils/parserUtils');

class AST {
  constructor () {
    this.root = new ProgramNode();
  }

  print = () => {
    printNonBinaryTree(this.root, 0);
  };
}

module.exports = {
  AST,
};