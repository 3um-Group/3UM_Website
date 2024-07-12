'use client';

import React from 'react';
import Products from '@/components/our_solutions_components/OurProducts'
import OurSolutions from '@/components/our_solutions_components/OurSolutions'

const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="text-center relative top-20 left-1/2 transform -translate-x-1/2">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
    </div>
  );
};

enum TEXT {
  Title = "The Company",
  Text1 = "At 3UM, we are revolutionizing the future with our intelligent infrastructure. Our mission is to transform industries by seamlessly integrating AI, blockchain, and quantum computing, providing businesses and individuals with innovative tools and solutions.",
  Text2 = "We aim to create an intelligent ecosystem that empowers users to innovate, optimize, and grow, driving sustainable progress and creating new opportunities. We are committed to enhancing the way technology serves humanity, ensuring that our advanced infrastructure supports a wide range of applications, from finance and healthcare to smart cities and beyond. Our team of experts, driven by a shared vision, works tirelessly to develop cutting-edge solutions that are secure, scalable, and user-friendly.",
  Text3 = "Check out our products below"
}

const OurSolutionsPage: React.FC = () => {
  return (
    <div className="w-1/2 min-h-screen bg-white text-black pb-0 flex-columns mx-auto items-center justify-center">
            <div>
      <OurSolutions />
      <Products />
    </div>
      <hr/>
    </div>
  );
};


export default OurSolutionsPage;
