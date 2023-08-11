var mysql = require("mysql");

//.env파일 불러오기 (안쓰면 안돌아감)
require("dotenv").config();

var db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSWORD,
  database: process.env.DB_DATABASE,
};

module.exports = {
  init: function () {
    return mysql.createConnection(db);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("mysql 연결 에러 : " + err);
    });
  },
};
