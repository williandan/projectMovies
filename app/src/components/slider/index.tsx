import { Swiper } from "swiper/react";
import { Pagination } from "swiper";

import { ReactNode } from "react";
import useWindowSize from "@/hooks/useWindowSize";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

interface SliderProps {
  children: ReactNode;
}

export default function Slider({ children }: SliderProps) {
  const windowSize = useWindowSize();
  const sliderPerViewCount = windowSize.width / 294;
  const sliderPerView = Number(sliderPerViewCount.toFixed(0));

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={24}
      slidesPerView={sliderPerView}
      pagination={{
        clickable: true,
      }}
    >
      {children}
    </Swiper>
  );
}
