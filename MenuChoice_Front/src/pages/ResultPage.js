//import React from "react";
import { Link, useParams } from "react-router-dom";

import "../component/Result.css";
import styles from "../component/Result.module.css";
import "../component/Home.css";

import resultsmp from "../img/result_sample.png";

// front - back connect
import React, { useEffect, useState } from "react";
import axios from "axios";

const ResultPage = () => {
  //randomValue값 그대로 전달하기
  // URL 매개변수 추출하기
  const { randomValue } = useParams();

  return (
    <div className="Result">
      <br />
      <h1 className={styles.title}>당신의 선택 결과</h1>
      <div>
        <img src={resultsmp} />
      </div>
      <Link to="/test">
        <button id="testBtn">다시 선택하기</button>
      </Link>

      <br />
      <Link to={`/resultpagelist/${randomValue}`}>
        <button id="listBtn">가게 보러가기</button>
      </Link>
    </div>
  );
};

export default ResultPage;

/*useEffect(() => {
    //백엔드 API 엔드포인트로 HTTP GET 요청 보내기
    axios
      .get("http://localhost:5000/resultpagelist")
      .then((response) => {
        setData(response.data); // 받은 JSON 데이터를 상태 변수에 저장하기
      })
      .catch((error) => {
        console.error("데이터를 가져오는 데 에러 발생:", error);
      });
  }, []);

  <h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.title}, {item.deault_runningtime}, {item.other_runningtime},{" "}
              {item.breaktime}, {item.day_off}
            </li>
          ))}
        </ul>
      </h1>
      */
