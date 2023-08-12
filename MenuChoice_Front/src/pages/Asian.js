import { useNavigate, Link } from "react-router-dom";
import "../component/Korean.css";
import asian from "../img/asian.png";
//아현 추가
import React, { useState } from "react";

const Asian = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  //버튼 정보 배열 생성
  const buttons = [
    { id: 5, name: "중식 ", min: 21, max: 27 },
    { id: 6, name: "일식", min: 28, max: 33 },
    { id: 7, name: "동남아", min: 34, max: 37 },
    { id: 8, name: "인도", min: 38, max: 39 },
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
    <div className="test">
      <div className="title">
        <img src={asian} />
        <h2>아시안</h2>
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

export default Asian;
