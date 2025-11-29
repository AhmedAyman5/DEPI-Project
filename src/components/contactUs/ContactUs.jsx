
import { ContactForm, ContactInfo } from '../exportComponents';
import './contactUs.css';

const ContactSection = () => {
  return (
    <section className="contact-section py-5 px-2" id='contact'>
      <div className='contact-inner row row-gap-4 m-auto '>
        <div className="col-12 col-md-6">
        <ContactInfo />
      </div>
      <div className="col-12 col-md-6">
        <ContactForm />
      </div>
      </div>
    </section>
  );
};

export default ContactSection;

