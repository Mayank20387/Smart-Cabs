const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "mayank",
  database: "try"
});
pool.query(`insert into names values('adb',1)`, function (err, result, fields) {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});
