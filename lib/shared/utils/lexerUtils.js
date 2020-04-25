const { FinalTypes, StartType, EndType, ErrorType } = require('../constants/lexerConstants');

const getFinalTypeFromState = stateId => {
  switch (stateId) {
    case StartType.id:
      return StartType;
    case EndType.id:
      return EndType;
    case ErrorType.id:
      return ErrorType;
    default:
      return Object.values(FinalTypes).find(({ id }) => {
        return id === stateId;
      });
  }
}

const asciiToChar = val => {
  if (typeof val === 'string') {
    if (val.length !== 1) {
      throw new Error('Transitions are only made with chars');
    }
    return val.charCodeAt(0);
  }
  return val;
}

const getAlphabet = (excluded = []) => {
  const result = [];
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    result.push(i);
    result.push(i - 32);
  }
  return result.filter(el => !excluded.includes(el));
};

const getDigits = (excluded = []) => {
  return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    .filter(el => !excluded.includes(el));
};

const getSeparators = (excluded = []) => {
  return [ ';', ':', '{', '}', '(', ')', '[', ']', ',', '.' ]
    .filter(el => !excluded.includes(el));
};

const getWhitespaces = (excluded = []) => {
  return [' ', '\n', '\r', '\t']
    .filter(el => !excluded.includes(el));
};

const getSpecialCharacters = (excluded = []) => {
  return [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '`', '~',
    '[', ']', '{', '}', ':', ';', '\'', '"', '\\', '|', ',', '<', '.', '>', '/', '?'
  ].filter(el => !excluded.includes(el));
};

module.exports = {
  getFinalTypeFromState,
  asciiToChar,
  getAlphabet,
  getDigits,
  getSeparators,
  getWhitespaces,
  getSpecialCharacters,
}