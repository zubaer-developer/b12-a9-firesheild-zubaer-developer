import React, { useEffect, useState } from "react";
import superMario from "../assets/Super Mario.jpg";
import chese from "../assets/chese.jpg";
import ludo from "../assets/ludo.jpg";
import tableTenis from "../assets/table-tenis.jpg";

const Banner = () => {
  const images = [superMario, chese, ludo, tableTenis];
  const [current, setCurrent] = useState(0);

  // Auto slide forward continuously every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="max-w-7xl mx-auto mt-10"
    >
      <div className="w-full h-[400px] rounded-xl overflow-hidden relative mt-10 md:mt-0">
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full shrink-0 h-[400px] object-cover"
            />
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-125" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
