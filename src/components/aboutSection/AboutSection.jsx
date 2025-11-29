import "../../pages/home/Home.css";

function AboutSection() {
  return (
    <section className="about-section py-5 rounded-5 my-5 shadow-lg " id="about">
      <div className="container-fluid d-flex flex-wrap align-items-center w-75 m-auto">
        <div className="about-text col-md-6">
          <h2 className="fw-bold mb-3 text-secondary">About Us</h2>
          <p className="pe-5">
            Welcome to <b className='text-primary fs-4'><i>ShopEasy</i></b>, your number one source for smart shopping. 
            We are dedicated to giving you the very best of products, 
            with a focus on quality, customer service, and uniqueness.
          </p>
        </div>
        <div className="about-image col-md-6 text-center">
          <img 
            src="/imgs/about2.png" 
            alt="About Us" 
            className="img-fluid rounded-5 shadow-lg "
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
