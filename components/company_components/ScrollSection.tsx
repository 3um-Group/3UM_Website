'use client';

import React from 'react';

interface ScrollSectionProps {
  text: string;
  direction?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ text }) => {
  let direction = text == 'right'
                  ? "right"
                  : "left";
  direction !== ("right" || "left")
          ? "center"
          : "left";

  return (
    <div
      className={`scroll-section-${direction} flex items-center justify-${direction} p-1 bg-blue`}
      style={{
        height: '100vh',
        width: '100%',
        background: direction === 'center' ? '#000' : '#fff',
        color: direction === 'center' ? '#fff' : '#000',
        textAlign: direction,
      }}
    >
      <h1 className="text-2xl font-bold">{text}</h1>
    </div>
  );
};

export default ScrollSection;
