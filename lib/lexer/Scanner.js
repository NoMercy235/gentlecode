const { ErrorType } = require('./Types');
const { Token } = require('./Token');

class Scanner {
  constructor (dfa, inputFileText) {
    this.text = inputFileText;
    this.dfa = dfa;

    // Set the scanner to the beginning of the file
    this.cursor = 0;
    this.blocked = false;
  }

  getToken = (excluded = []) => {
    if (this.blocked) {
      throw new Error('Cannot continue. Already encountered an error');
    }

    const response = this.dfa.discover(this.text, this.cursor);
    const token = new Token(response.text, response.stateId, this.cursor);
    this.cursor = response.pos || this.cursor + 1;

    if (response.stateId === ErrorType.id) {
      console.log('blocked');
      this.blocked = true;
      return token;
    }

    return excluded.includes(token.type)
      ? null
      : token;
  };
}

module.exports = { Scanner };