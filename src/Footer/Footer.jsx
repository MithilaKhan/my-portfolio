import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10   rounded top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30  text-white border-b">
  <div className="grid grid-flow-col gap-4 text-lg">
    <a className="link link-hover">About Me</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <a><FaFacebook className="text-4xl"/></a> 
      <a><FaLinkedin className="text-4xl"/></a> 
      <a><FaGithub className="text-4xl"/></a>
      <a href=""> <FaInstagram className="text-4xl"/></a>
    </div>
  </div> 
  <div>
    <p className="text-xl">Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
    );
};

export default Footer;