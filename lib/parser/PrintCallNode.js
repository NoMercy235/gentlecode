const { BaseNode } = require('./BaseNode');

class PrintCallNode extends BaseNode {
  type = 'print';
  expression;

  constructor (id, expression) {
    super();
    this.id = id;
    this.expression = expression;
  }

  print () {
    super.print(`{ Call print on: ${this.expression} }`);
  }
}

module.exports = {
  PrintCallNode,
};