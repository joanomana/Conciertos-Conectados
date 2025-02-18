import { Swiper, SwiperSlide } from 'swiper/react';
import event1 from '../assets/img/ticket-2.png';
import event2 from '../assets/img/home-2.png';
import TicketTemplate from './TicketTemplate';

const ticketData = [
  {
    imgSrc: event1,
    eventName: "Coldplay: Music of the Spheres",
    date: "Nov 15 2023",
    location: "Gelora Bung Karno Stadium, Jakarta",
    time: "9:00 PM",
    gate: "Yellow",
    seat: "West B",
    orderNumber: "CLD09738PL",
    personName: "Indriyani Puspita",
  },
  {
    imgSrc: event2,
    eventName: "Imagine Dragons: Mercury Tour",
    date: "Dec 5 2023",
    location: "Jakarta, Indonesia",
    time: "8:30 PM",
    gate: "Red",
    seat: "East A",
    orderNumber: "IMG09842DR",
    personName: "John Doe",
  }
];

export default function VerticalCarousel() {
  return (
    <div className="mt-25">
      <Swiper direction="horizontal" spaceBetween={5} slidesPerView={1.1} centeredSlides={true} className="max-w-xl">
        {ticketData.map((ticket, index) => (
          <SwiperSlide key={index}>
            <TicketTemplate {...ticket} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
