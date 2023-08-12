import React, { useEffect, useState } from "react";
import axios from "axios";

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //백엔드 API 엔드포인트로 HTTP GET 요청 보내기
    axios
      .get("http://localhost:5000")
      .then((response) => {
        setData(response.data); // 받은 JSON 데이터를 상태 변수에 저장하기
      })
      .catch((error) => {
        console.error("데이터를 가져오는 데 에러 발생:", error);
      });
  }, []);

  // 받은 데이터를 컴포넌트에서 보여주기
  return (
    <div>
      <h1>가게 리스트</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title}, {item.deault_runningtime}, {item.other_runningtime},{" "}
            {item.breaktime}, {item.day_off}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
