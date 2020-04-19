const { ProgramNode } = require('./ProgramNode');

class AST {
  constructor () {
    this.root = new ProgramNode();
  }
}

module.exports = {
  AST,
};