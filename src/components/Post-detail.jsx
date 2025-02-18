import '../index.css';

function Post() {
    return (
        <div className='pt-17'>
            <div className='space-y-1'>
                <h1 className='text-[15px] font-[Inter-Medium]'>Description</h1>
                <p className='text-[11px]'>Integer id augue iaculis, iaculis orci ut, blandit quam. Donec in <br/> elit auctor, finibus quam in, phar. Proin id ligula dictum, covalis <br /> enim ut, facilisis massa. Mauris a nisi ut sapien blandit imperdi. <br /> Interdum et malesuada fames ac ante ipsum primis in faucibs. <br /> Sed posuere egestas nunc ut tempus. Fu ipsum dolor sit amet. <br /> <span className='text-[#0092FC]'> Read More..</span> </p>

            </div>
            <div className='pt-1'>
                <h1 className='text-[15px] font-[Inter-Medium]'>Venue & Location</h1>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16585.018989582743!2d-122.42928550066173!3d37.76803328352994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1739847611302!5m2!1ses!2sco" 
                    class="w-full h-60 border-0 pt-1 rounded-3xl" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>

            </div>
        </div>
    );
    }

export default Post;

