const { BaseNode } = require('./BaseNode');

class ProgramNode extends BaseNode {
  id = 0;
  type = 'program';

  print () {
    super.print('Root');
  }
}

module.exports = {
  ProgramNode,
};