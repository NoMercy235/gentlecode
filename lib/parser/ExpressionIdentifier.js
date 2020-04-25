const { BaseNode } = require('./BaseNode');

class ExpressionIdentifier extends BaseNode {
  type = 'identifier';
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