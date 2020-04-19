const {
  generateRootBody,
  generateDataSection,
  generatePrintWithData,
  generateFunctionEnd,
} = require('../shared/compilerUtils');

const generateAsm = ast => {
  let resultCode = '';
  resultCode += generateDataSection([ast.root.getChildren()[2]]);
  resultCode += generateRootBody();
  resultCode += generatePrintWithData('myString');
  resultCode += generateFunctionEnd();
  return resultCode;
};

module.exports = {
  generateAsm,
};