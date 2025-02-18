import TicketImage from './Ticket-img';
import TicketDetails from './Ticket-detail';
import TicketBarcode from './Ticket-barcode';
import line from '../assets/img/ticket-4.png';

const TicketTemplate = ({ imgSrc, eventName, date, location, time, gate, seat, orderNumber, personName }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg pt-2  w-[343.5px]">
        <div className='px-5'>
        <TicketImage imgSrc={imgSrc}/>
      <TicketDetails
        eventName={eventName}
        date={date}
        location={location}
        time={time}
        gate={gate}
        seat={seat}
        orderNumber={orderNumber}
        personName={personName}
      />
        </div>
      <img src={line} alt="a" />
      <div>
        <TicketBarcode orderNumber={orderNumber} /> 
      </div>
    </div>
  );
};

export default TicketTemplate;