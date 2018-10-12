  const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://test:test123@ds125953.mlab.com:25953/bingosprogapp';

// Database Name
const dbName = 'bingosprogapp';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
 
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('brugere');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
  client.close();

});