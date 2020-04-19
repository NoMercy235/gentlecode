const { DFA } = require('./DFA');
const { Scanner } = require('./Scanner');
const { FinalTypes, StartType } = require('./Types');
const { getAlphabet, getDigits, getSeparators } = require('../shared/lexerUtils');

const dfa = new DFA();
dfa.setFinals(Object.values(FinalTypes));

// WHITESPACE
dfa.setCollectionTransition(StartType, FinalTypes.Space, [' ', '\n', '\r', '\t']);
dfa.setCollectionTransition(FinalTypes.Space, FinalTypes.Space, [' ', '\n', '\r', '\t']);
// WHITESPACE

// SEPARATORS
dfa.setCollectionTransition(StartType, FinalTypes.Separator, getSeparators());
// SEPARATORS

// NATURAL NUMBERS
dfa.setCollectionTransition(StartType, FinalTypes.NaturalNumber, getDigits('0'));
dfa.setCollectionTransition(FinalTypes.NaturalNumber, FinalTypes.NaturalNumber, getDigits());
// NATURAL NUMBERS

// IDENTIFIERS
dfa.setCollectionTransition(StartType, FinalTypes.Identifier, getAlphabet())
dfa.setCollectionTransition(FinalTypes.Identifier, FinalTypes.Identifier, getAlphabet())
dfa.setCollectionTransition(FinalTypes.Identifier, FinalTypes.Identifier, getDigits())
// IDENTIFIERS

const lexText = text => {
  const tokens = [];
  const scanner = new Scanner(dfa, text);
  let token;
  while (!scanner.blocked && (token = scanner.getToken())) {
    tokens.push(token);
  }
  return tokens;
};

module.exports = {
  lexText,
};
