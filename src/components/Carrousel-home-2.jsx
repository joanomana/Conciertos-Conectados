import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import { SlLocationPin } from "react-icons/sl";
import { TbCalendarClock } from "react-icons/tb";
import img1 from '../assets/img/home-1.png';
import img2 from '../assets/img/home-2.png';

const slides = [
    {
      image: img1,
      content: (
        <div className="flex w-[324px] h-[90px] py-2 px-3 gap-2 bg-gradient-to-t from-[#2D264B]/90 to-[#2D264B]/30 rounded-lg">
            <div className="flex flex-col gap-1">
                <h3 className="text-[13px] font-bold text-white">Coldplay : Music of the Spheres</h3>
                <div className="flex gap-1">
                  <SlLocationPin className="text-white w-[17px]" />
                  <p className="text-sm text-white text-[13px]">Gelora Bung Karno Stadium..</p>
                </div>
                <div className="flex gap-1 items-center">
                  <TbCalendarClock className="text-white w-[17px]"/>
                  <p className="text-white text-[12px]">November 15 2023</p>
                </div>
            </div>
            <div className="flex flex-col  justify-center text-start">
              <p className="text-white">Start from</p>
              <h1 className="font-[Inter-SemiBold] text-white">IDR1.100.000</h1>
            </div>
        </div>
      ),
      link: "/detail",
    },
    {
      image: img2,
      content: (
        <div className="flex w-[324px] h-[90px] py-2 px-3 gap-2 bg-gradient-to-t from-[#2D264B]/90 to-[#2D264B]/30 rounded-lg">
            <div className="flex flex-col gap-1">
                <h3 className="text-[13px] font-bold text-white">Coldplay : Music of the Spheres</h3>
                <div className="flex gap-1">
                  <SlLocationPin className="text-white w-[17px]" />
                  <p className="text-sm text-white text-[13px]">Gelora Bung Karno Stadium..</p>
                </div>
                <div className="flex gap-1 items-center">
                  <TbCalendarClock className="text-white w-[17px]"/>
                  <p className="text-white text-[12px]">November 15 2023</p>
                </div>
            </div>
            <div className="flex flex-col  justify-center text-start">
              <p className="text-white">Start from</p>
              <h1 className="font-[Inter-SemiBold] text-white">IDR1.100.000</h1>
            </div>
        </div>
      ),
      link: "/detail",
    },
  ];
  
  function CardCarousel() {
    return (
      <Swiper slidesPerView={1} spaceBetween={12} loop={false} className="max-w-xl">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-[340px] h-[150px] bg-cover bg-center rounded-lg overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={`absolute bottom-1 ml-2  rounded-lg ${slide.bgColor}`}>
                {slide.content}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  
  export default CardCarousel;
  