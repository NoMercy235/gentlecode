const { BaseNode } = require('./BaseNode');

class ExpressionBool extends BaseNode {
  type = 'boolean';
  boolean;

  constructor (id, token) {
    super();
    this.id = id;
    this.boolean = token.value === 'true';
  }

  eval = () => {
    return this.boolean ? 1 : 0;
  };

  print () {
    return super.print(`{ ${this.boolean} }`);
  }
}

module.exports = {
  ExpressionBool,
};