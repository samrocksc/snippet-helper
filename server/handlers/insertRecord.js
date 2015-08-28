//includes
var query = require('pg-query');
//setup pg-query
var config = require('../../config');
query.connectionParameters = config.pg.server;

exports.index = function(request, reply) {
  query("insert into items(description,content,complete,name,type) values('first insert','this is the content',false,'post insert','postgres')", function(err, rows, result) {
    console.log('i inputted some shit');
    reply('I inputted shit');
  });
};
