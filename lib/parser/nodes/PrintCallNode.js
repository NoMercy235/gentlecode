const { BaseNode } = require('./BaseNode');
const { DefineConstNode } = require('./DefineConstNode');
const { ExpressionIdentifier } = require('../expressions/ExpressionIdentifier');
const { idGenerator, nameGenerator } = require('../../shared/utils/parserUtils');
const { FinalTypes } = require('../../shared/constants/lexerConstants');
const { NodeTypes } = require('../../shared/constants/parserConstants');

class PrintCallNode extends BaseNode {
  type = NodeTypes.Print;
  expression;

  constructor (id, token) {
    super();
    this.id = id;
    if (token.type.id === FinalTypes.Identifier.id) {
      this.expression = new ExpressionIdentifier(idGenerator.next().value, token);
    } else {
      const newName = nameGenerator.next().value;
      this.children = [new DefineConstNode(idGenerator.next().value, newName, token)];
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