/**
 * TODO: implement lexer
 * Should receive an input file and return a list of tokens
 * @constructor
 */

const path = require('path');

const { DFA } = require('./DFA');
const { Scanner } = require('./Scanner');
const { FinalTypes, StartType } = require('./Types');
const { getAlphabet, getDigits, getSeparators } = require('../shared/lexerUtils');
const { readFileContent } = require('../shared/ioUtils');

const dfa = new DFA();
dfa.setFinals(Object.values(FinalTypes));

// set rules
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

dfa.setCollectionTransition(StartType, FinalTypes.Identifier, getAlphabet())
dfa.setCollectionTransition(FinalTypes.Identifier, FinalTypes.Identifier, getAlphabet())
dfa.setCollectionTransition(FinalTypes.Identifier, FinalTypes.Identifier, getDigits())

// console.log(dfa.transitions);
const text = readFileContent(path.join(__dirname, '..', '..', 'examples', 'first-steps.gec'));
const scanner = new Scanner(dfa, text);

console.log(scanner.getToken());
console.log(scanner.getToken());
console.log(scanner.getToken());
console.log(scanner.getToken());
console.log(scanner.getToken());
console.log(scanner.getToken());
console.log(scanner.getToken());
console.log(scanner.getToken());
console.log(scanner.getToken());
console.log(scanner.getToken());
