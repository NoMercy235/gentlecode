const { BaseNode } = require('./BaseNode');
const { NodeTypes } = require('../shared/constants/parserConstants');

class ExpressionConst extends BaseNode {
  type = NodeTypes.ExpressionConst;
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