const { BaseNode } = require('./BaseNode');

class DefineConstNode extends BaseNode {
  type = 'define';
  name;
  expression;

  constructor (id, name, expression) {
    super();
    this.id = id;
    this.name = name;
    this.expression = expression;
  }

  print () {
    super.print(`{ ${this.name}: ${this.expression} }`);
  }
}

module.exports = {
  DefineConstNode,
};