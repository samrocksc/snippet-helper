var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  port: 3000,
  host: 'localhost',
  labels: ['web']
});

server.start(function(err) {
  if(err){
    throw err;
  } else {
    console.log('Hapi Server is started on port: ', server.info.port);
  }
});
