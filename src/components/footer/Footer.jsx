import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialLinkedin,
    TiSocialGithub,
} from "react-icons/ti";
import {
    FaInstagram,
    FaGem,
    FaHome,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-start bg-light text-muted mt-5">
            <section className="border-bottom">
                <div className="w-75 m-auto d-flex justify-content-center justify-content-lg-between py-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div className="social-contact">
                        <a href="" className="me-4 text-reset">
                            <TiSocialFacebook size={25}/>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <TiSocialTwitter size={25}/>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <FaInstagram size={20}/>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <TiSocialLinkedin size={25}/>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <TiSocialGithub size={30}/>
                        </a>
                    </div>
                </div>
            </section>
            <section className="px-md-5 mx-md-4">
                    <div className="p-4 row column-gap-md-3">
                        <div className="col-6 col-md-4">
                            <h6 className="text-uppercase fw-bold text-start mb-4">
                                <FaGem />
                                <span> Shop Easy</span>
                            </h6>
                            <p className="pe-md-5">Discover the best deals, top brands, and endless choices - all one place.</p>
                        </div>

                        <div className="mb-4 col-6 col-md-2">
                            <h6 className="text-uppercase fw-bold text-start mb-4">Products</h6>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none text-decoration-none">
                                    Men's clothing
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    Women's clothing
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    Jewelry
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">
                                    Electronic
                                </a>
                            </p>
                        </div>

                        <div className="mb-4 col-6 col-md-2">
                            <h6 className="text-uppercase fw-bold text-start mb-4">Useful links</h6>
                            <p>
                                <a href="#home" className="text-reset text-decoration-none">
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href="#about" className="text-reset text-decoration-none">
                                    About
                                </a>
                            </p>
                            <p>
                                <a href="#products" className="text-reset text-decoration-none">
                                    Products
                                </a>
                            </p>
                            <p>
                                <a href="#contact" className="text-reset text-decoration-none">
                                    Contact Us
                                </a>
                            </p>
                        </div>

                        <div className="mb-4 mb-4 col-6 col-md-2">
                            <h6 className="text-uppercase fw-bold text-start mb-4">Contact</h6>
                            <p className="d-flex gap-2">
                                <FaHome size={30}/>
                                <span> El-mansoura, MAN 10012, EG</span>
                            </p>
                            <p className="d-flex gap-2">
                                <FaEnvelope size={30}/>
                                <span> shopeasy@gmail.com</span>
                            </p>
                            <p className="d-flex gap-2">
                                <FaPhoneAlt size={20}/>
                                <span>+20 0102 3456 789</span>
                            </p>
                        </div>
                    </div>
            </section>

            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                <span>&copy; 2025 Copyright:</span>
                <a className="text-reset text-decoration-none fw-bold" href="#">
                    shop-easy.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;