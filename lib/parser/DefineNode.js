const { BaseNode } = require('./BaseNode');

class DefineNode extends BaseNode {
  type = 'define';

  constructor (id) {
    super();
    this.id = id;
  }
}

module.exports = {
  DefineNode,
};