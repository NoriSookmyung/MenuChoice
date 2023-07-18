import noonsong from "../img/noonsong.png";
import { useNavigate } from "react-router-dom";
import "../component/Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h2>오늘은 뭘 먹지?</h2>
      <img src={noonsong} />
      <button
        id="testBtn"
        onClick={() => {
          navigate("/test");
        }}
      >
        테스트하기
      </button>
      <button id="listBtn">가게 리스트</button>
    </div>
  );
};

export default Home;
