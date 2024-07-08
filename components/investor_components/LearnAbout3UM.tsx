// components/LearnAboutHashicorp.tsx

import React from 'react';

const LearnAboutHashicorp: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-blue-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Learn About 3UM</h2>
        <div className="space-y-8">
          <p className="text-lg">
            3UM is a leader in web3 tools such as fractional asset management and growth, AI powered DAO, and Identity management services
          </p>
          <a href="https://www.3umgroup.com" className="text-blue-500 hover:underline text-lg font-semibold">
            Visit 3UM's Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearnAboutHashicorp;
