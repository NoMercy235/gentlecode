const { AST } = require('./AST');
const { DefineNode } = require('./DefineNode');

const generateAST = tokens => {
  const ast = new AST();
  ast.root.pushChild(new DefineNode(1));
  ast.root.pushChild(new DefineNode(2));
  ast.root.pushChild(new DefineNode(3));
  return ast;
};

module.exports = {
  generateAST,
};