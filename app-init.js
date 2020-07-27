const express = require('express');
const app = express();
const router = require('./router')
const bodyParser = require('body-parser');


const PORT = 8000;
const HOST = '0.0.0.0';

const init = async () => {
  console.log('Initializing app...');
  app.use(bodyParser.json());
  await router(app);
  return app;
}

module.exports = init();
