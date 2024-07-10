import React, { useRef, useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useDrag } from '@use-gesture/react';
import three_UM_DOA from '@/public/assets/3UM-superDOA.png';
import bellIcon from '@/public/assets/bell.png';
import House1 from "@/public/assets/House1.jpeg"
import House2 from "@/public/assets/House2.jpeg"
import House3 from "@/public/assets/House3.jpeg"

/**
 * GitHub Story Point:
 * Gherkin Language:
 *
 * Scenario:
 */

interface SliderItem {
  images: (string | StaticImageData)[];
  title: string;
  description: string;
  tags: string[];
  notificationLink: string;
}

//TODO[]: ADD LOGO for Slider Item
const sliderItems: SliderItem[] = [
  {
    images: [House1, three_UM_DOA],
    title: 'Title 1',
    description: 'Description 1',
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    notificationLink: '/home',
  },
  {
    images: [House2, three_UM_DOA],
    title: 'Celebrity Home',
    description: 'Appraised by legendary Makoto',
    tags: ['Luxe', 'Profitable', 'Staked', 'Hot 🔥'],
    notificationLink: '/home',
  },
  {
    images: [House3, three_UM_DOA],
    title: 'Cottage by David',
    description: 'Countryside Livin\'',
    tags: ['Fave', 'Most Visited', 'Airbnb', 'Hot Tub'],
    notificationLink: '/home',
  },
  // Add more items as needed
];

const InfiniteSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const handleCardClick = (index: number) => {
    setCurrentCard(index);
    setCurrentImageIndex(0);
    setUserInteracted(true);
    resetTimer();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!userInteracted) {
        setCurrentCard((prevCard) => (prevCard + 1) % sliderItems.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [userInteracted]);

  useEffect(() => {
    if (sliderRef.current) {
      const selectedCard = sliderRef.current.children[currentCard] as HTMLDivElement;
      selectedCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentCard]);

  const bind = useDrag((state) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= state.movement[0];
      if (state.last) {
        const nearestIndex = Math.round(sliderRef.current.scrollLeft / sliderRef.current.offsetWidth);
        setCurrentCard(nearestIndex);
        setUserInteracted(true);
        resetTimer();
      }
    }
  });

  const handleImageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % sliderItems[currentCard].images.length
      );
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? sliderItems[currentCard].images.length - 1 : prevIndex - 1
      );
    }
    resetTimer();
  };

  let timerId: NodeJS.Timeout;
  const resetTimer = () => {
    clearInterval(timerId);
    timerId = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % sliderItems.length);
    }, 5000);
  };

  return (
    <div className="slider-container overflow-hidden relative" {...bind()}>
      <div className="slider flex" ref={sliderRef} aria-live="polite">
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className={`slider-item flex-shrink-0 relative m-4 p-4 rounded-lg transition-all duration-300 ease-in-out ${
              currentCard === index ? 'w-[100%] scale-[1.15]' : 'w-[50%]'
            } ${currentCard !== index ? 'hover:scale-[1.05]' : ''}`}
            style={{ backgroundImage: `url(${typeof item.images[currentImageIndex] === 'string' ? item.images[currentImageIndex] : ''})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={() => handleCardClick(index)}
            tabIndex={0}
            role="button"
            aria-label={`Slide ${index + 1}: ${item.title}`}
          >
            <div className="relative w-full h-full">
              {item.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    currentImageIndex === imgIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {typeof image === 'string' ? (
                    <img
                      src={image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <Image
                      src={image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  )}
                </div>
              ))}
              <div className="absolute bottom-20 left-4 bg-gray-700 bg-opacity-50 p-2 rounded animate-fadeInUp">
                <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                <p className="text-white">{item.description}</p>
              </div>
              <div className="absolute bottom-4 left-4 flex space-x-2 animate-fadeInUp">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="bg-blue-500 text-white px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 animate-fadeInUp">
                <a href={item.notificationLink} className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center hover:scale-115 transition-transform duration-200">
                  <Image src={bellIcon} alt="Notification Bell" width={24} height={24} />
                </a>
              </div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 animate-fadeInUp">
                {item.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    className={`w-2 h-2 rounded-full ${
                      currentImageIndex === imgIndex ? 'bg-white' : 'bg-gray-400'
                    }`}
                    onClick={() => setCurrentImageIndex(imgIndex)}
                  />
                ))}
              </div>
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full animate-fadeInUp"
                onClick={() => handleImageChange('prev')}
                aria-label="Previous Image"
              >
                ‹
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full animate-fadeInUp"
                onClick={() => handleImageChange('next')}
                aria-label="Next Image"
              >
                ›
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
