const { BaseNode } = require('./BaseNode');
const { DefineConstNode } = require('./DefineConstNode');
const { ExpressionIdentifier } = require('./ExpressionIdentifier');
const { idGenerator, nameGenerator } = require('../shared/parserUtils');
const { FinalTypes } = require('../lexer/Types');

class PrintCallNode extends BaseNode {
  type = 'print';
  expression;

  constructor (id, expression) {
    super();
    this.id = id;
    if (expression.type.id === FinalTypes.Identifier.id) {
      this.expression = new ExpressionIdentifier(idGenerator.next().value, expression);
    } else {
      const newName = nameGenerator.next().value;
      this.children = [new DefineConstNode(idGenerator, newName, expression)];
      this.expression = new ExpressionIdentifier(
        idGenerator.next().value,
        { ...expression, value: newName })
    }
  }

  print () {
    return super.print(`{ Call print on: ${this.expression.print()} }`);
  }
}

module.exports = {
  PrintCallNode,
};