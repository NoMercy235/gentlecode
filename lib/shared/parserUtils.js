const printNonBinaryTree = (node, indent) => {
  console.log(`${' '.repeat(indent)}${node.print()}`);
  node.getChildren().forEach(childNode => {
    printNonBinaryTree(childNode, indent + 1);
  });
};

const idGenerator = (function*() {
  for (let i = 0;; i++) {
    yield i;
  }
})();

const nameGenerator = (function*() {
  for (let i = 0;; i++) {
    yield `__anonymous__${i}`;
  }
})();

module.exports = {
  printNonBinaryTree,
  idGenerator,
  nameGenerator,
};