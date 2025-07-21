import React, { useState, useEffect, useCallback } from "react";
import {
  CarouselContainer,
  CarouselWrapper,
  CarouselSlide,
  NavButton,
  DotsContainer,
  Dot,
} from "./styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ images = [], autoplay = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (autoplay) {
      const slideInterval = setInterval(goToNext, interval);
      return () => clearInterval(slideInterval);
    }
  }, [autoplay, interval, goToNext]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <CarouselContainer>
      <NavButton onClick={goToPrevious} className="left">
        <FaChevronLeft />
      </NavButton>
      <CarouselWrapper>
        <div
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
            display: "flex",
            height: "100%",
          }}
        >
          {images.map((image, index) => (
            <CarouselSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </CarouselSlide>
          ))}
        </div>
      </CarouselWrapper>
      <NavButton onClick={goToNext} className="right">
        <FaChevronRight />
      </NavButton>
      <DotsContainer>
        {images.map((_, slideIndex) => (
          <Dot
            key={slideIndex}
            isActive={currentIndex === slideIndex}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
