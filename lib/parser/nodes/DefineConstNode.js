const { BaseNode } = require('./BaseNode');
const { ExpressionBinaryOperator } = require('../expressions/ExpressionBinaryOperator');
const { NodeTypes } = require('../../shared/constants/parserConstants');
const { parseToken } = require('../../shared/utils/expressionUtils');
const { idGenerator } = require('../../shared/utils/parserUtils');

class DefineConstNode extends BaseNode {
  type = NodeTypes.Define;
  name;
  expression;

  constructor (id, name, tokens) {
    super();
    this.id = id;
    this.name = name;
    if (tokens.length > 1) {
      this.expression = new ExpressionBinaryOperator(idGenerator.next().value, tokens);
    } else {
      this.expression = parseToken(tokens[0]);
    }
  }

  evalType = () => {
    switch (this.expression.type) {
      case NodeTypes.ExpressionConst:
        return 'dq';
      case NodeTypes.ExpressionBool:
        return 'equ';
      case NodeTypes.ExpressionString:
        return 'db';
      case NodeTypes.ExpressionBinaryOperator:
        return 'equ';
    }
  };

  print () {
    return super.print(`{ ${this.name}: ${this.expression.print()} }`);
  }
}

module.exports = {
  DefineConstNode,
};