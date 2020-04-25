const { BaseNode } = require('./BaseNode');

class ExpressionBool extends BaseNode {
  type = 'boolean';
  boolean;

  constructor (id, expression) {
    super();
    this.id = id;
    this.boolean = expression.value === 'true';
  }

  print () {
    return super.print(`{ ${this.boolean} }`);
  }
}

module.exports = {
  ExpressionBool,
};