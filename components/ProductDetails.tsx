'use client';

import React from 'react';

interface ProductDetailsProps {
  productName: string;
}

interface Feature {
  title: string;
  description: string;
}

interface FeatureCard {
  icon: string;
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
    subtitle: 'Supercharge your Microsoft security solutions with Armor MDR',
    description: "Armor's specialized intelligent security analytics integrated within Microsoft's security solutions help your organization adapt quickly to fight threats. As the nature of attacks evolve, our expert cybersecurity professionals pivot to block attacks.",
    featureCards: [
      {
        icon: 'platform',
        title: 'Effective Platform Management and Configurations',
        features: [
          {
            title: 'Continuous platform management and best practice recommendations',
            description: 'Ensures optimal usage of the products and its rich feature sets',
          },
          {
            title: 'Automation workflows (SOAR)',
            description: 'Enrich and bridge workflows across the digital and security ecosystem (within and between Microsoft and third-party vendors)',
          },
          {
            title: 'DevOps deployment approach',
            description: 'Enables scalable and rapid security configuration management',
          },
        ],
      },
      {
        icon: 'analytics',
        title: 'Holistic Security Analytics and ML/AI-Powered Detections',
        features: [
          {
            title: 'Armor rule library and custom rule development',
            description: 'Helps reduce noise, by creating meaningful incidents and identify broader attack campaigns',
          },
          {
            title: 'Usage and tuning of ML/AI-powered detections',
            description: 'Identify complex multi-stage attacks, tuned appropriately for the models to operate better',
          },
          {
            title: 'Threat hunting',
            description: 'Proactively identify evasive and sophisticated threats',
          },
        ],
      },
      {
        icon: 'support',
        title: '24x7 Armor SOC Expertise and Response Team',
        features: [
          {
            title: 'Global view of threats and deep security expertise',
            description: 'The Armor SOC provides global coverage spanning across more than 40 countries and various industry verticals, giving our team a deep understanding of global threat trends and adversarial techniques.',
          },
          {
            title: 'Incident Response and forensics capabilities',
            description: 'Our diligence ensures timely and appropriate containment and mitigation of threats to drastically limit the impact of the attack.',
          },
        ],
      },
      {
        icon: 'lock',
        title: 'No MDR Vendor Lock-In',
        features: [
          {
            title: 'Ownership of your data and configurations',
            description: 'All valuable historical data, tuning configurations, and artifacts like playbooks and automation assets developed over the course of our initial engagement term remain yours to keep. An active subscription provides you access to Armor support and updates, but we do not withhold any of your data and configurations.',
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
              <h1 className="text-3xl font-bold mb-4">{product.description}</h1>
              <p className="mb-4">You won't find a combination more powerful than Microsoft's suite of tools combined with the expertise of Armor.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {product.featureCards.map((card, index) => (
                <FeatureCard key={index} {...card} />
              ))}
            </div>

            <MicrosoftExpertise />
            <MaximizeDetection />
            <ReadyToSee />
            <RelatedResources />
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

const FeatureCard: React.FC<FeatureCard> = ({ icon, title, features }) => {
  return (
    <div className="p-6 relative overflow-hidden border border-gray-200 rounded-lg transition-shadow duration-300 hover:shadow-lg">
      <div className="absolute top-0 left-0 right-0 h-1 bg-3UM-color"></div>
      <div className="flex items-center mb-4">
        <IconPlaceholder icon={icon} />
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

const IconPlaceholder: React.FC<{ icon: string }> = ({ icon }) => (
  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
    <span className="text-xs">{icon}</span>
  </div>
);

const MicrosoftExpertise: React.FC = () => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Deep Microsoft expertise and partnership</h2>
    <ul className="grid md:grid-cols-2 gap-4 mb-6">
      <li>• Microsoft Solution Partner - Security</li>
      <li>• Advanced Specialization – Threat Protection, Cloud Security</li>
      <li>• Microsoft Sentinel Experts</li>
      <li>• Microsoft Security Solutions partner</li>
      <li>• Microsoft Intelligent Security Association (MISA) member</li>
    </ul>
    {/* Add Microsoft partnership logos here */}
  </div>
);

const MaximizeDetection: React.FC = () => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Maximize Detection During Attack Stages</h2>
    <p className="mb-4">Comprehensive threat detection and response (TDR) across the cyber kill chain:</p>
    <ul className="grid md:grid-cols-2 gap-4">
      <li>• Microsoft Defender for Endpoint</li>
      <li>• Microsoft Defender for Cloud Apps</li>
      <li>• Microsoft Defender for Office 365</li>
      <li>• Microsoft Sentinel</li>
      <li>• Microsoft Defender for Identity</li>
    </ul>
  </div>
);

const ReadyToSee: React.FC = () => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Ready to see what Armor can do for you?</h2>
    <p className="mb-6">Our Microsoft experienced cybersecurity and compliance experts are ready to understand your needs and walk you through our strategy and approach.</p>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">Request a Demo</button>
  </div>
);

const RelatedResources: React.FC = () => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="/path-to-image.jpg" alt="Resource" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold mb-2">Economic Impact Report: XDR+SOC</h3>
          <p className="text-sm mb-4">Read the potential return on investment (ROI) companies may realize when...</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>
      {/* Add more resource cards as needed */}
    </div>
    <div className="text-center mt-8">
      <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300">View all resources</button>
    </div>
  </div>
);

export default ProductDetails;
