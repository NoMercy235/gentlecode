const { AST } = require('./AST');
const { DefineConstNode } = require('./DefineConstNode');
const { PrintCallNode } = require('./PrintCallNode');
const { FinalTypes } = require('../lexer/Types');

const generateAST = tokens => {
  const ast = new AST();

  const parsedTokens = tokens.filter(({ type }) => type.id !== FinalTypes.Space.id);
  let token;
  let id = 0;
  while (token = parsedTokens.shift()) {
    id++;
    switch (token.value) {
      case 'please':
        token = parsedTokens.shift();
        switch (token.value) {
          case 'define':
            const name = parsedTokens.shift().value;
            parsedTokens.shift(); // as
            const expression = parsedTokens.shift().value;
            parsedTokens.shift(); // ;
            // this can be a complex expression, not just a constant
            ast.root.pushChild(new DefineConstNode(id, name, expression));
            break;
          case 'print':
            parsedTokens.shift(); // (
            const expressionToPrint = parsedTokens.shift().value;
            parsedTokens.shift(); // )
            parsedTokens.shift(); // ;
            // this can be a complex expression, not just a constant
            ast.root.pushChild(new PrintCallNode(id, expressionToPrint));
            break;
        }
        break;
    }
  }

  // feed the tokens somewhere
  // peek at the first token
  // while tokens
  // check to see if it is enough to make a terminal node
  // if no, go ahead and peek at the next token
  // if yes, instantiate a terminal node and add it to the children of current node, consume the tokens
  // repeat

  // this will need to happen recursively, as the terminal node may have sub-teminal nodes in it

  return ast;
};

module.exports = {
  generateAST,
};