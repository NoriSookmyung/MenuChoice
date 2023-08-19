import "../component/RestPageList.css";
import styles from "../component/Result.module.css";

import { Card, CardText } from "reactstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//아현 추가
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ResultPageList = () => {
  const { randomValue } = useParams();
  const [storeInfo, setStoreInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bucketName, setBucketName] = useState("");

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

    // 서버로부터 bucketName 가져오기
    const fetchBucketName = async () => {
      try {
        const response = await axios.get("/api/getBucketName");
        setBucketName(response.data.bucketName);
      } catch (error) {
        console.error("Error fetching bucket name: ", error);
      }
    };
    fetchBucketName();
    fetchData();
  }, [randomValue]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const ResultSlider = ({ storeInfo }) => {
    let settings;
    if (storeInfo.length < 3) {
      settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    } else {
      settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
    }

    return (
      <Slider {...settings}>
        {storeInfo.map((store) => (
          <div key={store.id} style={{ lineHeight: "200%" }}>
            <Card>
              <center>
                <img
                  src={`https://menuchioce-img.s3.ap-northeast-2.amazonaws.com/menu_type/${store.id}.png`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
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

  return (
    <div className="Result">
      <br />
      <h1 className={styles.title}>당신의 선택 결과</h1>

      <div>
        <img
          src={`https://menuchioce-img.s3.ap-northeast-2.amazonaws.com/food_type/${randomValue}.png`}
          style={{ maxWidth: "100%", height: "auto" }}
          alt="food_type_img"
        />
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
