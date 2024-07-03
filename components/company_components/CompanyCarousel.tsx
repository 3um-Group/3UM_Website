// components/company_components/CompanyCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const CompanyCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const slides = [
    {
      title: "AI Solutions for Finance and Developers",
      content: "Harnessing the power of Generative AI and Neural Networks, we process requests, learn from user interactions, and continuously enhance our product offerings.",
      image: "/assets/CPU.png"
    },
    {
      title: "Blockchain Integration",
      content: "Aligned with our core values of transparency, we leverage blockchain technology to ensure secure transactions, enhance financial capabilities through staking and farming, and deliver a trust-driven user experience.",
      image: "/assets/Quantum.png"
    },
    {
      title: "Quantum Computing",
      content: "Pioneering research in quantum computing to accelerate computations, optimize AI-driven data pipelines, and refine prediction models, offering you the best investment opportunities.",
      image: "/assets/Quantum.png"
    }
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide bg-gradient-to-r from-blue-300 to-green-600">
            <div className="carousel-content p-8 text-white">
              <h3 className="carousel-title text-3xl font-bold mb-4">{slide.title}</h3>
              <p className="carousel-text text-lg mb-4">{slide.content}</p>
              <div className="relative w-full h-64">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyCarousel;
