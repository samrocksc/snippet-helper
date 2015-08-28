var Hapi = require('hapi');
var pg = require('pg');
var Path = require('path');
var query = require('pg-query');

query.connectionParameters = 'postgres://samrocksc:@localhost:5432/todo';

var server = new Hapi.Server();

server.connection({
  port: 3000,
  host: 'localhost',
  labels: ['web']
});

//add a default index route
server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply('index page here');
  }
});

//run a record insert record
server.route({
  method: 'GET',
  path: '/api/v1/todos',
  handler: function(request, reply) {
    query("INSERT INTO items (text,complete) VALUES ('record insert','false')", function(err, rows, result) {
      console.log('i inputted some shit');
      reply('I inputted shit');
    });
  }
});

//dynamically insert a record
server.route({
  method: 'POST',
  path: '/api/v1/todo',
  handler: function(request, reply) {
    var f = request.payload.text;
    var g = request.payload.complete;
    query("INSERT INTO items (text,complete) VALUES ('" + request.payload.text + "','" + request.payload.complete + "')", function(err, rows, result) {
      if (err) {
        console.log(err);
      }
      console.log('i inputted ' + f + ' and ' + g + '.');
      reply('I inputted shit');
    });
  }

});


//update a record
server.route({
  method: 'PUT',
  path: '/api/v1/todo/{a}',
  handler: function(request, reply) {
        query("UPDATE items SET text = 'Hey Bro' WHERE id = "+request.params.a, function(err, rows, result){
          if(err){
            reply(err);
            console.log(err);
          }
        });
        console.log(request.params.a);
        reply(request.params.a);
  }
});

server.route({
  method: 'DELETE',
  path: '/api/v1/todo/{b}',
  handler: function(request,reply){
    query("DELETE FROM items WHERE id = '"+request.params.b+"'", function(err, rows, result){
      if(err){
        reply(err);
        console.log(err);
      }
      console.log('I just deleted the id '+request.params.b);
      reply('I just deleted the id '+request.params.b);
    });
  }
});

server.start(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Hapi Server is started on port: ', server.info.port);
  }
});
