const nodeCache = require('node-cache');
const _ = require('lodash');

function cacheObject () {
  this.storage = new nodeCache();

  this.set = (key, val) => {
    if (!_.isEmpty(key) || !_.isEmpty(val)){
      const success = this.storage.set(key, val);
      return success;
    } else {
      return false;
    }
  };

  this.get = (key) => {
    return (!_.isEmpty(key)) ? this.storage.get(key): null;
  };

  this.delete = (key) => {
    return (!_.isEmpty(key)) ? this.storage.del(key): -1;
  }

  this.list = () => {
    return this.storage.keys();
  }

  this.has = (key) => {
    return (!_.isEmpty(key)) ? this.storage.has(key): false;
  }
}

const cache = new cacheObject();

module.exports = cache;