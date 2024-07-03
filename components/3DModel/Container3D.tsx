'use client';

import React, { useState, useEffect, useRef } from 'react';
import QuantumCube from '@/components/3DModel/QuantumCube';
import ClientOnly from '@/components/3DModel/ClientOnly';

interface Container3DProps {
  zIndex?: number;
  width?: string;
  height?: string;
  placement?: 'left' | 'center' | 'right';
}

const Container3D: React.FC<Container3DProps> = ({
  zIndex = 1,
  width = '100%',
  height = '500px',
  placement = 'center',
}) => {
  const [translateX, setTranslateX] = useState(0);
  const [isAbsolute, setIsAbsolute] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (containerRef.current?.contains(event.target as Node)) {
        if (event.deltaY > 0) {
          setTranslateX((prev) => Math.min(prev + 120, 2000));
        } else {
          setTranslateX((prev) => Math.max(prev - 120, 0));
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (translateX >= 2000) {
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }, [translateX]);

  useEffect(() => {
    const handleScrollReset = () => {
      if (window.scrollY === 0) {
        setTranslateX(0);
      }

      const containerHeight = containerRef.current?.scrollHeight || 0;
      if (window.scrollY + window.innerHeight >= containerHeight - 100) {
        setIsAbsolute(false);
      } else {
        setIsAbsolute(true);
      }
    };

    window.addEventListener('scroll', handleScrollReset);

    return () => {
      window.removeEventListener('scroll', handleScrollReset);
    };
  }, []);

  return (
    <div
      className={`main-3D-Container relative flex items-center justify-${placement}`}
      style={{ position: isAbsolute ? 'absolute' : 'relative', zIndex, width, height }}
      ref={containerRef}
    >
      <div
        className="3D-Container flex justify-center"
        style={{
          transform: `translateX(-${translateX / 3}px)`,
          transition: 'transform 0.8s ease-in-out',
        }}
      >
        <ClientOnly>
          <QuantumCube zIndex={zIndex} />
        </ClientOnly>
      </div>
    </div>
  );
};

export default Container3D;
