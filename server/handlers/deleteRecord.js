//includes
var query = require('pg-query');
//setup pg-query
query.connectionParameters = 'postgres://samrocksc:@localhost:5432/snippet_helper';

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
