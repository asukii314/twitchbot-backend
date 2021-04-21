const express = require("express");
const mysql = require("mysql");
const fetch = require('node-fetch');
const cors = require('cors');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})

//
// ---------------- routes ----------------
//

app.get("/test", (req, res) => {
  console.log("yo")
  res.send({hello: "world"});
});
