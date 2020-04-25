const { FinalTypes } = require('../lexer/Types');
const { ExpressionString } = require('../parser/ExpressionString');
const { ExpressionBool } = require('../parser/ExpressionBool');
const { ExpressionConst } = require('../parser/ExpressionConst');
const { ExpressionIdentifier } = require('../parser/ExpressionIdentifier');

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
  parseToken,
  idGenerator,
  nameGenerator,
};