import { CSSProperties, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import nikeLand from "../assets/Nike-land.jpg";
import nike_prof_right from "../assets/Nike-prof-right.jpg";
import nike_prof_left from "../assets/Nike-prof-left.jpg";
import nikeTop from "../assets/Nike-top.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiperStyles.css";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
interface CustomStyle extends CSSProperties {
  "--swiper-navigation-color"?: string;
}

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col w-full xl:w-[40%]">
      <Swiper
        style={{ "--swiper-navigation-color": "#ff7e1b" } as CustomStyle}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        autoplay={true}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={nikeLand} alt="Product Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nike_prof_right} alt="Product Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nike_prof_left} alt="Product Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nikeTop} alt="Product Image" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={nikeLand} alt="Product Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nike_prof_right} alt="Product Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nike_prof_left} alt="Product Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nikeTop} alt="Product Image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
