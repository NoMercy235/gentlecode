const {
  generateExternSection,
  generateRootBody,
  generateDataSection,
  generatePrintWithData,
  generateFunctionEnd,
} = require('../shared/compilerUtils');
const { ProgramNode } = require('../parser/ProgramNode');
const { DefineConstNode } = require('../parser/DefineConstNode');
const { PrintCallNode } = require('../parser/PrintCallNode');

const traverseTree = (root) => {
  let queue = [root];
  const reducer = {
    data: [],
    functions: {
      main: [],
    },
  };
  while (queue.length) {
    const currentNode = queue.shift();
    if (currentNode instanceof ProgramNode) {
      // generate main function
      reducer.functions = {
        main: [],
      };
    } else if (currentNode instanceof DefineConstNode) {
      // update the section .data part
      reducer.data.push({
        name: currentNode.name,
        type: currentNode.evalType(), //getType
        expression: currentNode.expression.eval(),

      });
    } else if (currentNode instanceof PrintCallNode) {
      reducer.functions.main.push({
        type: currentNode.type,
        expression: currentNode.expression.eval(),
      })
    }
    queue.push(...currentNode.getChildren());
  }
  return reducer;
};

const generateAsm = ast => {
  let resultCode = '';
  const reducer = traverseTree(ast.root);
  resultCode += generateExternSection(reducer.data);
  resultCode += generateDataSection(reducer.data);
  resultCode += generateRootBody();
  reducer.functions.main.forEach(instruction => {
    resultCode += generatePrintWithData(instruction.expression);
  });
  resultCode += generateFunctionEnd();
  console.log(JSON.stringify(reducer, null, 2));
  return resultCode;
};

module.exports = {
  generateAsm,
};