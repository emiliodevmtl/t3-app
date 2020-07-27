const express = require('express');
const infoRoute = require('./api/info/info-routes');

const router =  express.Router();

module.exports = async (app) => {
  //info paths
  router.get('/', infoRoute.get);
  router.get('/info', infoRoute.get);

  app.use('/api', router );
}