import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineSell } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { TbCalendarClock } from "react-icons/tb";
import "../index.css";

const slides = [
  {
    image: "/src/assets/img/home-3.png",
    content: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-black text-[10px] font-[Inter-SemiBold]">Muse : Will of the People</h3>
        <div className="flex gap-1">
          <SlLocationPin className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular]">Jakarta, Indonesia</p>
        </div>
        <div className="flex gap-1">
          <TbCalendarClock className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular] ">July 23 2023</p>
        </div>
        <div className="flex text-[#EC441E] items-center gap-1">
          <MdOutlineSell className="w-[20px] h-[20px] -scale-x-100"/>
          <h1 className="font-[Inter-SemiBold]">IDR500.000</h1>
        </div>
      </div>
    ),
    link: "/detail",
  },
  {
    image: "/src/assets/img/home-4.png",
    content: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-black text-[10px] font-[Inter-SemiBold]">One Direction : Where We Are</h3>
        <div className="flex gap-1">
          <SlLocationPin className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular]">Jakarta, Indonesia</p>
        </div>
        <div className="flex gap-1">
          <TbCalendarClock className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular] ">Oct 29 2023</p>
        </div>
        <div className="flex text-[#EC441E] items-center gap-1">
          <MdOutlineSell className="w-[20px] h-[20px] -scale-x-100"/>
          <h1 className="font-[Inter-SemiBold]">IDR800.000</h1>
        </div>
      </div>
    ),
    link: "/detail",
  },
  {
    image: "/src/assets/img/home-3.png",
    content: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-black text-[10px] font-[Inter-SemiBold]">Muse : Will of the People</h3>
        <div className="flex gap-1">
          <SlLocationPin className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular]">Jakarta, Indonesia</p>
        </div>
        <div className="flex gap-1">
          <TbCalendarClock className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular] ">July 23 2023</p>
        </div>
        <div className="flex text-[#EC441E] items-center gap-1">
          <MdOutlineSell className="w-[20px] h-[20px] -scale-x-100"/>
          <h1 className="font-[Inter-SemiBold]">IDR500.000</h1>
        </div>
      </div>
    ),
    link: "/detail",
  },
  {
    image: "/src/assets/img/home-4.png",
    content: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-black text-[10px] font-[Inter-SemiBold]">One Direction : Where We Are</h3>
        <div className="flex gap-1">
          <SlLocationPin className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular]">Jakarta, Indonesia</p>
        </div>
        <div className="flex gap-1">
          <TbCalendarClock className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular] ">Oct 29 2023</p>
        </div>
        <div className="flex text-[#EC441E] items-center gap-1">
          <MdOutlineSell className="w-[20px] h-[20px] -scale-x-100"/>
          <h1 className="font-[Inter-SemiBold]">IDR800.000</h1>
        </div>
      </div>
    ),
    link: "/detail",
  },
  {
    image: "/src/assets/img/home-3.png",
    content: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-black text-[10px] font-[Inter-SemiBold]">Muse : Will of the People</h3>
        <div className="flex gap-1">
          <SlLocationPin className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular]">Jakarta, Indonesia</p>
        </div>
        <div className="flex gap-1">
          <TbCalendarClock className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular] ">July 23 2023</p>
        </div>
        <div className="flex text-[#EC441E] items-center gap-1">
          <MdOutlineSell className="w-[20px] h-[20px] -scale-x-100"/>
          <h1 className="font-[Inter-SemiBold]">IDR500.000</h1>
        </div>
      </div>
    ),
    link: "/detail",
  },
  {
    image: "/src/assets/img/home-4.png",
    content: (
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-black text-[10px] font-[Inter-SemiBold]">One Direction : Where We Are</h3>
        <div className="flex gap-1">
          <SlLocationPin className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular]">Jakarta, Indonesia</p>
        </div>
        <div className="flex gap-1">
          <TbCalendarClock className="text-gray-500 w-[17px]" />
          <p className="text-sm text-black text-[11px] font-[Inter-Regular] ">Oct 29 2023</p>
        </div>
        <div className="flex text-[#EC441E] items-center gap-1">
          <MdOutlineSell className="w-[20px] h-[20px] -scale-x-100"/>
          <h1 className="font-[Inter-SemiBold]">IDR800.000</h1>
        </div>
      </div>
    ),
    link: "/detail",
  },
  
];
const groupSlidesInPairs = (slidesArray) => {
  const grouped = [];
  for (let i = 0; i < slidesArray.length; i += 2) {
    grouped.push(slidesArray.slice(i, i + 2));
  }
  return grouped;
};

function CardCarousel() {
  {/*const navigate = useNavigate();*/}
  const groupedSlides = groupSlidesInPairs(slides);

  return (
    <Swiper
      direction="vertical"       
      slidesPerView={1}          
      spaceBetween={3}         
      loop={false}               
      className="max-h-[200px] w-[720px]" 
    >
      {groupedSlides.map((group, index) => (
        <SwiperSlide key={index}>
          <div className="w-[348px] h-[205px] flex justify-center gap-2">
            {group.map((slide, idx) => (
              <div
                key={idx}
                onClick={() => slide.link && navigate(slide.link)}
                className="w-[166px] h-[203px] p-2  rounded-lg overflow-hidden cursor-pointer shadow-lg"
              >
                <div
                  className="h-[102px] w-[150px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>

                <div className="pt-1">
                  {slide.content}
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardCarousel;

