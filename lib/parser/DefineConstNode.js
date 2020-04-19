const { BaseNode } = require('./BaseNode');

class DefineConstNode extends BaseNode {
  type = 'define';

  constructor (id) {
    super();
    this.id = id;
  }
}

module.exports = {
  DefineConstNode,
};