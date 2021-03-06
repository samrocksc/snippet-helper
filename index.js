//Modules
var Hapi = require('hapi');
var Path = require('path');
var query = require('pg-query');

//Exports
var routes = require('./server/routes/router.js');

//query params
query.connectionParameters = 'postgres://samrocksc:@localhost:5432/snippet_helper';

//create the server
var server = new Hapi.Server();

//Define the server
server.connection({
  port: 3000,
  host: 'localhost',
  labels: ['web']
});

//Include all of our routes
for (var route in routes) {
  server.route(routes[route]);
}



server.start(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Hapi Server is started on port: ', server.info.port);
  }
});
