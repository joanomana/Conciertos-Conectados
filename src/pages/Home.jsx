import Header from '../components/Header-home';
import Carrusel1 from '../components/Carrousel-home-1';
import Carrusel2 from '../components/Carrousel-home-2';
import Carrusel3 from '../components/Carrousel-home-3';
import '../index.css'

function Home() {
  return (
    <div class="p-1">

        <Header />
        <div className='pl-5'> 
            <Carrusel1 />
        </div>
        <div className='flex justify-between px-4 pt-[20px]'>
            <h1 className='font-[Inter-SemiBold]'>Trending Events</h1>
            <p className='font-[Inter-Regular] text-[#333333] text-[14px]'>See all</p>
        </div>
        <div className='pt-3 ml-4'>
            <Carrusel2 />
        </div>
        <div className='flex justify-between px-5 pt-[20px]'>
            <h1 className='font-[Inter-SemiBold]'>Events Near You</h1>
            <p className='font-[Inter-Regular] text-[#333333] text-[14px]'>See all</p>
        </div>
        <div className='pt-2 ml-4'>
            <Carrusel3 />
        </div>

    </div>
  );
} 

export default Home;