//import React from "react";

import "../component/RestPageList.css";
import styles from "../component/Result.module.css";

import { Card, CardText } from "reactstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import resultsmp from "../img/result_sample.png";
import saladysmp from "../img/salady_sample.png";
import monstersmp from "../img/monster_sample.png";

//아현 추가
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ResultSlider = ({ storeInfo }) => {
  let settings;
  if (storeInfo.length < 3) {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  } else {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
  }

  //<img src={store.image}
  return (
    <Slider {...settings}>
      {storeInfo.map((store) => (
        <div key={store.id} style={{ lineHeight: "200%" }}>
          <Card>
            <center>
              <img src={saladysmp} alt={store.title} />
            </center>
            <CardText>
              {store.title}
              <br />
              영업시간
              <br />
              {store.default_runningtime}
              <br />
            </CardText>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

const ResultPageList = () => {
  const { randomValue } = useParams();
  const [storeInfo, setStoreInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/randomValue/${randomValue}`);
        console.log("Random value send:", randomValue);
        setStoreInfo(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [randomValue]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

      <hr />
      <div>
        <ResultSlider storeInfo={storeInfo} />
      </div>
      <hr />

      <h5 className={styles.scroll}>좌우로 스크롤 하여 확인해보세요 :)</h5>
    </div>
  );
};

export default ResultPageList;
