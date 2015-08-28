//includes
var query = require('pg-query');
//setup pg-query
var config = require('../../config');
query.connectionParameters = config.pg.server;


exports.index = function(request, reply){
  query("select * from items", function(err, rows, results){
    reply(results);
  });
};
