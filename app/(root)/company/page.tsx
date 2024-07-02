'use client';

import React, { useState, useEffect } from 'react';
import QuantumCube from '@/components/3DModel/QuantumCube';
import ClientOnly from '@/components/3DModel/ClientOnly';

const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
    </div>
  );
};

const PlaceholderSection: React.FC = () => {
  return (
    <div className="placeholder-section bg-gray-200 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Placeholder Section</h2>
      <p className="text-lg">This is a placeholder for the new section that will appear when the 3D model translates fully to the left.</p>
    </div>
  );
};

const PageDescriptionAndModel: React.FC<{ description: string }> = ({ description }) => {
  const [translateX, setTranslateX] = useState(0);
  const [isInteractingWith3D, setIsInteractingWith3D] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!isInteractingWith3D) {
        if (event.deltaY > 0) {
          setTranslateX((prev) => Math.min(prev + 120, window.innerWidth / 2));
        } else {
          setTranslateX((prev) => Math.max(prev - 120, 0));
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isInteractingWith3D]);

  useEffect(() => {
    if (translateX >= window.innerWidth / 2) {
      setShowPlaceholder(true);
    } else if (translateX === 0) {
      setShowPlaceholder(false);
    }
  }, [translateX]);

  const handleMouseEnter = () => {
    setIsInteractingWith3D(true);
  };

  const handleMouseLeave = () => {
    setIsInteractingWith3D(false);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-8 overflow-hidden">
      <div
        className="Company-Description md:w-1/2"
        style={{
          transform: `translateX(-${translateX}px)`,
          opacity: translateX > window.innerWidth / 5 ? 0 : 1,
          transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out',
        }}
      >
        <p className="text-lg mb-4 text-justify">{description}</p>
      </div>
      <div
        className="3D-Container md:w-1/2 flex justify-center md:justify-end"
        style={{
          transform: `translateX(-${showPlaceholder ? translateX - window.innerWidth / 5 : translateX * 2.5 / 4}px)`,
          transition: 'transform 0.8s ease-in-out',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ClientOnly>
          <QuantumCube />
        </ClientOnly>
      </div>
      {showPlaceholder && (
        <div
          className="Placeholder md:w-1/2 flex justify-center items-center"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            transform: `translateX(${showPlaceholder ? '0%' : '100%'})`,
            transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out',
            opacity: showPlaceholder ? 1 : 0,
            height: '100%',
          }}
        >
          <PlaceholderSection />
        </div>
      )}
    </div>
  );
};

const CompanyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black pb-0">
      <section className="px-6 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-container relative md:lg:max-w-6xl lg:max-w-6xl">
          <PageTitle title="The Company" />
          <PageDescriptionAndModel
            description="At 3UM, we are revolutionizing the future with our intelligent infrastructure. Our mission is to build groundbreaking businesses across key technologies, AI, blockchain, and quantum computing, providing investors and industry with advanced tools and solutions. We aim to create an intelligent ecosystem that empowers users to connect, learn, and grow, driving sustainable progress and creating new opportunities."
          />
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
