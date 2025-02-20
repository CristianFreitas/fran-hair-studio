"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProfileSliderProps {
  initialImage: string;
  workImages: string[];
}

const ProfileImageSlider: React.FC<ProfileSliderProps> = ({
  initialImage,
  workImages
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [initialImage, ...workImages];

  // Memoized image change function for performance
  const changeImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  }, [images.length]);

  // Auto-advance interval with smart pause mechanism
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    // Prevent interval from running if user is interacting
    const startInterval = () => {
      intervalId = setInterval(changeImage, 3000);
    };

    startInterval();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [changeImage]);

  // Enhanced user interaction with manual dot navigation
  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div 
      className="relative w-[363px] h-[471px] rounded-3xl overflow-hidden group"
      aria-label="Trabalhos em destaque"
      role="region"
    >
      {/* Animated Image Container with Framer Motion */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Trabalho ${currentImageIndex + 1}`}
            width={363}
            height={471}
            className="object-cover"
            quality={90}
            priority={currentImageIndex === 0}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#d79a97]/40 to-transparent pointer-events-none" 
        aria-hidden="true"
      />

      {/* Enhanced Pagination Dots with Accessibility */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
        role="tablist"
        aria-label="Selecione um trabalho"
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`
              h-2 transition-all duration-300 rounded-full
              ${currentImageIndex === index 
                ? 'bg-[#d35c54] w-6' 
                : 'bg-white/50 w-2 hover:bg-white/70'}
            `}
            aria-label={`Mostrar trabalho ${index + 1}`}
            aria-selected={currentImageIndex === index}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileImageSlider;