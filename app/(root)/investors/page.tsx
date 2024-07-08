// pages/investors.tsx

import React from 'react';
import PressReleases from '@/components/investor_components/PressReleases';
import QuarterlyResults from '@/components/investor_components/QuarterlyResults';
import LearnAbout3UM from '@/components/investor_components/LearnAbout3UM';

const InvestorsPage: React.FC = () => {
  return (
    <div>
      <header className="bg-black text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Investor Relations</h1>
      </header>
      <main>
        <PressReleases />
        <QuarterlyResults />
        <LearnAbout3UM />
      </main>
    </div>
  );
};

export default InvestorsPage;
