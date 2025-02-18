import '../index.css';
import Header from '../components/Header-detail';
import Post from '../components/Post-detail';
import Footer from '../components/Footer-detail';

function Detail() {
    return (
        <div>
        <Header />
        <div className='px-6'><Post /></div>
        <Footer />
        </div>
        
    );
    }

export default Detail;