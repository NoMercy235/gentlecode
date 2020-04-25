const { BaseNode } = require('./BaseNode');
const { NodeTypes } = require('../../shared/constants/parserConstants');
const { parseToken } = require('../../shared/utils/expressionUtils');

class DefineConstNode extends BaseNode {
  type = NodeTypes.Define;
  name;
  expression;

  constructor (id, name, token) {
    super();
    this.id = id;
    this.name = name;
    this.expression = parseToken(token);
  }

  evalType = () => {
    switch (this.expression.type) {
      case NodeTypes.ExpressionConst:
      case NodeTypes.ExpressionBool:
        return 'dq';
      case NodeTypes.ExpressionString:
        return 'db';
    }
  };

  print () {
    return super.print(`{ ${this.name}: ${this.expression.print()} }`);
  }
}

module.exports = {
  DefineConstNode,
};