import { Link } from "react-router-dom";
import '../index.css';
import background from '../assets/img/detail-6.png';
import { IoChevronBack } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { TbCalendarClock } from "react-icons/tb";



function Header () {
    return (
        <div className='relative'>
            <div className='absolute top-5 left-5 flex items-center justify-center w-9 h-9 bg-gradient-to-t from-[#2D264B]/90 to-[#2D264B]/80 rounded-lg z-10'>
                <Link to="/" className="flex items-center justify-center w-full h-full">
                    <IoChevronBack className="text-white text-lg" />
                </Link>
            </div>
            <div className="absolute p-7 right-2 text-white"><SlOptions />
            </div>
            <div className="absolute w-full px-5">
                <div className=" bg-white rounded-lg mt-25 w-full py-4 px-5 shadow-lg">
                    <div className="space-y-1">
                        <div className="flex gap-1 font-[Inter-SemiBold]">
                            <h1>Coldplay </h1>
                            <h1 className="text-[#761CBC]"> : Music of the Spheres</h1>
                        </div>
                        <div className="flex gap-1">
                            <SlLocationPin className="text-gray-400 w-[17px]"/>
                            <p className="text-[12px] font-['Inter-Regular']">Gelora Bung Karno Stadium, Jakarta</p>
                        </div>
                        <div className="flex gap-1">
                            <TbCalendarClock className="text-gray-400 w-[17px]"/>
                        <p className="text-[12px] font-['Inter-Regular']">November 15 2023</p>
                        </div>   
                    </div>
                    <div className="flex pt-4 gap-2 items-center">
                        <div className="relative flex items-center">
                            <img src="../src/assets/img/detail-1.svg" alt="1" className="w-8" />
                            <img src="../src/assets/img/detail-2.svg" alt="2" className="-ml-3 w-8" />
                            <img src="../src/assets/img/detail-3.svg" alt="3" className="-ml-3 w-8"/>
                        </div>
                        <p className="text-[13px] font-['Inter-Medium']">50K+ Participants</p>
                    </div>
                </div>
            </div>
            <div className=" w-full h-[200px]  bg-center" style={{backgroundImage: `url(${background})`}}></div>
        </div>
    )
}

export default Header;
