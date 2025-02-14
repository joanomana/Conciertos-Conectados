import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import "../index.css";

const slides = [
  {
    image: "/src/assets/img/home-3.png", // Ubicación en public
    content: (
      <div className="flex flex-col">
        <h3 className="font-bold text-black text-[12px]">Muse : Will of the People</h3>
        <p className="text-sm text-black">Jakarta, Indonesia</p>
        <p>July 23 2023</p>
      </div>
    ),
    link: "/detail",
  },
  {
    image: "/src/assets/img/home-4.png",
    content: (
      <div className="flex flex-col justify-center w-full h-full p-4">
        <h3 className="font-bold text-black">Another Event</h3>
        <p className="text-sm text-black">Some Venue</p>
      </div>
    ),
    link: "/another-detail",
  },
  {
    image: "/src/assets/img/home-4.png",
    content: (
      <div className="flex flex-col justify-center w-full h-full p-4">
        <h3 className="font-bold text-white">Concert Event</h3>
        <p className="text-sm text-gray-200">Concert Venue</p>
      </div>
    ),
    link: "/concert",
  },
  {
    image: "/assets/img/home-4.png",
    content: (
      <div className="flex flex-col justify-center w-full h-full p-4">
        <h3 className="font-bold text-white">Exhibition</h3>
        <p className="text-sm text-gray-200">Exhibition Venue</p>
      </div>
    ),
    link: "/exhibition",
  },
];

// Agrupamos los slides en pares
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
      direction="vertical"       // Desplazamiento vertical
      slidesPerView={1}          // Cada slide muestra un grupo (par)
      spaceBetween={20}          // Espacio entre cada grupo
      loop={false}                // Carrusel infinito
      className="max-h-[600px] w-[720px]"  // Ajusta el ancho para que quepan 2 tarjetas
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
                {/* Parte superior: imagen */}
                <div
                  className="h-[102px] w-[150px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                {/* Parte inferior: cuadro de texto */}
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

