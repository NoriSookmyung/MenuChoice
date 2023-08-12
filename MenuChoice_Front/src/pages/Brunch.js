import { useNavigate, Link } from "react-router-dom";
import "../component/Test.css";
import brunch from "../img/brunch.png";
//아현 추가
import React, { useState } from "react";

const Brunch = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  //버튼 정보 배열 생성
  const buttons = [
    { id: 17, name: "샐러드", min: 60, max: 60 },
    { id: 18, name: "요거트", min: 61, max: 61 },
    { id: 19, name: "샌드위치", min: 62, max: 62 },
    { id: 20, name: "기타", min: 63, max: 67 },
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
        <img src={brunch} />
        <h2>브런치</h2>
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

export default Brunch;
