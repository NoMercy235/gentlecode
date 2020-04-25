const { BaseNode } = require('./BaseNode');
const { NodeTypes } = require('../shared/constants/parserConstants');

class ExpressionString extends BaseNode {
  type = NodeTypes.ExpressionString;
  string;

  constructor (id, token) {
    super();
    this.id = id;
    this.string = token.value;
  }

  eval = () => {
    return `${this.string}, 0`;
  };

  print () {
    return super.print(`{ ${this.string} }`);
  }
}

module.exports = {
  ExpressionString,
};