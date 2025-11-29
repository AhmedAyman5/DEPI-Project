import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Your Phone" onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
      <button type="submit" className='bg-color-primary'>Send Message</button>
    </form>
  );
};

export default ContactForm;