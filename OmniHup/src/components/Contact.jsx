import Header from "./Team/Headerteam";
import Card from "./shared/Personelcard";
import Personel from "./Team/Personel";
import Volunteer from"./Team/volunteer";
import ContactForm from"./shared/Formcontact";
import Footer from "./shared/Footer";
import './Team/Team.css';



function Contact() {
    return (
      <>
      <Header />
      <Card />
    <Personel />
    <Volunteer />
    <ContactForm />
      <Footer />
    </>
    );
  }
  
  export default Contact;
  