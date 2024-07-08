'use client';

import React, { useEffect, useRef } from 'react';
import QuantumCube from '@/components/3DModel/QuantumCube';
import ClientOnly from '@/components/3DModel/ClientOnly';

interface Container3DProps {
  zIndex?: number;
  width?: string;
  height?: string;
  placement?: 'left' | 'center' | 'right';
  direction?: 'up' | 'down' | 'left' | 'right';
  animationType?: 'appear' | 'grow';
}

const Container3D: React.FC<Container3DProps> = ({
  zIndex = 1,
  width = '100%',
  height = '500px',
  placement = 'center',
  direction = 'right',
  animationType = 'appear',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(100vh)';
      case 'down':
        return 'translateY(-100vh)';
      case 'left':
        return 'translateX(100vw)';
      case 'right':
        return 'translateX(-100vw)';
      default:
        return 'translateX(0)';
    }
  };

  const getFinalTransform = () => {
    return 'translateX(0) translateY(0)';
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.transform = getInitialTransform();
      container.style.transition = 'transform 1.4s ease-in-out, opacity 1.4s ease-in-out';
      container.style.opacity = '0';

      container.getBoundingClientRect(); // Force layout reflow

      container.style.transform = getFinalTransform();
      container.style.opacity = '1';
    }
  }, []);

  return (
    <div
      className={`main-3D-Container relative flex items-center justify-${placement}`}
      style={{ position: 'absolute', zIndex, width, height }}
      ref={containerRef}
    >
      <div className="3D-Container flex justify-center">
        <ClientOnly>
          <QuantumCube zIndex={zIndex} />
        </ClientOnly>
      </div>
    </div>
  );
};

export default Container3D;
