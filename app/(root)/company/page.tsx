'use client';

import React, { useState, useEffect } from 'react';
import Container3D from '@/components/3DModel/Container3D';


const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="text-center fixed top-40 left-1/2 transform -translate-x-1/2 z-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
    </div>
  );
};

/*

Considering GSAP for the animation sequence as they're top of the line when it comes to animation/transitions. It can make the visuals absolutely seamless. 
Additionally, 
 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CompanyPage = () => {
  useEffect(() => {
    gsap.fromTo('.3D-Container', 
      { x: '-100%' }, 
      { x: '0%', 
        scrollTrigger: {
          trigger: '.main-div',
          start: 'top top',
          end: '+=2000', // adjust based on your needs
          scrub: true,
        }
      }
    );

    gsap.fromTo('.Content-Description', 
      { opacity: 0 }, 
      { opacity: 1, 
        scrollTrigger: {
          trigger: '.main-div',
          start: 'top 200px',
          end: '+=2000', // adjust based on your needs
          scrub: true,
        }
      }
    );

    gsap.fromTo('.Key-Technologies-Section', 
      { opacity: 0 }, 
      { opacity: 1, 
        scrollTrigger: {
          trigger: '.main-div',
          start: 'top 1000px',
          end: '+=2000', // adjust based on your needs
          scrub: true,
        }
      }
    );

    gsap.fromTo('.Team-Section', 
      { opacity: 0 }, 
      { opacity: 1, 
        scrollTrigger: {
          trigger: '.main-div',
          start: 'top 3000px',
          end: '+=2000', // adjust based on your needs
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div className="main-div min-h-[10000px] bg-white text-black pb-0 overflow-hidden">
      <section className="px-6 py-16 md:py-24 lg:py-32 fixed w-full top-0 left-0">
        <div className="relative mx-auto max-w-container md:lg:max-w-6xl lg:max-w-6xl">
          <PageTitle title="The Company" />
          <ContentDescription description="At 3UM, we are revolutionizing the future with our intelligent infrastructure. Our mission is to build groundbreaking businesses across key technologies, AI, blockchain, and quantum computing, providing investors and industry with advanced tools and solutions. We aim to create an intelligent ecosystem that empowers users to connect, learn, and grow, driving sustainable progress and creating new opportunities." />
          <Container3D />
        </div>
      </section>
      <section className="min-h-screen Key-Technologies-Section">
        <KeyTechnologiesSection />
      </section>
      <section className="min-h-screen Team-Section">
        <TeamSection />
      </section>
    </div>
  );
};

*/

const CompanyPage: React.FC = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const handleMouseEnter = () => {
    setScrollEnabled(false);
  };

  const handleMouseLeave = () => {
    setScrollEnabled(true);
  };

  // useEffect(() => {
  //   document.body.style.overflowY = scrollEnabled ? 'scroll' : 'hidden';
  // }, [scrollEnabled]);

  return (
    <div
      className="main-div min-h-[10000px] bg-white text-black pb-0 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section className="px-6 py-16 md:py-24 lg:py-32 fixed w-full top-0 left-0">
        <div className="relative mx-auto max-w-container md:max-w-6xl lg:max-w-6xl">
          <PageTitle title="The Company" />
          <Container3D
            width="500px"
            height="500px"
            position={[15, 0, 10]}
            animationType="resize"
            initialWidth="100px"
            initialHeight="100px"
            left="50%"
            top="80%"
          />
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
