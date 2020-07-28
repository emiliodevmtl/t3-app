const searchModel = require('./search-model');


const search = (text, order_by, sort_direction) => {
  return searchModel.search(text, order_by, sort_direction);
}

module.exports = {
  search,
}