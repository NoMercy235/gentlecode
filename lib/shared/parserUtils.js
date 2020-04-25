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

const parseExpression = (expression) => {
  if (expression.type.id === FinalTypes.NaturalNumber.id) {
    return new ExpressionConst(idGenerator.next().value, expression);
  } else if (expression.value === 'true' || expression.value === 'false') {
    return new ExpressionBool(idGenerator.next().value, expression);
  } else if (expression.type.id === FinalTypes.String.id) {
    return new ExpressionString(idGenerator.next().value, expression);
  } else if (expression.type.id === FinalTypes.Identifier.id) {
    return new ExpressionIdentifier(idGenerator.next().value, expression);
  }
};

module.exports = {
  printNonBinaryTree,
  parseExpression,
  idGenerator,
};