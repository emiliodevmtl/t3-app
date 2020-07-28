const loadController =  require('./load-controller')


const load = (req, res) => {
  res.send(loadController.load());
}


module.exports = {
  load,
}