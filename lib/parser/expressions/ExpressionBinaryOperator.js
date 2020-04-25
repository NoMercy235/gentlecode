const { BaseNode } = require('../nodes/BaseNode');
const { NodeTypes } = require('../../shared/constants/parserConstants');
const { parseToken } = require('../../shared/utils/expressionUtils');

class ExpressionBinaryOperator extends BaseNode {
  type = NodeTypes.ExpressionBinaryOperator;
  parts;

  constructor (id, [lop, op, rop]) {
    super();
    this.id = id;
    this.parts = {
      lop: parseToken(lop),
      op,
      rop: parseToken(rop),
    }
  }

  eval = () => {
    const { lop, op, rop } = this.parts;
    return `${lop.eval()} ${op.value} ${rop.eval()}`;
  };

  print () {
    const { lop, op, rop } = this.parts;
    return super.print(`{ ${lop.eval()} ${op} ${rop.eval()} }`);
  }
}

module.exports = {
  ExpressionBinaryOperator,
};