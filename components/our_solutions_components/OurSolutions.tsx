import React from 'react';
import Image, {ImageProps} from 'next/image';
import solution1Img from '@/public/assets/3D/ProductLogos/home_6390147.png';
import solution2Img from '@/public/assets/3D/ProductLogos/target_10058264.png';
import solution3Img from '@/public/assets/3D/ProductLogos/chain_14795155.png';

interface Solution {
  title: string;
  description: string;
  image: ImageProps['src'];
}

const solutions: Solution[] = [
  {
    title: "Innovative Real Estate Investments",
    description: "Unlock the potential of fractional real estate investments with our proprietary 3MX token.",
    image: solution1Img,
  },
  {
    title: "Comprehensive Property Management",
    description: "Seamlessly manage your properties with our state-of-the-art platform, ensuring maximum efficiency and profitability.",
    image: solution2Img,
  },
  {
    title: "Secure Blockchain Transactions",
    description: "Experience the security and transparency of blockchain transactions, designed to protect your investments.",
    image: solution3Img,
  },
];

const OurSolutions: React.FC = () => {
  return (
    <section id="our-solutions" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Solutions</h2>
        <div className="flex flex-wrap justify-center">
          {solutions.map((solution, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
