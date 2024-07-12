// components/home_components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import heroImage from '@/public/assets/3UM-hero-new.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="overflow-hidden p-6 xl:pt-6 relative bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-8">
        <div className="max-w-[670px] relative flex w-full flex-col gap-6 lg:w-1/2 text-white">
          <h1 className="text-5xl font-extrabold">
            Discover Your Dream Home with Ease
          </h1>
          <p className="text-xl">
            Our intelligent ecosystem helps you find, finance, and purchase your new home seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#explore" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Explore Now</a>
            <a href="#contact" className="border border-white px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-blue-500 transition-colors">Contact Us</a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={heroImage}
            alt="hero image"
            width={1000}
            height={800}
            className="mx-auto h-full w-full max-w-4xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

interface InformationSectionProps {
  title: string;
  content: string;
  imgSrc: string;
}

export const InformationSection: React.FC<InformationSectionProps> = ({ title, content, imgSrc }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-xl text-gray-700 mt-4">{content}</p>
        </div>
        <div className="lg:w-1/2">
          <img src={imgSrc} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};


interface TestimonialProps {
  quote: string;
  name: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name }) => {
  return (
    <div className="text-center">
      <p className="text-xl text-gray-700 italic">"{quote}"</p>
      <p className="text-lg text-gray-900 font-bold mt-4">- {name}</p>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    { quote: "This service made buying my first home a breeze!", name: "John Doe" },
    { quote: "I found my dream home thanks to their amazing platform.", name: "Jane Smith" },
    { quote: "Highly recommend for anyone looking to purchase a new home.", name: "Alice Johnson" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Ready to Find Your New Home?</h2>
        <p className="text-xl mb-8">Get started today and discover the perfect home for you and your family.</p>
        <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Contact Us Now</a>
      </div>
    </section>
  );
};

