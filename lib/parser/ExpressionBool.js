const { BaseNode } = require('./BaseNode');

class ExpressionBool extends BaseNode {
  type = 'boolean';
  boolean;

  constructor (id, expression) {
    super();
    this.id = id;
    this.boolean = expression.value === 'true';
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