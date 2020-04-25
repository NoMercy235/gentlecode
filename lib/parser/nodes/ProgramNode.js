const { BaseNode } = require('./BaseNode');
const { idGenerator } = require('../../shared/utils/parserUtils');
const { NodeTypes } = require('../../shared/constants/parserConstants');

class ProgramNode extends BaseNode {
  id = idGenerator.next().value;
  type = NodeTypes.Program;

  print () {
    return super.print('Root');
  }
}

module.exports = {
  ProgramNode,
};