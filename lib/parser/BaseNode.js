class BaseNode {
  id;
  type;
  children = [];

  print = () => {
    console.log(`[${this.id}: ${this.type}]`);
  };

  getChildren = () => this.children;

  pushChild = node => {
    this.children.push(node);
  };
}

module.exports = {
  BaseNode,
};