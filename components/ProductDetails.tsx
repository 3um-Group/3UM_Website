'use client';

import React from 'react';
import { FaGlobe, FaLock, FaTools, FaLightbulb } from 'react-icons/fa';

interface ProductDetailsProps {
  productName: string;
}

interface Feature {
  title: string;
  description: string;
}

interface FeatureCard {
  icon: React.ElementType;
  title: string;
  features: Feature[];
}

interface Product {
  title: string;
  subtitle: string;
  description: string;
  featureCards: FeatureCard[];
}

interface ProductData {
  [key: string]: Product;
}

const productData: ProductData = {
  genesis: {
    title: '3UM Genesis',
    subtitle: 'Empower your next-gen application development and deployment with 3UM Genesis',
    description: "3UM Genesis integrates AI, blockchain, collective intelligence, and quantum computing to maximize their combined potential, overcoming the limitations of a fragmented approach. As technology evolves, our expert team continuously adapts to harness these advancements, ensuring optimal and cohesive solutions.",
    featureCards: [
      {
        icon: FaGlobe,
        title: 'Comprehensive Integration of Cutting-Edge Technologies',
        features: [
          {
            title: 'AI, Blockchain, Quantum Computing, and Collective Intelligence Integration',
            description: 'Integrates AI, blockchain, quantum computing, and collective intelligence into a unified framework.',
          },
          {
            title: 'Seamless Interoperation',
            description: 'Ensures these technologies work together seamlessly to create global value and drive innovation.',
          },
          {
            title: 'Overcoming Fragmentation',
            description: 'Addresses the fragmented approach by establishing a universal middleware for cohesive technology utilization.',
          },
        ],
      },
      {
        icon: FaLock,
        title: 'Robust and Scalable Decentralized Network',
        features: [
          {
            title: 'Decentralized Physical Infrastructure',
            description: 'A global network of nodes and data centers owned and operated by the community, ensuring no single entity control.',
          },
          {
            title: 'Peer-to-Peer Communication',
            description: 'Enables direct, secure, and efficient communication between nodes, reducing latency and improving privacy.',
          },
          {
            title: 'Resilient and Secure',
            description: 'Reduces risks of censorship, downtime, and centralization-related issues, ensuring a reliable and stable network.',
          },
        ],
      },
      {
        icon: FaTools,
        title: 'Empowering Developers of All Skill Levels',
        features: [
          {
            title: 'No-Code Development Platform',
            description: 'Allows users to create and deploy decentralized applications without writing a single line of code.',
          },
          {
            title: 'Low-Code Development Environment',
            description: 'Combines visual design tools with simple scripting languages for customization and extension.',
          },
          {
            title: 'Full-Code Execution Capabilities',
            description: 'Enables experienced developers to write and deploy custom smart contracts using popular programming languages.',
          },
        ],
      },
      {
        icon: FaLightbulb,
        title: 'Optimized for High Performance and Low Cost',
        features: [
          {
            title: 'Advanced Sharding Techniques',
            description: 'Uses sharding to handle high volumes of transactions and computations efficiently.',
          },
          {
            title: 'Off-Chain Computation',
            description: 'Reduces on-chain load and improves performance without compromising security.',
          },
          {
            title: 'Efficient Consensus Mechanisms',
            description: 'Ensures scalable and cost-effective operations, enabling large-scale use cases without excessive fees or congestion.',
          },
        ],
      },
    ],
  },
  // Add more products here
};

const ProductDetails = ({ productName }: ProductDetailsProps) => {
  const product = productData[productName.toLowerCase()];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header title={product.title} subtitle={product.subtitle} />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-black mb-12">
              <h2 className="text-lg font-semibold mb-4">WHY {product.title.toUpperCase()}</h2>
              <h1 className="text-lg mb-4">{product.description}</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {product.featureCards.map((card, index) => (
                <FeatureCard key={index} {...card} />
              ))}
            </div>

            {/* <MicrosoftExpertise />
            <MaximizeDetection />
            <ReadyToSee />
            <RelatedResources /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-3UM-color text-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-4">{subtitle}</p>
      </div>
    </header>
  );
};

interface HeaderProps {
  title: string;
  subtitle: string;
}

const FeatureCard: React.FC<FeatureCard> = ({ icon: Icon, title, features }) => {
  return (
    <div className="p-6 relative overflow-hidden border border-gray-200 rounded-lg transition-shadow duration-300 hover:shadow-lg">
      <div className="absolute top-0 left-0 right-0 h-1 bg-3UM-color"></div>
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-3UM-color" />
        <h3 className="text-lg font-semibold ml-3">{title}</h3>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-3UM-color mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <p className="font-semibold">{feature.title}</p>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const IconPlaceholder: React.FC<{ icon: React.ElementType }> = ({ icon: Icon }) => (
  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
    <Icon className="text-3UM-color" />
  </div>
);

export default ProductDetails;
