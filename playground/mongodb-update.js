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

    db.collection('documents').findOneAndUpdate({a:2},{$set:{a:3}},
      {
      returnOriginal:false}).then((res)=>{
    console.log(res);
  });
  //client.close();
});