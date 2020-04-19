const { AST } = require('./AST');
const { DefineNode } = require('./DefineNode');
const { FinalTypes } = require('../lexer/Types');

const generateAST = tokens => {
  const ast = new AST();

  const parsedTokens = tokens.filter(({ type }) => type.id !== FinalTypes.Space.id);
  console.log(parsedTokens);

  ast.root.pushChild(new DefineNode(1));
  ast.root.pushChild(new DefineNode(2));
  ast.root.pushChild(new DefineNode(3));
  return ast;
};

module.exports = {
  generateAST,
};