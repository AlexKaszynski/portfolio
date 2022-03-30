//Backend heavily based on https://www.mongodb.com/languages/mern-stack-tutorial

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
const dbo = require("./db/conn");// get driver connection

app.listen(port, () => {
  dbo.connectToServer(function (err) { // perform a database connection when server starts
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});
