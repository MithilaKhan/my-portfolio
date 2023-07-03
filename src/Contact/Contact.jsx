import { FaArrowRight, FaPhone } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import  { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from "aos";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j6rucym', 'template_o35gcgn', form.current, 'HhQtOfsgmURQUEaSA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    Aos.init({duration:500, easing: 'ease'})
},[])
    return (
        <div id="contact">
            <h1  data-aos="zoom-in" data-aos-duration="1000"
    data-aos-easing="ease-in-out" className="text-center font-bold text-4xl  text-red-500 p-7 mt-10 ">Contact Me</h1>
            <div className="grid lg:grid-cols-3 justify-items-center sm:grid-cols-1 mb-8 mt-5">
        <div data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="  rounded-lg p-5 text-pink-700  place-items-center"><FaPhone className="text-5xl mx-auto" /> <span className=" text-2xl p-5">+8801812038369 </span></div>

<div data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="  rounded-lg p-5 text-pink-700  place-items-center"><BiLogoGmail className="text-5xl mx-auto" /> <span className=" text-2xl p-5">mithilakhan082@gmail.com </span></div>

<div data-aos="flip-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="  rounded-lg p-5 text-pink-700  place-items-center"><TiLocation className="text-5xl mx-auto" /> <span className=" text-2xl p-5">Dhaka , Bangladesh</span></div>
        </div>


<form  data-aos="zoom-in" data-aos-duration="1000"
    data-aos-easing="ease-in-out" ref={form} onSubmit={sendEmail} >
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 lg:ps-14 text-white ">
            <div className="form-control">
          <label className="label">
            <span className="label-text text-red-500 text-xl font-semibold">Your Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered w-3/4 bg-gray-300" name="from_name" required />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text text-red-500 text-xl font-semibold">Your Email</span>
          </label>
          <input type="email"  name="from_email" placeholder="email" className="input input-bordered w-3/4 bg-gray-300" required />
        </div>
            </div>
            <div className="form-control mb-2 m-14 mt-0 ">
            <label className="label">
              <span className=  " label-text text-red-500 text-xl font-semibold ">Message</span>
              </label>
              <textarea
                name="message"
                placeholder="write your massage"
                className="
                
            block
            w-full
            bg-gray-300
             px-14 py-6
            mb-6
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="4"
              ></textarea>
            
          </div>
          <button className="btn btn-outline btn-error ms-14 mb-10">Send Massage <FaArrowRight/></button>
        </form>
        
        </div>
        
    );
};

export default Contact;