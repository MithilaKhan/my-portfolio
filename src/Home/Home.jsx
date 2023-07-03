import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
    return (
        <div id="home" className="hero  sm:mt-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
            {/* TODO: use my pic  */}
        <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?w=1060&t=st=1688391398~exp=1688391998~hmac=163e710dd0bc83a5ccc25a1c44d19da1aa0af8921d7b57c7a7469eeebfe75de5" className=" rounded-xl shadow-2xl p-10" />
        </div>
          
          <div className="w-1/2 sm:mb-20 text-white">
            <h3 className='text-lg'>Hello,I'm</h3>
            <h1 className="text-5xl leading-normal font-bold bg-gradient-to-r from-red-500  to-pink-500 inline-block text-transparent bg-clip-text">Naziya Sultana Mithila</h1>
            
            <p className="py-6 text-justify text-2xl">I am a full-stack developer. I focus on creating user-friendly websites. I am a very hardworking person. I enjoy learning new things. I easily motivate myself when facing difficult situations.</p>
            <div className='flex'>
            
            <a href='https://www.facebook.com/tasmia.nur.1800' className=''><FaFacebook className='text-3xl'/></a> 
            <a href='https://www.linkedin.com/in/mithila-khan-990736278/' className='ms-4'><FaLinkedinIn className='text-3xl'/></a> 
            <a href='https://github.com/MithilaKhan' className='ms-4'><FaGithub className='text-3xl'/></a> 
            <a href='' className='ms-4'><FaInstagram className='text-3xl'/></a> 

            </div>
         
          </div>
        </div>
      </div>
    );
};

export default Home;