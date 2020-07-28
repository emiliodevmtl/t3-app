const matchController =  require('./match-controller')


const match = (req, res) => {
  let { exact_text } = req.query;

  res.send(matchController.match(exact_text));
}

module.exports = {
  match,
}