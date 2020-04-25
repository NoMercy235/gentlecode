const { BaseNode } = require('./BaseNode');

class ExpressionConst extends BaseNode {
  type = 'constant';
  constant;

  constructor (id, expression) {
    super();
    this.id = id;
    this.constant = +expression.value;
  }

  print () {
    return super.print(`{ ${this.constant} }`);
  }
}

module.exports = {
  ExpressionConst,
};