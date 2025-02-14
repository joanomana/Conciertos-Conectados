import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import { useNavigate } from "react-router-dom";

const slides = [
    {
      image: "./src/assets/img/home-1.png",
      content: (
        <div className="flex w-[324px] h-[90px] p-2 ">
            <div className="flex flex-col">
                <h3 className=" font-bold text-white">Coldplay : Music of the Spheres</h3>
                <p className="text-sm text-gray-200">Gelora Bung Karno Stadium..</p>
            </div>
            <div className="flex flex-col">
                <p>

                </p>
                <h1>

                </h1>
            </div>
        </div>
      ),
      bgColor: "bg-black/50",
      link: "/detail",
    },
    {
        image: "./src/assets/img/home-2.png",
        content: (
          <div className="flex w-[324px] h-[90px] p-2 ">
              <div className="flex flex-col">
                  <h3 className=" font-bold text-white">Coldplay : Music of the Spheres</h3>
                  <p className="text-sm text-gray-200">Gelora Bung Karno Stadium..</p>
              </div>
              <div className="flex flex-col">
                  <p>
  
                  </p>
                  <h1>
  
                  </h1>
              </div>
          </div>
        ),
        bgColor: "bg-black/50",
        link:""
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
  