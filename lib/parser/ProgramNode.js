const { BaseNode } = require('./BaseNode');

class ProgramNode extends BaseNode {
  id = 0;
  type = 'program';
}

module.exports = {
  ProgramNode,
};