const printNonBinaryTree = (nodes, indent) => {
  if (!nodes.length) return ;
  console.log(`Level ${indent}`);
  nodes.forEach(node => node.print());
  const allChildren = nodes.map(node => node.getChildren());
  printNonBinaryTree(allChildren.flat(), indent + 1);
};

module.exports = {
  printNonBinaryTree,
};