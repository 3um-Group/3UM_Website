// components/QuarterlyResults.tsx

import React from 'react';

interface QuarterlyResult {
  title: string;
  date: string;
  link: string;
}

const quarterlyResults: QuarterlyResult[] = [
  { title: 'Q1 2023 Financial Results', date: 'May 24, 2023', link: '#' },
  { title: 'Q4 2022 Financial Results', date: 'February 15, 2023', link: '#' },
  // Add more quarterly results as needed
];

const QuarterlyResults: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Quarterly Results</h2>
        <ul className="space-y-4">
          {quarterlyResults.map((result, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="text-xl font-semibold">{result.title}</h3>
                <p className="text-gray-600">{result.date}</p>
              </div>
              <a href={result.link} className="text-blue-500 hover:underline">Read More</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QuarterlyResults;
