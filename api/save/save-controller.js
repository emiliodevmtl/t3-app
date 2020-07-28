const saveModel = require('./save-model');

const save = (arr) => {
  return memoryModel.set(arr);
}

module.exports = {
  save,
}