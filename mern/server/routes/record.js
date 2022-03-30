const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;


recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("DatabaseCluster");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("records")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

recordRoutes.route("/record/add").post(function (req, response) {
  //console.log(req.params.body);
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    description: req.body.description,
    level: req.body.level,
    time: req.body.time,
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document added");
    response.json(res);
  });
});

recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  
  let newvalues = {
    $set: {
      name: req.body.name,
      description: req.body.description,
      level: req.body.level,
      time: req.body.time,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;