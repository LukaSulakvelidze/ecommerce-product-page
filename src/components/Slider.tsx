import { CSSProperties, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
          <img src="public/Nike-land.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/Nike-prof-right.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/Nike-prof-left.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/Nike-top.jpg" />
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
          <img src="public/Nike-land.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/Nike-prof-right.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/Nike-prof-left.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/Nike-top.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
