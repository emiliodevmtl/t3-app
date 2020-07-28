const _ = require('lodash');
const cache = require('../../dao/cache-storage');

const MODULE_KEY = 'data';
const ORDER_BY_CRITERIA = ['author', 'name', 'published'];
const SORT_DIRECTIONS = ['asc', 'desc'];


const search = (text, order_by, sort_direction) => {
  let values = cache.get(MODULE_KEY)

  let result = _.filter(values, (obj) => {
    return (obj.author.indexOf(text) != -1 || obj.name.indexOf(text) != -1);
  });

  if (!_.isEmpty(order_by) && !_.isEmpty(sort_direction) &&
  ORDER_BY_CRITERIA.includes(order_by.toLowerCase()) &&
  SORT_DIRECTIONS.includes(sort_direction.toLowerCase())) {
    result = _.orderBy(resul, [order_by], [sort_direction]);
  }

  return result;
};

module.exports = {
  search,
}