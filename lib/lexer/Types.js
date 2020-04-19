const FinalTypes = {
  Identifier: { id: 1, label: 'identifier' },
  NaturalNumber: { id: 2, label: 'naturalNumber' },
  Space: { id: 3, label: 'space' },
  Separator: { id: 4, label: 'separator' },
};

module.exports = {
  StartType: { id: 0, label: 'start' },
  ErrorType: { id: -1, label: 'error' },
  FinalTypes,
};