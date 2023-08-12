import React, { useState } from "react";
import { Card, CardImg, CardText } from 'reactstrap';
import { IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../component/RestPageList.css";

import styles from "../component/Result.module.css"; 

const restaurantData = [
  {
    type: "브런치",
    name: "샐러디 숙명여대점",
    imgSrc: process.env.PUBLIC_URL + '../img/salady_sample.png',
    hours: "08:00~21:00"
  }
  //식당 정보 추후, 계속 추가해서 작성하면 됨.
];

const ResultSlider = ({ selectedType }) => {
  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const filteredRestaurants = restaurantData.filter(
    (restaurant) => restaurant.type === selectedType
  );

  return (
    <Slider {...settings}>
      {filteredRestaurants.map((restaurant, index) => (
        <div key={index} style={{ lineHeight: "200%" }}>
          <Card>
            <CardImg src={restaurant.imgSrc} />
            <CardText>
              {restaurant.name}<br />
              영업시간<br />
              {restaurant.hours}<br />
            </CardText>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

const RestPageList = () => {
  const [selectedType, setSelectedType] = useState(""); 

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value); 
  };

  const btnStyle3 = {
    color: "white",
    background: "#0C2D83",
    padding: "5px 60px",
    border: "1px solid #0C2D83",
    borderRadius: "30px",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: 1.5,
    marginTop: 10,
  };

  return (
    <div className="RestPageList"> {}
      <div style={{ textAlign: 'center' }}>
        <div className="back" style={{ textAlign: 'left' }}><IoIosArrowBack size="30" color="white" /></div>
        <button className={styles.btn_shadow} style={btnStyle3}>가게 리스트</button>
        <hr />

        {/* Select box for filtering */}
        <select value={selectedType} onChange={handleSelectChange}>
          <option value="">전체</option>
          <option value="한식">한식</option>
          <option value="아시안">아시안</option>
          <option value="양식">양식</option>
          <option value="술집">술집</option>
          <option value="디저트">디저트</option>
          <option value="브런치">브런치</option>
        </select>

        <div style={{ backgroundColor: "#9bb9da" }}>
          <ResultSlider selectedType={selectedType} />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default RestPageList;
