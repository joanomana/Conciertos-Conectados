const TicketDetails = ({ eventName, date, location, time, gate, seat, orderNumber, personName }) => {
  return (
    <div>
      <h1 className="text-lg font-bold text-[18px]">{eventName}</h1>
      <p className="text-gray-500 text-[12px] font-[Inter-Medium]">{date} ~ {location}</p>
      <div className="my-1 h-[2px] bg-gray-200 mr-5"></div>
      <div className="grid grid-cols-2 gap-y-3 gap-x-10 mt-2 text-sm text-start text-gray-600">
        <span className="flex flex-col font-[Inter-Medium]">Name<strong className="text-black font-[Inter-SemiBold]">{personName}</strong></span>
        <span className="flex flex-col font-[Inter-Medium]">Order Number<strong className="text-black font-[Inter-SemiBold]">{orderNumber}</strong></span>
        <span className="flex flex-col font-[Inter-Medium]">Date<strong className="text-black font-[Inter-SemiBold]">{date}</strong></span>
        <span className="flex flex-col font-[Inter-Medium]">Time<strong className="text-black font-[Inter-SemiBold]">{time}</strong></span>
        <span className="flex flex-col font-[Inter-Medium]">Gate<strong className="text-black font-[Inter-SemiBold]">{gate}</strong></span>
        <span className="flex flex-col font-[Inter-Medium]">Seat<strong className="text-black font-[Inter-SemiBold]">{seat}</strong></span>
      </div>
    </div>
  );
};

export default TicketDetails;
