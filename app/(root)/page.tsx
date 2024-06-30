'use client'

import Carousels from '@/components/home_components/Carousels';
import Describe from '@/components/home_components/Describe';
import Product from '@/components/home_components/Product';

import stone from '@/public/assets/stone.png'
// import three_UM from '@/public/assets/IMG_0701 1.png';
import three_UM from '@/public/assets/3UM-hero.jpg';
import three_UM_DOA from '@/public/assets/3UM-superDOA.png';
import three_UM_brain from '@/public/assets/3UM-brain.jpg';

import Nasa from '@/public/assets/company_logos/IMG_0829 1.png';
import wells from '@/public/assets/company_logos/IMG_0695.png';
import ibm from '@/public/assets/company_logos/IMG_0693.png';
import consensys from '@/public/assets/company_logos/IMG_0166.png';
import fidelity from '@/public/assets/company_logos/IMG_0167 1.png';
import lock from '@/public/assets/company_logos/IMG_0169.png';
import google from '@/public/assets/company_logos/IMG_0170.png';
import credit from '@/public/assets/company_logos/IMG_0172 2.png';

import logo from '@/public/assets/IMG_0701 1.png';
import header1 from '@/public/assets/Rectangle 23.png';
import header2 from '@/public/assets/Rectangle 23 (1).png';
import header3 from '@/public/assets/Rectangle 23 (2).png';
import header4 from '@/public/assets/Rectangle 23 (3).png';
import header5 from '@/public/assets/Rectangle 23 (4).png';
import header6 from '@/public/assets/Rectangle 23 (5).png';

import { ArrowRightOutlined } from '@ant-design/icons';
import Card from '@/components/Card';

