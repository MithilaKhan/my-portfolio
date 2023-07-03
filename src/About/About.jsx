import Aos from "aos";
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    Aos.init({duration:1000, easing: 'ease'})
},[])
    return (
        <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="hero  text-white mt-0 " id="about">
  <div className="hero-content flex-col  lg:flex-row-reverse">
  
   
    <div className="w-1/2 lg:p-16">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500  to-pink-500 inline-block text-transparent bg-clip-text">About Me!</h1>
      <p className="py-6 text-xl text-justify">I am <span className="  bg-gradient-to-r from-red-500  to-pink-500 inline-block text-transparent bg-clip-text">Naziya Sultana Mithila </span> . I am from Dhaka, Bangladesh. I am a third-year student in the Computer Department of Dhaka Mohila Polytechnic Institute. I am a full-stack developer. I have a good knowledge of HTML, CSS, JavaScript, and more. When I face difficult problems, I consider myself a hardworking person. I enjoy solving various problems.</p>
     
    </div>

    <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="w-1/2">
    <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?w=1060&t=st=1688391398~exp=1688391998~hmac=163e710dd0bc83a5ccc25a1c44d19da1aa0af8921d7b57c7a7469eeebfe75de5" className=" lg:p-10 rounded-lg shadow-2xl " />
    </div>
  </div>
</div>
    );
};

export default About;