const _ = require('lodash');
const cache = require('../../dao/cache-storage');

const MODULE_KEY = 'data';


const load = () => {
  return cache.get(MODULE_KEY);
};

module.exports = {
  load,
}