import Image from 'next/image';
import DataCard from '@/components/home_components/DataCards';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UseCaseCard from '@/components/home_components/useCaseCard';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0); // Set to 4 for "DAOs" to be active initially
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handlePrevTab = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : tabs.length - 1));
  };

  const handleNextTab = () => {
    setActiveTab((prev) => (prev < tabs.length - 1 ? prev + 1 : 0));
  };



  const useCases = [
    {

      description: 'Healthcare',
      quote: 'Enhanced patient care with predictive analytics and personalized care.',

    },
    {
      description: 'Finance',
      quote: 'Improved investment strategies with AI-driven analysis.',


    },
    {
      description: 'Supply Chain',
      quote: 'Optimized logistics with real-time data.',

    },
    {
      description: 'Cybersecurity',
      quote: 'Advanced threat detection with quantum-enhanced cryptography, zero-knowledge proofs, and quantum cryptography.',

    },
    {
      description: 'Research',
      quote: 'Accelerating discoveries with AI and quantum computing.',

    }
    // Add more use cases as needed
  ];

  const handleNextSlide = () => {
    if (currentSlide < useCases.length - 1) {
      const nextSlide = currentSlide + 1;
      setCurrentSlide(nextSlide);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: sliderRef.current.clientWidth * nextSlide,
          behavior: 'smooth'
        });
      }
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      const prevSlide = currentSlide - 1;
      setCurrentSlide(prevSlide);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: sliderRef.current.clientWidth * prevSlide,
          behavior: 'smooth'
        });
      }
    }
  };

  const apiCards = [
    {
      icon: '🔒',
      title: 'Integrated Identities',
      description: 'Secure identity management with decentralized technology',
    },
    {
      icon: '🔄',
      title: 'Smart Contract Infrastructure',
      description: 'Efficient and secure smart contract solutions.',
    },
    {
      icon: '📄',
      title: 'Decentralized Intelligence Tools',
      description: 'Build and manage intelligent applications.',
    },
    {
      icon: '💱',
      title: 'Real-Time Analytics',
      description: ' Gain insights with real-time data processing.',
    },
    {
      icon: '🔮',
      title: 'Blockchain Simulation',
      description: 'Test and verify transactions securely.',
    },
  ];


  const tabs = [

    {
      "name": "3UM.ID",
      "content": "A revolutionary identity management system allowing users to control their digital identities securely, leveraging quantum computing, AI, and blockchain.",
      "img": three_UM_brain
    },
    {
      "name": "3UM Finance",
      "content": "A comprehensive financial platform that empowers users to create, manage, and invest across CeFi, DeFi, HiFi, and TradFi, integrating robust security, real-time analytics, and personalized investment strategies.",
      "img": three_UM_brain
    },
    {
      "name": "3UM Genesis",
      "content": "A powerful development platform enabling users to build, deploy, and scale intelligent applications across IoT, blockchain, AI, research, and more ecosystems with seamless connectivity and adaptive learning capabilities.",
      "img": three_UM_brain
    }

  ];

  return (
    <>
      <div className='relative'>

        <div className="pt-16 lg:pt-20"></div>
        {/* First section - Hero Section */}
        <section className="overflow-hidden p-6 xl:pt-6 relative">
          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-8">
            {/* Left side content */}
            <div className="max-w-[670px] relative flex w-full flex-col gap-6 lg:w-1/2">
              <h1 className="text-5xl font-extrabold text-gray-900">
                Nurturing the Future of Technology with Our Intelligent Ecosystem
              </h1>
              <p className="text-xl text-gray-700">
                Discover the 3UM Intelligent Ecosystem, where cutting-edge technology meets seamless integration.
              </p>
              <p className="text-xl text-gray-700">
                Build, deploy, and scale your applications with our powerful infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Explore the Ecosystem
                </a>
                <a href="/docs" className="text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  View docs
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side content possibly an image */}
            <div data-testid="hero-component" className="min-h-lg flex h-fit w-full max-w-xl items-center rounded-lg lg:w-1/2 bg-transparent">
              {/* <img
              alt="product-stack"
              width="1170"
              height="928"
              decoding="async"
              data-nimg="1"
              
              srcSet=""
              src=""
              style={{ color: "transparent" }}
            /> */}

              <Image
                src={three_UM}
                alt='hero-image'
                width={1000}
                height={800}
                className="mx-auto h-full w-full max-w-4xl rounded-lg hidden lg:block"
              />
              <Image
                src={three_UM}
                alt='hero-image'
                width={770}
                height={310}
                className="mx-auto h-full w-full rounded-lg lg:hidden"
              />
              {/* <img
              alt="product-stack"
              width="770"
              height="310"
              decoding="async"
              data-nimg="1"
              className="mx-auto h-full w-full rounded-lg lg:hidden"
              srcSet=""
              src=""
              style={{ color: "transparent" }}
            /> */}
            </div>

          </div>
        </section>
      </div>


      <div className='relative'>
        {/* Second section */}
        <section
          data-testid="heading-section-PdI721gFTOG_V3UBemfINg"
          id="heading-complete-developer-platform"
          className="relative flex flex-col gap-14 overflow-hidden px-6 xl:px-0 pt-12 md:pt-16 lg:pt-24 bg-gradient-to-b from-white-950 to-transparent"
        >
          <div className="relative z-10 flex flex-col">
            <div className="mx-auto flex max-w-xl flex-col items-center text-gray-950 gap-4 py-8">
              <h2
                className="font-heading-size-450 text-center font-extrabold text-3xl md:text-4xl lg:text-5xl"
                data-testid="title-heading-section"
              >
                <span className="block">The First </span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Intelligent Ecosystem
                </span>
              </h2>
            </div>
          </div>
        </section>

        <section
          id="home-alchemy-supernode"
          className="px-6 py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50"
        >
          <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                {/* Placeholder for supernode icon - replace with actual icon */}
                {/* <div className="w-12 h-12 bg-blue-500 rounded-full"></div> */}
                <h2 className="text-4xl font-bold">SuperDOA</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-xl">
                Meet the infrastructure powering our suite of applications. Read, write, manage, integrate, amd interact with the infrastructure exactly as you want

              </p>
              {/* <div className="flex flex-row gap-4">
                <a
                  href="https://dashboard.alchemy.com/signup/?a="
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Get your API key
                </a>
                <a
                  href="https://docs.alchemy.com/reference/api-overview"
                  className="px-6 py-3 text-blue-500 font-semibold flex items-center gap-2 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  View docs
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div> */}
            </div>
            <div className="lg:w-1/2">
              {/* Placeholder for supernode diagram - replace with actual image */}


              <div data-testid="section-component-SGmvNDmrSti5E_k0k7s_yg"
                className="m-auto [&amp;>img]:max-h-[700px] [&amp;>img]:max-w-[700px] [&amp;>img]:object-contain lg:order-2">
                <Image
                  src={three_UM_DOA}
                  alt='company logo'
                  width={500}
                  height={500}
                  className='z-30 h-fit w-fullr'
                />

              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Intelligent Solutions for Every Use Case</h2>
            <p className="text-xl text-gray-700">
              Explore our powerful tools and APIs designed to seamlessly integrate AI, blockchain, and quantum technologies.
            </p>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiCards.map((card, index) => (
                <DataCard key={index} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Powering web3 growth</h2>

            <div ref={sliderRef} className="flex overflow-hidden snap-x snap-mandatory">
              {useCases.map((useCase, index) => (
                <UseCaseCard
                  key={index}
                  {...useCase}
                />
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={handlePrevSlide}
                className={`block ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Previous slide"
                disabled={currentSlide === 0}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" stroke="currentColor" />
                  <path d="M22 26L16 20L22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                onClick={handleNextSlide}
                className={`block ${currentSlide === useCases.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Next slide"
                disabled={currentSlide === useCases.length - 1}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" stroke="currentColor" />
                  <path d="M18 14L24 20L18 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>



        <section className="py-12 md:py-24 px-6 md:px-28 lg:px-52">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-bold text-gray-700 mb-5">3UM SDK</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
              Comprehensive Intelligent Ecosystem
            </h2>
          </div>

          <div className="mb-8">
            <div className="hidden md:flex justify-center overflow-x-auto pb-2 mb-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`whitespace-nowrap px-4 py-2 font-medium text-lg ${activeTab === index
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="md:hidden flex justify-between items-center mb-4">
              <span className="font-medium text-lg">{tabs[activeTab].name}</span>
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevTab}
                  className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100"
                >
                  ←
                </button>
                <button
                  onClick={handleNextTab}
                  className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* bg purple removed here*/}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-8"
            >
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
                    <h3 className="font-bold text-xl">{tabs[activeTab].name}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-lg">{tabs[activeTab].content}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">

                <Image
                  src={tabs[activeTab].img}
                  alt='company logo'
                  width={300}
                  height={300}
                  className='z-30 h-fit w-fullr'
                />
                {/* <div className="bg-gray-200 rounded-lg h-full flex items-center justify-center">
                  <p className="text-gray-500 text-lg">Image Placeholder</p>
                </div> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>



        <section id="conversion-panel-center-blockchain-magic-home" data-testid="conversion-panel-section" className="relative flex flex-col items-center gap-14 overflow-hidden px-6 py-12 md:px-28 md:py-16 lg:flex-row lg:py-24 xl:px-0 bg-gradient-to-r from-black to-blue-900">
      <div className="mx-auto flex w-full max-w-4xl items-center gap-8 flex-col">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex max-w-xl flex-col items-center gap-4  text-center">
            <h2 data-testid="title-conversion-panel-section" className="text-white text-6xl font-extrabold">
              <span className="">Build blockchain magic</span>
            </h2>
            <div data-testid="description-conversion-panel-section" className="text-white text-2xl md:text-3xl lg:text-4xl">
              <p></p>
            </div>
          </div>
          <a data-testid="navigation-link" className="w-full sm:w-fit" href="https://dashboard.alchemy.com/signup/?a=">
            <div data-testid="cta-conversion-panel-section" className="group relative h-full rounded-lg transition-all focus:shadow-purple w-full sm:w-fit">
              <span className="flex h-full flex-row items-center justify-center gap-2 rounded-lg transition-all bg-gray-100 text-gray-700 hover:text-gray-500 active:bg-gray-50 active:bg-gradient-to-br active:from-gradient-vibrant-blue-100 active:to-gradient-vibrant-blue-200 active:bg-clip-text active:text-transparent active:shadow-gray-lg text-lg lg:text-xl px-4 py-3 lg:px-3.5 lg:py-3">Get your API key</span>
            </div>
          </a>
        </div>
      </div>
    </section>



      </div>

    </>

  );
}
