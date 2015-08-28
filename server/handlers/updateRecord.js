//includes
var query = require('pg-query');
//setup pg-query
var config = require('../../config');
query.connectionParameters = config.pg.server;

//i need to learn how to break down
exports.index = function(request, reply) {
  var modify = request.payload.a;
  var modifier = request.payload.b;
  var search = request.payload.c;
  var search_modifier = request.payload.d;
  query("UPDATE items SET "+modify+" = '"+modifier+" 'where '"+search+"' = '"+search_modifier+"'", function(err, rows, result) {
    if (err) {
      reply(err);
      console.log(err);
    }
  });
  console.log('modify = '+request.payload.a+' modifier = '+request.payload.b+' search = '+request.payload.c+' search_modifier = '+request.payload.d
  );
};
