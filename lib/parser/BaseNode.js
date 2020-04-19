class BaseNode {
  id;
  type;
  children = [];

  print (metadata) {
    console.log(`[${this.id}-${this.type}]${metadata ? `: ${metadata}` : ''}`);
  }

  getChildren = () => this.children;

  pushChild = node => {
    this.children.push(node);
  };
}

module.exports = {
  BaseNode,
};