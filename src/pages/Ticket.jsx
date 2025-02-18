import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import Carrusel from '../components/Carrousel-ticket';

function Ticket() {
    return (
        <div>
            <div className='flex flex-col bg-gradient-to-b from-[#91B5FD] to-[#F0DDFF] h-screen'>
                <div className='absolute top-5 left-5 flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer' style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <Link to="/detail" className="flex items-center justify-center w-full h-full">
                        <IoChevronBack className="text-white" />
                    </Link>
                </div>
                <div className="absolute p-7 right-2 text-white">
                    <SlOptions />
                </div>
                <div>
                    <Carrusel />
                </div>
            </div>
        </div>
    );
}

export default Ticket;
