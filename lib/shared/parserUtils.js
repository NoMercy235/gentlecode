const { FinalTypes } = require('../lexer/Types');
const { ExpressionString } = require('../parser/ExpressionString');
const { ExpressionBool } = require('../parser/ExpressionBool');
const { ExpressionConst } = require('../parser/ExpressionConst');
const { ExpressionIdentifier } = require('../parser/ExpressionIdentifier');

const printNonBinaryTree = (nodes, indent) => {
  if (!nodes.length) return ;
  console.log(`Level ${indent}`);
  nodes.forEach(node => console.log(node.print()));
  const allChildren = nodes.map(node => node.getChildren());
  printNonBinaryTree(allChildren.flat(), indent + 1);
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

const parseToken = (token) => {
  if (token.type.id === FinalTypes.NaturalNumber.id) {
    return new ExpressionConst(idGenerator.next().value, token);
  } else if (token.value === 'true' || token.value === 'false') {
    return new ExpressionBool(idGenerator.next().value, token);
  } else if (token.type.id === FinalTypes.String.id) {
    return new ExpressionString(idGenerator.next().value, token);
  } else if (token.type.id === FinalTypes.Identifier.id) {
    return new ExpressionIdentifier(idGenerator.next().value, token);
  }
};

module.exports = {
  printNonBinaryTree,
  parseToken,
  idGenerator,
  nameGenerator,
};