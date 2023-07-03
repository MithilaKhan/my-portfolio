import { FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb";
import { SiExpress, SiFirebase, SiMongodb } from "react-icons/si";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
const Skills = () => {
    useEffect(() => {
        Aos.init({duration:1000, easing: 'ease'})
    },[])
    return (
        <div id="skills">
            <h1 className="text-center font-bold text-4xl  text-red-500 p-7 mb-8 ">My Skills</h1>
           <div className="grid lg:grid-cols-4 sm:grid-cols-2 justify-items-center  gap-y-8 text-white text-center">
           
  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" w-44 h-32 rounded-lg p-5 border-white border-2 place-items-center hover:bg-gradient-to-r from-red-500  to-pink-500 inline-block"><FaHtml5 className="text-5xl mx-auto" /> <span className=" text-2xl p-3">HTML5 </span></div>

  <div data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" w-44 h-32 rounded-lg p-5 border-white border-2 place-items-center hover:bg-gradient-to-r from-red-500  to-pink-500 inline-block"><FaCss3 className="text-5xl mx-auto" /> <span className=" text-2xl p-3">CSS3 </span></div>

  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" w-44 h-32 rounded-lg p-5 border-white border-2 place-items-center hover:bg-gradient-to-r from-red-500  to-pink-500 inline-block"><TbBrandJavascript className="text-5xl mx-auto" /> <span className=" text-2xl p-3">JavaScript</span></div>

  <div data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" w-44 h-32 rounded-lg p-3 border-white border-2 place-items-center hover:bg-gradient-to-r from-red-500  to-pink-500 inline-block"><FaBootstrap className="text-5xl mx-auto" /> <span className=" text-2xl pt-2">Bootstrap </span></div>

  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" w-44 h-32 rounded-lg  border-white border-2 place-items-center hover:bg-gradient-to-r from-red-500  to-pink-500 inline-block"><TbBrandTailwind className="text-5xl mx-auto my-2" /> <span className=" text-2xl p-3">TailWindCss </span></div>

  <div data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" w-44 h-32 rounded-lg p-5 border-white border-2 place-items-center hover:bg-gradient-to-r from-red-500  to-pink-500 inline-block"><FaReact className="text-5xl mx-auto" /> <span className=" text-2xl p-3">React </span></div>
  
  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" w-44 h-32 rounded-lg p-5 border-white border-2 place-items-center hover:bg-gradient-to-r from-red-500  to-pink-500 inline-block"><FaNodeJs className="text-5xl mx-auto" /> <span className=" text-2xl p-3">NodeJs </span></div>
 
  <div data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" w-44 h-32 rounded-lg p-5 border-white border-2 place-items-center hover:bg-gradient-to-r from-red-500  to-pink-500 inline-block"><SiExpress className="text-5xl mx-auto" /> <span className=" text-2xl p-3">ExpressJs </span></div>
  
  <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" w-44 h-32 rounded-lg p-5 border-white border-2 place-items-center hover:bg-gradient-to-r from-red-500  to-pink-500 inline-block"><SiMongodb className="text-5xl mx-auto" /> <span className=" text-2xl p-3">MongoDB </span></div>
  
  <div data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" w-44 h-32 rounded-lg p-5 border-white border-2 place-items-center hover:bg-gradient-to-r from-red-500  to-pink-500 inline-block"><SiFirebase className="text-5xl mx-auto" /> <span className=" text-2xl p-3">Firebase </span></div>

 

            </div> 
        </div>
    );
};

export default Skills;