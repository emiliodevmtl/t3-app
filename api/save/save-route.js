const saveController =  require('./save-controller')


const save = (req, res) => {
  let { data } = req.body;
  res.send(saveController.save(data));
}


module.exports = {
  save,
}