import { useNavigate, Link } from "react-router-dom";
import "../component/Alcohol.css";
import dessert from "../img/dessert.png";
//아현 추가
import React, { useState } from "react";

const Dessert = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  //버튼 정보 배열 생성
  const buttons = [
    { id: 15, name: "테이크아웃 전문", min: 55, max: 58 },
    { id: 16, name: "좌석", min: 68, max: 72 },
  ];

  // 랜덤 함수를 사용해 버튼 범위에 따라 랜덤 값 생성
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // 랜덤하게 선택한 버튼객체
  const handleButtonClick = async (button) => {
    setSelectedButton(button);
    const randomValue = getRandomNumber(button.min, button.max);

    console.log("Random value made:", randomValue);
    const resultPageUrl = `/resultpagelist/${randomValue}`;
    navigate(resultPageUrl);
  };

  return (
    <div className="alcohol">
      <div className="title">
        <img src={dessert} />
        <h2>디저트</h2>
      </div>
      <div className="btn">
        {buttons.map((button) => (
          <button onClick={() => handleButtonClick(button)} key={button.id}>
            {button.name}
          </button>
        ))}
      </div>
      <button
        id="back"
        onClick={() => {
          navigate("/test");
        }}
      >
        돌아가기
      </button>
    </div>
  );
};

export default Dessert;
