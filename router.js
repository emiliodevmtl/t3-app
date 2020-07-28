const express = require('express');
const infoRoute = require('./api/info/info-routes');
const saveRoute = require('./api/save/save-route');
const loadRoute = require('./api/load/load-route');
const matchRoute = require('./api/match/match-route');
const searchRoute = require('./api/search/search-route');

const router =  express.Router();

module.exports = async (app) => {
  router.get('/', infoRoute.get);
  router.get('/info', infoRoute.get);

  router.post('/save', saveRoute.save);
  router.get('/load', loadRoute.load);
  router.get('/match', matchRoute.match);
  router.get('/search', searchRoute.search);

  app.use('/api', router );
}