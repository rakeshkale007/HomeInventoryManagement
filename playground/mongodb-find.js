const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

    db.collection('documents').find().count().then((count)=>{
      console.log('Todos'+count);
    },(err)=>{
      console.log('unable to fetch todos',err);
    });
  //client.close();
});