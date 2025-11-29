import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../pages/home/Home.css";

function HeroSection() {
  const slides = [
    {
      title: "SMART WEARABLE",
      subtitle: "Best Deal Online on smart watches",
      discount: "UP TO 80% OFF",
      img: "/imgs/image 2.png",
      btnClass: "btn rounded-pill shadow text-primary fw-bold",
      bg: "linear-gradient(135deg, #516095d6, #363e45ff)",
    },
    {
      title: "TRENDING SMARTPHONES",
      subtitle: "New Collection",
      discount: "UP TO 50% OFF",
      img: "/imgs/image 9 (1).png",
      btnClass: "btn rounded-pill text-primary fw-bold",
      bg: "linear-gradient(135deg, #3a3737ac, #a37c67ef)",
    },
    {
      title: "PREMIUM FRUITS COLLECTION",
      subtitle: "Fresh & Organic",
      discount: "UP TO 50% OFF",
      img: "/imgs/pngegg 1.png",
      btnClass: "btn text-primary rounded-pill fw-bold px-4",
      bg: "linear-gradient(135deg, #28a796ff, #23b18d63)",
    },
    {
      title: "TRENDING FASHION COLLECTION",
      subtitle: "New Arrivals",
      discount: "UP TO 60% OFF",
      img: "/imgs/fashion.png",
      btnClass: "btn btn-light rounded-pill text-primary fw-bold px-4",
      bg: "linear-gradient(135deg, #e83e8d7e, #a75f2db9)",
    },
  ];

  return (
    <div className="container hero mb-5 d-flex justify-content-center align-items-center" style={{height: "80vh"}}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{height: '70vh'}}>
            <div
              className="hero-slide-card h-100 row align-items-center flex-row-reverse text-white shadow-lg p-5"
              style={{
                background: slide.bg,
              }}
            >
                 <div className="col-md-6 text-center">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="img-fluid"
                  style={{ maxHeight: "400px", width: "auto", transform: "scale(1.2)" }}
                />
              </div>
              <div className="col-md-6 text-center">
                <h5 className="text-light">{slide.subtitle}</h5>
                <h1 className="fw-bold">{slide.title}</h1>
                <p className="text-light fs-3">{slide.discount}</p>
                <a className={`${slide.btnClass} btn-light z-3`} href="#products">Shop Now</a>
              </div>
           
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSection;
