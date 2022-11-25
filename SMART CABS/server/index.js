// const { createPool } = require("mysql");
// const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "mayank",
//   database: "try"
// });
// pool.query(`insert into names values('adb',1)`, function (err, result, fields) {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ola2"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  db.query(`SELECT * FROM driver`, (err, result) => {
    res.send(result);
  });
});

app.get("/", (req, res) => {
  // db.query(`insert into driver(d_name,gender,d_phone,d_password,driving_liscense,d_email) Values("hlwlo","Male","1234567891","password","33rdcw23","email")`, function (err, result, fields) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     return console.log(result);
  res.send("Hello Expres");
  //});
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';