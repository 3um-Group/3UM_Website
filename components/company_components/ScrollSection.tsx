'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ScrollSectionProps {
  content: React.ReactNode;
  placement: 'left' | 'center' | 'right';
  width: string;
  height: string;
  appearAnimation: 'fade' | 'scale';
  transitionThreshold: number;
  text?: string;
  imageSrc?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  content,
  placement,
  width,
  height,
  appearAnimation,
  transitionThreshold,
  text,
  imageSrc,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight * transitionThreshold) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [transitionThreshold]);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8 },
      });
    } else {
      controls.start({
        opacity: 0,
        scale: appearAnimation === 'scale' ? 0.5 : 1,
        transition: { duration: 0.8 },
      });
    }
  }, [isVisible, appearAnimation, controls]);

  return (
    <motion.div
      className={`absolute ${placement === 'left' ? 'left-0' : placement === 'center' ? 'left-1/2 transform -translate-x-1/2' : 'right-0'}`}
      style={{ width, height }}
      ref={sectionRef}
      initial={{ opacity: 0, scale: appearAnimation === 'scale' ? 0.5 : 1 }}
      animate={controls}
    >
      {imageSrc && <img src={imageSrc} alt="section" className="w-full h-full object-cover" />}
      {text && <p className="text-lg">{text}</p>}
      {content}
    </motion.div>
  );
};

export default ScrollSection;
