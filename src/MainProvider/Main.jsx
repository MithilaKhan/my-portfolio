import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Navbar from "../shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="bg-black">
            <Navbar/>
            <Home/> 
           
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Main;