import noonsong from "../img/noonsong.png";
import { useNavigate } from "react-router-dom";
import "../component/Test.css";

const Test = () => {
  let n = -1;
  const navigate = useNavigate();
  return (
    <div className="test">
      <h2>여러분의 취향에 맞춰 테스트를 진행해 주세요</h2>
      <div className="btn">
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            n = 0;
            navigate("/korean");
          }}
        >
          한식
        </button>
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            n = 1;
            navigate("/asian");
          }}
        >
          아시안
        </button>
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            n = 2;
            navigate("/western");
          }}
        >
          양식
        </button>
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            n = 3;
            navigate("/alcohol");
          }}
        >
          술집
        </button>
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            n = 4;
            navigate("/dessert");
          }}
        >
          디저트
        </button>
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            n = 5;
            navigate("/brunch");
          }}
        >
          브런치
        </button>
      </div>
      <img src={noonsong} width={450} />
    </div>
  );
};

export default Test;
