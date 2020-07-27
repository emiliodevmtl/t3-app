const infoController =  require('./info-controller')

const get = (req, res) => {
  return res.send(infoController.get());
}


module.exports = {
  get,
}