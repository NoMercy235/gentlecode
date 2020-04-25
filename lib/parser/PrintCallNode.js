const { BaseNode } = require('./BaseNode');
const { parseExpression } = require('../shared/parserUtils');

class PrintCallNode extends BaseNode {
  type = 'print';
  expression;

  constructor (id, expression) {
    super();
    this.id = id;
    this.expression = parseExpression(expression);
  }

  print () {
    return super.print(`{ Call print on: ${this.expression.print()} }`);
  }
}

module.exports = {
  PrintCallNode,
};