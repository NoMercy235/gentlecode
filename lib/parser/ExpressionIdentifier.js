const { BaseNode } = require('./BaseNode');
const { NodeTypes } = require('../shared/constants/parserConstants');

class ExpressionIdentifier extends BaseNode {
  type = NodeTypes.ExpressionIdentifier;
  identifier;

  constructor (id, token) {
    super();
    this.id = id;
    this.identifier = token.value;
  }

  eval = () => {
    return this.identifier;
  };

  print () {
    return super.print(`{ ${this.identifier} }`);
  }
}

module.exports = {
  ExpressionIdentifier,
};