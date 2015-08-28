var createIndex = require('../handlers/createIndex.js');
var insertRecord = require('../handlers/insertRecord.js');
var postRecord = require('../handlers/postRecord.js');
var updateRecord = require('../handlers/updateRecord');
var retrieveRecord = require('../handlers/retrieveRecord');
var deleteRecord = require('../handlers/deleteRecord');

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
    path: '/api',
    handler: retrieveRecord.index
  },
  {
    //creating post data to insert a record endpoint
    method: 'POST',
    path: '/api/',
    handler: postRecord.index
  },
  {
    method: 'PUT',
    path: '/api/',
    handler: updateRecord.index
  },
  {
    method: 'DELETE',
    path: '/api/{b}',
    handler: deleteRecord.index
  }
];
