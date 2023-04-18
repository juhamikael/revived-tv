import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "../styles/carousel.css";
interface ICarouselProps {
  images: string[];
}

const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white focus:outline-none cursor-pointer text-xl py-2 px-4 rounded-md"
        onClick={handlePrevClick}
      >
        <Icon icon="carbon:chevron-left" />
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-10 z-0"
          }`}
        >
          <img
            src={image}
            alt={`Carousel image ${index}`}
            className="max-w-full max-h-full object-cover"
          />
        </div>
      ))}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white focus:outline-none cursor-pointer text-xl py-2 px-4 rounded-md"
        onClick={handleNextClick}
      >
        <Icon icon="carbon:chevron-right" />
      </button>
    </div>
  );
};

export default Carousel;
