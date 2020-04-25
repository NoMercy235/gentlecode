const { ProgramNode } = require('./ProgramNode');
const { printNonBinaryTree } = require('../shared/parserUtils');

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