const { BaseNode } = require('./BaseNode');

class ExpressionConst extends BaseNode {
  type = 'constant';
  constant;

  constructor (id, token) {
    super();
    this.id = id;
    this.constant = +token.value;
  }

  eval = () => {
    return this.constant;
  };

  print () {
    return super.print(`{ ${this.constant} }`);
  }
}

module.exports = {
  ExpressionConst,
};