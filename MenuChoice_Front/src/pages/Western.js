import { useNavigate, Link } from "react-router-dom";
import "../component/Test.css";
import western from "../img/western.png";
//아현 추가
import React, { useState } from "react";

const Western = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  //버튼 정보 배열 생성
  const buttons = [
    { id: 9, name: "밥", min: 40, max: 41 },
    { id: 10, name: "빵", min: 42, max: 43 },
    { id: 11, name: "면", min: 45, max: 45 },
    { id: 12, name: "고기", min: 46, max: 48 },
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
        <img src={western} />
        <h2>양식</h2>
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

export default Western;
