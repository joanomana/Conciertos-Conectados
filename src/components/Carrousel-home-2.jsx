import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

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
    },
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
    },
  ];
  
  function CardCarousel() {
    return (
      <Swiper slidesPerView={1} spaceBetween={12} loop={true} className="max-w-xl">
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div
              className="relative w-[340px] h-[190px] bg-cover bg-center rounded-lg overflow-hidden"
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
  