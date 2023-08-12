//아현 작성

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
var db = require("./db.js"); //mysql 연결 설정
var conn = db.init();
const cors = require("cors"); // CORS 미들웨어 추가
const PORT = process.env.PORT || 5001;

//.env파일 불러오기 (안쓰면 안돌아감)
dotenv.config();
const AWS = require("aws-sdk");

app.use(cors());
app.use(bodyParser.json());

//http://localhost:5001/api/randomValue/11
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

// bucketName 보내기
app.get("/api/getBucketName", (req, res) => {
  res.json({ bucketName: process.env.AWS_BUCKET_NAME });
});

/*
//aws S3에서 이미지 가져오기
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const S3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
});

이미지 url 생성 함수
// https://menuchioce-img.s3.ap-northeast-2.amazonaws.com/menu_type/1.png
function generateImgUrl(bucket, folderName, fileName) {
  return `https://${bucket}.s3.ap-northeast-2.amazonaws.com/${folderName}/${fileName}.png`;
}

// 이미지 URL을 프론트로 보내는 API 엔드포인트
app.get("/api/getImgUrl/:bucket/:folder/:fileName", (req, res) => {
  const { bucket, folder, fileName } = req.params;
  const imgUrl = generateImgUrl(bucket, folder, fileName);
  res.json({ imgUrl });
});*/

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
