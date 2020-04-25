const { BaseNode } = require('../nodes/BaseNode');
const { NodeTypes } = require('../../shared/constants/parserConstants');

class ExpressionBool extends BaseNode {
  type = NodeTypes.ExpressionBool;
  boolean;

  constructor (id, token) {
    super();
    this.id = id;
    this.boolean = token.value === 'true';
  }

  eval = () => {
    return this.boolean ? 1 : 0;
  };

  print () {
    return super.print(`{ ${this.boolean} }`);
  }
}

module.exports = {
  ExpressionBool,
};