import { useNavigate, Link } from "react-router-dom";
import "../component/Korean.css";
import korean from "../img/korean.png";

//아현 추가
import React, { useState } from "react";

const Korean = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  //버튼 정보 배열 생성
  const buttons = [
    { id: 1, name: "밥", min: 1, max: 6 },
    { id: 2, name: "면", min: 7, max: 12 },
    { id: 3, name: "분식", min: 13, max: 14 },
    { id: 4, name: "고기", min: 15, max: 19 },
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

  // 아현 작성 코드
  return (
    <div className="test">
      <div className="title">
        <img src={korean} alt="Korean Food" />
        <h2>한식</h2>
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

export default Korean;

/* let kn = -1;
  //const navigate = useNavigate();
  return (
    <div className="test">
      <div className="title">
        <img src={korean} />
        <h2>한식</h2>
      </div>
      <div className="btn">
        <Link to="/resultpage">
          <button {...(kn = 0)}>밥</button>
        </Link>
        <Link to="/resultpage">
          <button {...(kn = 1)}>면</button>
        </Link>
        <Link to="/resultpage">
          <button {...(kn = 2)}>분식</button>
        </Link>
        <Link to="/resultpage">
          <button {...(kn = 3)}>고기</button>
        </Link>
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
  );*/
