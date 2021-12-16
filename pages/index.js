import React from "react";
import Link from "next/link";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
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
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
      <h1>맞춤 믹스: 분위기</h1>
      <div>
        <Slider {...settings}>
          <div>
            <img src="images/unnamed.jpg" />
            <p>설명1</p>
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
      <div>
        <h1>내 보관함에 있는 음악</h1>
        <div>
          <Slider {...settings}>
            <div>
              <img src="images/unnamed.jpg" />
              <p>설명1</p>
            </div>
            <div>
              <img src="images/unnamed.jpg" />
              <p>설명2</p>
            </div>
            <div>
              <img src="images/unnamed.jpg" />
              <p>설명3</p>
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <h1>즐겨 듣는 음악</h1>
      </div>
      <Link href="/test/homeTest">
        <button>homeTest로 이동</button>
      </Link>
    </div>
  );
};

export default Index;
