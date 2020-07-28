const searchController =  require('./search-controller')


const search = (req, res) => {
  let { text, order_by, sort_direction } = req.query;

  res.send(searchController.search(text, order_by, sort_direction));
}

module.exports = {
  search,
}