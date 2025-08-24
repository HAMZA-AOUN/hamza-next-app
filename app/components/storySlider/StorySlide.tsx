"use client";
import { useState } from "react";
import "./StorySlide.css";
const StorySlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { color: "bg-red-500", content: "Slide 1" },
    { color: "bg-blue-500", content: "Slide 2" },
    { color: "bg-green-500", content: "Slide 3" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="story-container">
      <div
        className="story-slider"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`story-slide ${slide.color} text-white flex items-center justify-center text-4xl font-bold`}
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
};

export default StorySlide;
