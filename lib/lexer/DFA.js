const { asciiToChar } = require('../shared/lexerUtils');
const { EndType, ErrorType } = require('../shared/constants/lexerConstants');

class DFA {
  constructor () {
    this.final = [];
    this.transitions = {};
  }

  isFinal = stateId => this.final.find(({ id }) => id === stateId);
  setFinal = state => {
    this.final.push(state);
  }
  setFinals = states => {
    states.forEach(this.setFinal);
  }

  getTransition = (state, asciiChar) => {
    return this.transitions[state][asciiToChar(asciiChar)];
  };

  setCollectionTransition = (fromState, toState, collection) => {
    collection.forEach(item => this.setTransition(fromState, toState, item));
  };

  setTransition = (fromState, toState, asciiChar) => {
    if (fromState < 0 || toState < -1) {
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

    if (pos >= text.length) {
      return { stateId: EndType.id };
    }

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