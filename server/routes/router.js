//includes
var query = require('pg-query');

//setup postgres
query.connectionParameters = 'postgres://samrocksc:@localhost:5432/snippet_helper';

var createIndex = require('../handlers/createIndex.js');
var insertRecord = require('../handlers/insertRecord.js');
var postRecord = require('../handlers/postRecord.js');

module.exports = [
  {
    //creating my index page
    method: 'GET',
    path: '/',
    handler: createIndex.index
  },
  {
    //just a vanilla get that inserts a record to test database
    method: 'GET',
    path: '/api2',
    handler: insertRecord.index
  },
  {
    //creating post data to insert a record endpoint
    method: 'POST',
    path: '/api',
    handler: postRecord.index
  }
];
