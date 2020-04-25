const { BaseNode } = require('./BaseNode');

class ExpressionIdentifier extends BaseNode {
  type = 'identifier';
  identifier;

  constructor (id, expression) {
    super();
    this.id = id;
    this.identifier = expression.value;
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