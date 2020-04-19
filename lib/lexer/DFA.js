const { asciiToChar } = require('../shared/lexerUtils');
const { ErrorType } = require('./Types');

class DFA {
  constructor () {
    this.setupDFA(0);
  }

  setupDFA = (stateNr) => {
    this.stateNr = stateNr;
    this.final = [];
    this.transitions = {};
  };

  setStateNr = (stateNr) => {
    if (stateNr < 0) {
      throw new Error('State number cannot be negative');
    }
    this.setupDFA(stateNr);
  };

  isFinal = stateId => this.final.find(({ id }) => id === stateId);
  setFinal = state => {
    if (state >= this.stateNr) {
      throw new Error('Final state out of range');
    }
    this.final.push(state);
  }

  getTransition = (state, asciiChar) => {
    return this.transitions[state][asciiToChar(asciiChar)];
  };

  setCollectionTransition = (fromState, toState, collection) => {
    collection.forEach(item => this.setTransition(fromState, toState, item));
  };

  setTransition = (fromState, toState, asciiChar) => {
    if (fromState < 0 || fromState >= this.stateNr || toState < -1 || toState >= this.stateNr) {
      throw new Error('States out of boundary');
    }
    const char = asciiToChar(asciiChar);
    if (!this.transitions[fromState.id]) this.transitions[fromState.id] = {};
    this.transitions[fromState.id][char] = toState.id;
  };

  showToken = (value, state, excluded = []) => {
    // TODO: implement
  };

  discover = (text, pos) => {
    let stateId = 0;
    let tmpState = 0;
    let lastIndex = 0;
    let buffer = '';
    let tmpBuffer = '';

    for (let i = pos; i < text.length || tmpState !== 0; i++) {
      if (stateId === ErrorType.id && !tmpState) {
        return { text: buffer, pos, stateId };
      }
      if (stateId === ErrorType.id && tmpState) {
        return { text: tmpBuffer, pos: lastIndex + 1, stateId: tmpState };
      }
      const stateTransition = this.transitions[stateId];
      if (!stateTransition) {
        stateId = ErrorType.id;
      } else {
        stateId = this.transitions[stateId][text[i].charCodeAt(0)];
        buffer += text[i];
      }

      if (this.isFinal(stateId)) {
        tmpState = stateId;
        tmpBuffer = buffer;
        lastIndex = i;
      }
    }

    if (this.isFinal(stateId)) {
      return { text: tmpBuffer, pos: undefined, stateId: tmpState };
    } else {
      return { text: buffer, pos: undefined, stateId: buffer.length === 0 ? 0 : ErrorType };
    }
  };
}

module.exports = {
  DFA,
}