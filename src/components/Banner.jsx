import React from "react";
import superMario from "../assets/Super Mario.jpg";
import chese from "../assets/chese.jpg";
import ludo from "../assets/ludo.jpg";
import tableTenis from "../assets/table-tenis.jpg";

const Banner = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="max-w-7xl mx-auto"
    >
      <div className="md:w-[100%] relative mt-10 md:mt-0">
        <div className="carousel w-full h-[400px] rounded-xl overflow-hidden">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={superMario}
              className="w-full h-full object-cover"
              alt="Educational Toy"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide6" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={chese}
              className="w-full h-full object-cover"
              alt="Fun Toy"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={ludo}
              className="w-full h-full object-cover"
              alt="Creative Toy"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={tableTenis}
              className="w-full h-full object-cover"
              alt="Creative Toy"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
