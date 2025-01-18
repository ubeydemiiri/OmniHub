import './About/About.css';
import Aboutus from './About/Aboutus';
import Headerabout from './About/Headerabout';
import Donenteabout from'./About/Donanteabout';
import Slidewrapper from './About/Sliderwrapper';
import Personelcard from './shared/Personelcard';
import Galleryabout from './About/Galleryabout';
import Statistics from './About/statistics';
import ContactForm from "./shared/Contact";
import Footer from "./shared/Footer";





function Service() {
    return (
      <>
      <Headerabout />
      <Aboutus />
      <Donenteabout />
      <Slidewrapper />
      <Personelcard />
     <Galleryabout />
     <Statistics />
     <ContactForm />
     <Footer />
     
      </>
    );
  }
  
  export default Service;
  