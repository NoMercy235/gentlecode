const { BaseNode } = require('./BaseNode');
const { DefineConstNode } = require('./DefineConstNode');
const { ExpressionIdentifier } = require('./ExpressionIdentifier');
const { idGenerator, nameGenerator } = require('../shared/parserUtils');
const { FinalTypes } = require('../lexer/Types');

class PrintCallNode extends BaseNode {
  type = 'print';
  expression;

  constructor (id, token) {
    super();
    this.id = id;
    if (token.type.id === FinalTypes.Identifier.id) {
      this.expression = new ExpressionIdentifier(idGenerator.next().value, token);
    } else {
      const newName = nameGenerator.next().value;
      this.children = [new DefineConstNode(idGenerator, newName, token)];
      this.expression = new ExpressionIdentifier(
        idGenerator.next().value,
        { ...token, value: newName })
    }
  }

  print () {
    return super.print(`{ Call print on: ${this.expression.print()} }`);
  }
}

module.exports = {
  PrintCallNode,
};