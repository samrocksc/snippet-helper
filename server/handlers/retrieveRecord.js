//includes
var query = require('pg-query');
//setup pg-query
query.connectionParameters = 'postgres://samrocksc:@localhost:5432/snippet_helper';


exports.index = function(request, reply){
  query("select * from items", function(err, rows, results){
    reply(results);
  });
};
