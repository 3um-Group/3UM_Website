import Carousels from '@/components/home_components/Carousels';
import Describe from '@/components/home_components/Describe';
import Product from '@/components/home_components/Product';

import stone from '@/public/assets/stone.png'
// import three_UM from '@/public/assets/IMG_0701 1.png';
import three_UM from '@/public/assets/3UM-hero.jpg';
import three_UM_DOA from '@/public/assets/3UM-superDOA.png';

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


export default function Home() {

  const apiCards = [
    {
      icon: '🔒',
      title: 'Embedded Accounts',
      description: 'Make wallets invisible. Simple, non-custodial accounts to onboard users and transact with web2 UX.',
    },
    {
      icon: '🔄',
      title: 'Account Abstraction Infrastructure',
      description: 'ERC-4337 Bundler APIs. Gas Manager APIs. Account Abstraction SDK. Up to 35x cheaper than alternatives.',
    },
    {
      icon: '📄',
      title: 'Account Contracts',
      description: 'Optimized ERC-4337 and ERC-6900 smart accounts on Ethereum and L2s.',
    },
    {
      icon: '💱',
      title: 'Transact',
      description: '7.9x faster, 100% success rate. Transaction simulation, frontrunning protection, and real-time notifications.',
    },
    {
      icon: '🔮',
      title: 'Transaction Simulation',
      description: 'Transact with confidence. Preview how transactions will behave onchain, and keep your assets safe.',
    },
  ];
  return (
    <>
      <div className='relative'>

        <div className="pt-16 lg:pt-20"></div>
        <section className="overflow-hidden p-6 xl:pt-6 relative">
          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-8">
            {/* Left side content */}
            <div className="max-w-[670px] relative flex w-full flex-col gap-6 lg:w-1/2">
              <h1 className="text-5xl font-extrabold text-gray-900">
                The most reliable way to build web3 apps
              </h1>
              <p className="text-xl text-gray-700">
                Powerful APIs, SDKs, and tools to build and scale your web3 app with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Get your API key
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
                Meet the web3 engine powering our suite of APIs. Read and write to the blockchain exactly as you want.
              </p>
              <div className="flex flex-row gap-4">
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
              </div>
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
            <h2 className="text-3xl font-bold text-center mb-12">Powerful write APIs for every use case</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiCards.map((card, index) => (
                <DataCard key={index} {...card} />
              ))}
            </div>
          </div>
        </section>

      </div>

    </>

  );
}
