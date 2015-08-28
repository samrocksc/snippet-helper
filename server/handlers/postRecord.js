//includes
var query = require('pg-query');
//setup pg-query
query.connectionParameters = 'postgres://samrocksc:@localhost:5432/snippet_helper';

exports.index = function(request, reply) {
  var desc = request.payload.a;
  var comp = request.payload.b;
  var cont = request.payload.c;
  var name = request.payload.d;
  var type = request.payload.e;
  query("INSERT INTO items (description,content,complete,name,type) values ('"+desc+"','"+cont+"',"+comp+",'"+name+"','"+type+"')", function(err, rows, result) {
    if(err){
      console.log(err);
    }
    console.log('i inputted some shit');
    reply('I inputted shit');
  });
};
