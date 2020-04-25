const { DFA } = require('./DFA');
const { Scanner } = require('./Scanner');
const { FinalTypes, StartType, IntermediaryTypes } = require('../shared/constants/lexerConstants');
const {
  getAlphabet,
  getDigits,
  getSeparators,
  getWhitespaces,
  getSpecialCharacters,
} = require('../shared/lexerUtils');

const dfa = new DFA();
dfa.setFinals(Object.values(FinalTypes));

// WHITESPACE
dfa.setCollectionTransition(StartType, FinalTypes.Space, getWhitespaces());
dfa.setCollectionTransition(FinalTypes.Space, FinalTypes.Space, getWhitespaces());
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

// STRING
dfa.setTransition(StartType, IntermediaryTypes.StringBeginning, '"');
dfa.setCollectionTransition(IntermediaryTypes.StringBeginning, IntermediaryTypes.StringBeginning, getAlphabet());
dfa.setCollectionTransition(IntermediaryTypes.StringBeginning, IntermediaryTypes.StringBeginning, getSeparators());
dfa.setCollectionTransition(IntermediaryTypes.StringBeginning, IntermediaryTypes.StringBeginning, getWhitespaces());
dfa.setCollectionTransition(IntermediaryTypes.StringBeginning, IntermediaryTypes.StringBeginning, getSpecialCharacters(['"']));
dfa.setTransition(IntermediaryTypes.StringBeginning, FinalTypes.String, '"');
// STRING

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
