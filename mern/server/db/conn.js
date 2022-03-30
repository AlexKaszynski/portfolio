const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI; //Ask if the database needs to be local, or if I can/should deploy from Atlas cluster
//If you can, use this example and migrate front end elements to the solid backend backbone while being able to describe its elements.
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("DatabaseCluster");
        console.log("Successfully connected to MongoDB."); 
        //console.log(client);
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};

