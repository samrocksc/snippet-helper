var Hapi = require('hapi');
var pg = require('pg');
var Path = require('path');
var query = require('pg-query');
var routes = require('./server/routes/router.js');

query.connectionParameters = 'postgres://samrocksc:@localhost:5432/todo';

var server = new Hapi.Server();

server.connection({
  port: 3000,
  host: 'localhost',
  labels: ['web']
});



server.start(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Hapi Server is started on port: ', server.info.port);
  }
});
