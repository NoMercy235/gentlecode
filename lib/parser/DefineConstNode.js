const { BaseNode } = require('./BaseNode');
const { parseToken } = require('../shared/parserUtils');

class DefineConstNode extends BaseNode {
  type = 'define';
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