const { BaseNode } = require('./BaseNode');

class ExpressionIdentifier extends BaseNode {
  type = 'identifier';
  identifier;

  constructor (id, expression) {
    super();
    this.id = id;
    this.identifier = expression.value;
  }

  print () {
    return super.print(`{ ${this.identifier} }`);
  }
}

module.exports = {
  ExpressionIdentifier,
};