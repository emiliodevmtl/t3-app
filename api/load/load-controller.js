const loadModel = require('./load-model');


const load = () => {
  return loadModel.load();
}

module.exports = {
  load,
}