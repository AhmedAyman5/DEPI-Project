import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3 className="text-black-50">GET IN TOUCH WITH US</h3>
      <p className="pe-5 text-black-50">Whether it's question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.</p>

      <div className="info-item ">
        <div className="d-flex align-items-center gap-3">
          <FaHome size={25}/>
          <h4>Our Location</h4>
        </div>
        <p className="ms-5 text-black-50">
          99 S.t Jomblo Park Pekanbaru
          <br />
          28292. Indonesia
        </p>
      </div>

      <div className="info-item ">
        <div className="d-flex align-items-center gap-3">
          <FaPhoneAlt size={20}/>
          <h4>Phone Number</h4>
        </div>
        <p className="ms-5 text-black-50">(+62)81 414 257 9980</p>
      </div>

      <div className="info-item ">
        <div className="d-flex align-items-center gap-3">
          <FaEnvelope size={20}/>
          <h4>Email Address</h4>
        </div>
        <p className="ms-5 text-black-50">info@yourdomain.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
