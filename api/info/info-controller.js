const infoModel = require('./info-model');

const get = () => {
  return infoModel.infoMessage();
}

module.exports = {
  get,
}