const { BaseNode } = require('./BaseNode');

class ExpressionString extends BaseNode {
  type = 'string';
  string;

  constructor (id, expression) {
    super();
    this.id = id;
    this.string = expression.value;
  }

  print () {
    return super.print(`{ ${this.string} }`);
  }
}

module.exports = {
  ExpressionString,
};