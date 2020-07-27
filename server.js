const express = require('express');
const init = require('./app-init');

const PORT = 8000;
const HOST = '0.0.0.0';


init.then((app) => {
  app.listen(PORT, HOST, () => {
    console.log(`Running on ${HOST}:${PORT}`);
  });
});