// components/PressReleases.tsx

import React from 'react';

interface PressRelease {
  title: string;
  date: string;
  link: string;
}

const pressReleases: PressRelease[] = [
  { title: '3UM Announces Q1 2023 Results', date: 'May 24, 2023', link: '#' },
  { title: '3UM Launches New Product', date: 'April 15, 2023', link: '#' },
  // Add more press releases as needed
];

const PressReleases: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
        <ul className="space-y-4">
          {pressReleases.map((release, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="text-xl font-semibold">{release.title}</h3>
                <p className="text-gray-600">{release.date}</p>
              </div>
              <a href={release.link} className="text-blue-500 hover:underline">Read More</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PressReleases;
