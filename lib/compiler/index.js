const { generateRootBody, generateDataSection } = require('../shared/compilerUtils');

const generateAsm = ast => {
  let resultCode = '';
  resultCode += generateDataSection(ast.root.getChildren());
  resultCode += generateRootBody();
  return resultCode;
};

module.exports = {
  generateAsm,
};