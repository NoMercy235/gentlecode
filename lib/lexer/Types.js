const FinalTypes = {
  Identifier: { id: 100, label: 'identifier' },
  NaturalNumber: { id: 101, label: 'naturalNumber' },
  Space: { id: 102, label: 'space' },
  Separator: { id: 103, label: 'separator' },
  String: { id: 104, label: 'string' },
};

const IntermediaryTypes = {
  StringBeginning: { id: 1000, label: 'stringBeginning' },
};

module.exports = {
  StartType: { id: 0, label: 'start' },
  EndType: { id: 1, label: 'end' },
  ErrorType: { id: -1, label: 'error' },
  FinalTypes,
  IntermediaryTypes,
};