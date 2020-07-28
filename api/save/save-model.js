const _ = require('lodash');
const cache = require('../../dao/cache-storage');

const MODULE_KEY = 'data';


const save = (arr) => {
  return cache.set(MODULE_KEY, arr);
};

module.exports = {
  save,
}