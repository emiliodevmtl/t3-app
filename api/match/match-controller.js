const matchModel = require('./match-model');


const match = (exact_text) => {
  return matchModel.match(exact_text);
}

module.exports = {
  match,
}