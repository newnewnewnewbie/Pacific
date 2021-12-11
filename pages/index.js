import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import { render } from "react-dom";

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2>맞춤 믹스: 분위기</h2>
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3> 
            </div>
        </Slider>

      </div>
      <p>기본 설정중..</p>
      <Link href="/test/homeTest">
        <button>homeTest로 이동</button>
      </Link>
    </div>
  );
};

export default Index;
