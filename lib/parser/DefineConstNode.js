const { BaseNode } = require('./BaseNode');
const { parseExpression } = require('../shared/parserUtils');

class DefineConstNode extends BaseNode {
  type = 'define';
  name;
  expression;

  constructor (id, name, expression) {
    super();
    this.id = id;
    this.name = name;
    this.expression = parseExpression(expression);
  }

  eval = () => {
    return `${this.name} db ${this.expression.eval()}`
  };

  evalType = () => {
    switch (this.expression.type) {
      case 'constant':
      case 'boolean':
        return 'dq';
      case 'string':
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