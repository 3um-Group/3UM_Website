// src/app/(root)/company/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import QuantumCube from '@/components/3DModel/QuantumCube';
import ClientOnly from '@/components/3DModel/ClientOnly';
import { KeyTechnologiesSection, TeamSection } from './utils';

const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="text-center fixed top-40 left-1/2 transform -translate-x-1/2 z-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
    </div>
  );
};

const PageDescriptionAndModel: React.FC<{ description: string }> = ({ description }) => {
  const [translateX, setTranslateX] = useState(0);
  const [isAbsolute, setIsAbsolute] = useState(true);
  const mainDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (mainDivRef.current?.contains(event.target as Node)) {
        if (event.deltaY > 0) {
          setTranslateX((prev) => Math.min(prev + 120, 4000));
        } else {
          setTranslateX((prev) => Math.max(prev - 120, 0));
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (translateX >= 4000) {
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }, [translateX]);

  useEffect(() => {
    const handleScrollReset = () => {
      if (window.scrollY === 0) {
        setTranslateX(0);
      }

      const mainDivHeight = mainDivRef.current?.scrollHeight || 0;
      if (window.scrollY + window.innerHeight >= mainDivHeight - 100) {
        setIsAbsolute(false);
      } else {
        setIsAbsolute(true);
      }
    };

    window.addEventListener('scroll', handleScrollReset);

    return () => {
      window.removeEventListener('scroll', handleScrollReset);
    };
  }, []);

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-between gap-8 px-8 pt-32"
      style={{ position: isAbsolute ? 'absolute' : 'relative' }}
      ref={mainDivRef}
    >
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
          transform: `translateX(-${translateX / 3}px)`,
          transition: 'transform 0.8s ease-in-out',
        }}
      >
        <ClientOnly>
          <QuantumCube />
        </ClientOnly>
      </div>
      {translateX >= window.innerWidth / 2 && (
        <div
          className="Placeholder md:w-1/2 flex justify-center items-center pt-32"
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: `translateY(-50%) translateX(0)`,
            transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out',
            opacity: 1,
            height: '100%',
          }}
        >
          <KeyTechnologiesSection />
        </div>
      )}
      {translateX >= 3000 && (
        <div
          className="TeamSection md:w-full flex justify-center items-center pt-32"
          style={{
            position: 'absolute',
            left: '50%',
            transform: `translateX(-50%)`,
            transition: 'opacity 0.8s ease-in-out',
            opacity: 1,
          }}
        >
          <TeamSection />
        </div>
      )}
    </div>
  );
};

const CompanyPage: React.FC = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const handleMouseEnter = () => {
    setScrollEnabled(false);
  };

  const handleMouseLeave = () => {
    setScrollEnabled(true);
  };

  useEffect(() => {
    document.body.style.overflowY = scrollEnabled ? 'scroll' : 'hidden';
  }, [scrollEnabled]);

  return (
    <div
      className="main-div min-h-[10000px] bg-white text-black pb-0 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section className="px-6 py-16 md:py-24 lg:py-32 fixed w-full top-0 left-0">
        <div className="relative mx-auto max-w-container md:lg:max-w-6xl lg:max-w-6xl">
          <PageTitle title="The Company" />
          <PageDescriptionAndModel
            description="At 3UM, we are revolutionizing the future with our intelligent infrastructure. Our mission is to build groundbreaking businesses across key technologies, AI, blockchain, and quantum computing, providing investors and industry with advanced tools and solutions. We aim to create an intelligent ecosystem that empowers users to connect, learn, and grow, driving sustainable progress and creating new opportunities."
          />
        </div>
      </section>
      <section className="min-h-screen"></section>
    </div>
  );
};

export default CompanyPage;
