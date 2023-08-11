//아현 작성

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
var db = require("./db.js"); //mysql 연결 설정
var conn = db.init();
const cors = require("cors"); // CORS 미들웨어 추가
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//http://localhost:5000/api/randomValue/11
//get으로 데이터 전송(resultPage에)
app.get("/api/randomValue/:randomValue", (req, res) => {
  // resultPage에서 전달한 선택 버튼의 id값
  const randomValue = req.params.randomValue;

  console.log("Received randomValue: ", randomValue);

  // 'id-menu_type'테이블에서 id 조회
  const queryFoodType = "SELECT id FROM `id-food_id` WHERE food_type_id = ?";

  conn.query(queryFoodType, [randomValue], (err, resultsFoodType) => {
    if (err) {
      console.error("Error querying 'id-food_id' table: ", err);
      res
        .status(500)
        .json({ error: "Error fetching id from 'id-food_id' table" });
    } else {
      if (resultsFoodType.length > 0) {
        const selectedIds = resultsFoodType.map((row) => row.id);

        // 'store' 테이블에서 title과 default_runningtime 조회
        const queryStore =
          "SELECT id, title, default_runningtime FROM store WHERE id IN (?)";
        conn.query(queryStore, [selectedIds], (err, resultsStore) => {
          if (err) {
            console.error("Error querying 'store' table: ", err);
            res.status(500).json({
              error: "Error fetching store info from 'store' table",
            });
          } else {
            if (resultsStore.length > 0) {
              const storeInfoArray = resultsStore;
              console.log("Retrieved storeInfoArray:", storeInfoArray);
              res.json(storeInfoArray);
            } else {
              res.status(404).json({ error: "Store not found" });
            }
          }
        });
      } else {
        res.status(404).json({ error: "Food type not found" });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
