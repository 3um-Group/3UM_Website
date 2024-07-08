'use client';

import React from 'react';
import ScrollSection from '@/components/company_components/ScrollSection';

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

const CompanyPage: React.FC = () => {
  return (
    <div className="w-1/2 min-h-screen bg-white text-black pb-0 flex-columns mx-auto items-center justify-center">
      <section className="h-[600px] overflow-y-scroll snap-y snap-mandatory border-solid border-2 border-indigo-600">
            <div className="relative mx-auto max-w-container md:lg:max-w-6xl lg:max-w-6xl">
              <PageTitle title="Our Company" />
            </div>
            <div className="snap-start h-full flex items-center justify-center border-solid border-2 border-indigo-600">
              <ScrollSection direction={'right'} text={TEXT.Text1} />
            </div>
            <div className="snap-start h-full flex items-center justify-center border-solid border-2 border-indigo-600">
              <ScrollSection direction={'center'} text={TEXT.Text2} />
            </div>
            <div className="snap-start h-full flex items-center justify-center border-solid border-1 border-indigo-600">
              <ScrollSection direction={'right'} text={TEXT.Text3} />
            </div>
      </section>
      <section className="h-[600px] overflow-y-scroll snap-y snap-mandatory border-solid border-2 border-indigo-600">
        <div className="relative mx-auto max-w-container md:lg:max-w-6xl lg:max-w-6xl">
          <PageTitle title="Our Solutions" />
        </div>
        <div className="snap-start h-full flex items-center justify-center border-solid border-2 border-indigo-600">
          <ScrollSection direction={'right'} text={TEXT.Text1} />
        </div>
        <div className="snap-start h-full flex items-center justify-center border-solid border-2 border-indigo-600">
          <ScrollSection direction={'center'} text={TEXT.Text2} />
        </div>
        <div className="snap-start h-full flex items-center justify-center border-solid border-1 border-indigo-600">
          <ScrollSection direction={'right'} text={TEXT.Text3} />
        </div>
      </section>
      <hr/>
    </div>
  );
};


export default CompanyPage;
