import React from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

const Index = () => {
  return (
    <div>
      <h2>맞춤 믹스: 분위기</h2>
      <div>
      <Carousel showArrows={true}>
                <div>
                    <img src="unnamed.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="unnamed.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="unnamed.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="unnamed.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="unnamed.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="unnamed.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
      </div>
      <p>기본 설정중..</p>
      <Link href="/test/homeTest">
        <button>homeTest로 이동</button>
      </Link>
    </div>
  );
};

export default Index;
