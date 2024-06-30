import Image from 'next/image';
import React from 'react';

import empower from '@/public/assets/empower.png';
import brain from '@/public/assets/brain_image.png';
import road_map from '@/public/assets/road_map.png';
import logo from '@/public/assets/IMG_0701 1.png';

import Form from '@/components/company_components/Form';
import Career from '@/components/company_components/Career';
import Media from '@/components/company_components/Media';

const CompanyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black pb-0">
      <section className="px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center md:col-span-1">
          <h1 className="text-4xl font-bold mb-4">The Company</h1>
          <p className="text-lg mb-4">
            At 3UM, we are revolutionizing the future with our intelligent infrastructure. Our mission is to build groundbreaking businesses across key technologies, AI, blockchain, and quantum computing, providing investors and industry with advanced tools and solutions. We aim to create an intelligent ecosystem that empowers users to connect, learn, and grow, driving sustainable progress and creating new opportunities.
          </p>
          <p className="text-lg">
            We are committed to leveraging the key technology spheres: human-centric AI, blockchain that creates a connected infrastructure, and the next age of quantum computing. From finance and healthcare to smart cities and beyond, our tailored experiences, driven by advanced technology, aim to develop cutting-edge solutions that are secure, scalable, and user-friendly.
          </p>
        </div>
        <div className="flex justify-center md:justify-end md:col-span-1">
        <div className="relative w-full max-w-full h-auto">
          <Image
            src={brain}
            alt="Company Meeting"
            layout="responsive"
            width={75}
            height={75}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-8">
        <h3 className="text-2xl font-bold mb-8">
          3UM revolutionizes industries by integrating AI, <span className="bg-yellow-500 text-black">Blockchain</span>, and quantum computing, empowering innovation and sustainable growth through our intelligent infrastructure and ecosystem.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center md:col-span-1">
            <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect ratio container */}
              <Image
                src={road_map}
                alt="Technology"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h4 className="text-xl font-semibold">Build financial security</h4>
              <p>
                We seek to deliver outstanding performance for institutional and individual investors by stewarding their capital with integrity and conviction.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Build your career</h4>
              <p>
                We offer an environment where exceptional talent can build lasting careers. To work at 3UM means being at the forefront of emerging trends and setting the standards for our industry.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Build strong businesses</h4>
              <p>
                We equip businesses with an extensive range of tools and capabilities they need to grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
