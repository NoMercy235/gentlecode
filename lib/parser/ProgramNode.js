const { BaseNode } = require('./BaseNode');
const { idGenerator } = require('../shared/parserUtils');

class ProgramNode extends BaseNode {
  id = idGenerator.next().value;
  type = 'program';

  print () {
    return super.print('Root');
  }
}

module.exports = {
  ProgramNode,
};