import '../index.css'
import Options from "../assets/img/home-5.svg";
import Notifi from "../assets/img/home-6.svg";
import { IoIosSearch } from "react-icons/io";
import { CgOptions } from "react-icons/cg";



function Header() {
  return (
    <header className='flex flex-col p-4'>
      <div className='flex justify-between items-center'>
        <img src={Options} alt="1" className='w-[32px] h-[32px]' />
        <img src={Notifi} alt="2" className='w-[34px] h-[34px]' />
      </div>
      <div className="py-[20px] text-2xl font-[Inter-SemiBold]">
        <h1>Find</h1>
        <h1 className='text-[#761CBC]'>Trending Events</h1>
      </div>
      <div className="flex items-center rounded-lg h-10 py-3 shadow-md mx-1">
      <IoIosSearch className="w-8 h-7" />
      <input
        type="text"
        placeholder="Search event.."
        className="w-full text-black outline-none px-2"
      />
      <CgOptions className='w-10 h-6' />
    </div>
    </header>
  );
}

export default Header;
