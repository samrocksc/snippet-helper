//includes
var query = require('pg-query');
//setup pg-query
var config = require('../../config');
query.connectionParameters = config.pg.server;

//deletes by id
exports.index = function(request,reply){
    query("DELETE FROM items WHERE id = '"+request.params.b+"'", function(err, rows, result){
      if(err){
        reply(err);
        console.log(err);
      }
      console.log('I just deleted the id '+request.params.b);
      reply('I just deleted the id '+request.params.b);
    });
  };
