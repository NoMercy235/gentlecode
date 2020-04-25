const { getFinalTypeFromState } = require('../shared/utils/lexerUtils');

class Token {
  constructor (value, state, position) {
    this.value = value;
    this.type = getFinalTypeFromState(state);
    this.position = position;
  }
}

module.exports = { Token };