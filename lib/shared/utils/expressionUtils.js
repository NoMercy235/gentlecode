const { FinalTypes } = require('../constants/lexerConstants');
const { ExpressionString } = require('../../parser/expressions/ExpressionString');
const { ExpressionBool } = require('../../parser/expressions/ExpressionBool');
const { ExpressionConst } = require('../../parser/expressions/ExpressionConst');
const { ExpressionIdentifier } = require('../../parser/expressions/ExpressionIdentifier');

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