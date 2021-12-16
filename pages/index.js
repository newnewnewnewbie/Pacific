import React from "react";
import Link from "next/link";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Index = () => {
  const settings = {
    arrows: true,
    dots: false,
    speed: 1000,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 6,
    slidesToScroll: 3
  };
  return (
    <div>
      <h2>맞춤 믹스: 분위기</h2>
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <h3>7</h3>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <img src="images/unnamed.jpg" />
          </div>
          <div>
            <img src="images/unnamed.jpg" />
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
