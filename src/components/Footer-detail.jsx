import '../index.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className='bg-white shadow-lg  text-center p-3 sticky bottom-0'>
            <div className='flex justify-between px-5'>
                <div className='flex flex-col text-left'>
                    <p className='text-[11px] font-[Inter-Regular]'>Start from</p>
                    <p className='text-[15px] font-[Inter-SemiBold]'>IDR1.100.000</p>
                </div>
                <Link to="/ticket" className="flex items-center justify-end w-full h-full">
                    <button className='bg-[#761CBC] text-white py-2 px-5 rounded-2xl text-[12px] font-[Inter-Medium]'>Buy Ticket</button>
                                   
                </Link>
               
                

            </div>
            
            
        </footer>
    );
}

export default Footer;