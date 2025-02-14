import Header from '../components/Header-home';
import Carrusel1 from '../components/Carrousel-home-1';
import Carrusel2 from '../components/Carrousel-home-2';
import '../index.css'

function Home() {
  return (
    <div class="p-2">

        <Header />
        <div className='pl-5'> 
            <Carrusel1 />
        </div>
        <div className='pt-10'>
            <div className='flex justify-between px-4'>
                <h1 className='font-[Inter-SemiBold]'>Trending Events</h1>
                <p className='font-[Inter-Regular] text-[#333333] text-[14px]'>See all</p>
            </div>
            <div className='pt-3 ml-4'>
                <Carrusel2 />
            </div>
        </div>
    </div>
  );
} 

export default Home;