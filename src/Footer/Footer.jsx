import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10   rounded top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30  text-white border-b">
 
  <div>
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.facebook.com/tasmia.nur.1800"><FaFacebook className="text-4xl"/></a> 
      <a href="https://www.linkedin.com/in/mithila-khan-990736278/"><FaLinkedin className="text-4xl"/></a> 
      <a href="https://github.com/MithilaKhan"><FaGithub className="text-4xl"/></a>
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