import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import '../index.css'

const texts = [
  { text: "Music Concert", bg: "bg-[#EDE9FF]" },
  { text: "Exhibition", bg: "bg-[#FFF5D7]" },
  { text: "Stand Up Show", bg: "bg-[#FFECEC]" },
  { text: "Theater", bg: "bg-[#E4FFEA]" },
];

function TextCarousel() {
  return (
    <Swiper

    className="max-w-lg"
    wrapperClass="flex gap-2"
    loop={false}
    >
      {texts.map((item, index) => (
        <SwiperSlide key={index} className="!w-auto">
          <div className={`inline-flex whitespace-nowrap px-[12px] py-[6px] items-center justify-center text-gray-700 text-[13px] font-[Inter-Regular] ${item.bg} rounded-lg`}>
            {item.text}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TextCarousel;
