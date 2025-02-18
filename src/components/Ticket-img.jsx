const TicketImage = ({ imgSrc }) => (
  <div className="py-2">
    <img
      src={imgSrc}
      alt="Event"
      className="rounded-xl w-[308px] h-[159px]"
    />
  </div>
);

export default TicketImage;
