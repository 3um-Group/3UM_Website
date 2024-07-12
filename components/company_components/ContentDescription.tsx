'use client';

import React from 'react';

const ContentDescription: React.FC<{ description: string }> = ({ description }) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-8 Main-Content-Description">
      <div className="Content-Description w-full">
        <p className="text-lg mb-4 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ContentDescription;
