const express = require("express");
const router = express.Router();
var db = require("./db.js.js");
var conn = db.init();

// MySQL 연결
db.connect(conn);

router.get("/Test", function (req, res) {
  // 버튼 선택에 따른 sql문 구현
  let sql;

  if (req.query.type >= 1 && req.query.type <= 6) {
    // 한식, 아시안, 양식, 술집, 디저트, 브런치
    sql = `
    SELECT store.title
    FROM store
    JOIN \`id-store_id\` ON store.id = \`id-store_id\`.id
    WHERE \`id-store_id\`.store_type_id = ${req.query.type}
    `;
  } else {
    // 적절하지 않은 버튼 선택에 대한 예외처리
    res.status(400).send("잘못된 버튼 선택");
    return;
  }

  // 쿼리 실행
  conn.query(sql, (err, results) => {
    if (err) {
      console.error("쿼리 실행 에러 : " + err);
      res.status(500).send("쿼리 실행 오류");
    } else {
      // 결과 데이터를 /Korean 엔드포인트 (웹 서버에 접근하는 URL 주소)로 보냄
      res.locals.results = results;
      next();
    }
  });
});

module.exports = router;
