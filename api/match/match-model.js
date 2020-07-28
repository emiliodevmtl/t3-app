const _ = require('lodash');
const cache = require('../../dao/cache-storage');
const { isObjectLike } = require('lodash');

const MODULE_KEY = 'data';


const match = (exact_text) => {
  let values = cache.get(MODULE_KEY)

  const found = values.find(obj => obj.author === exact_text);

  return found;
};

module.exports = {
  match,
}