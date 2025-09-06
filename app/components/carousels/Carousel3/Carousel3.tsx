// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "./Carousel3.css";

// import image1 from "./1.jpg";
// import image2 from "./2.jpg";
// import image3 from "./3.jpg";
// import image4 from "./4.jpg";
// import image5 from "./5.jpg";
// import { useEffect, useState } from "react";

// const slides = [
//   {
//     name: "India",
//     src: image1,
//   },
//   {
//     name: "Japan",
//     src: image2,
//   },
//   {
//     name: "Scotland",
//     src: image3,
//   },
//   {
//     name: "Norway",
//     src: image4,
//   },
//   {
//     name: "France",
//     src: image5,
//   },
// ];

// export const Carousel3 = () => {
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const updateScale = () => {
//       const frame = document.querySelector(".story-frame") as HTMLElement;
//       if (!frame) return;

//       const frameWidth = 400; // Desired story width
//       const frameHeight = 900; // Desired story height (9:16)

//       const scaleX = window.innerWidth / frameWidth;
//       const scaleY = window.innerHeight / frameHeight;
//       const scale = Math.min(scaleX, scaleY); // Prevent overscaling

//       setScale(scale);
//     };

//     updateScale();
//     window.addEventListener("resize", updateScale);
//     return () => window.removeEventListener("resize", updateScale);
//   }, []);
//   return (
//     <section className="page carousel-3-page">
//       <div className="carousel-3-container">
//         <div
//           className="story-frame"
//           style={{
//             width: "400px",
//             height: "800px",
//             transform: `scale(${scale})`,
//             transformOrigin: "center",
//             transition: "transform 0.2s ease",
//           }}
//         >
//           <Swiper
//             grabCursor
//             centeredSlides
//             slidesPerView={1}
//             spaceBetween={0}
//             speed={600}
//             effect="coverflow"
//             loop
//             mousewheel
//             pagination={{ clickable: true }}
//             coverflowEffect={{
//               rotate: 40,
//               stretch: -40,
//               depth: 150,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             modules={[EffectCoverflow, Pagination]}
//           >
//             {slides.map((slide) => (
//               <SwiperSlide
//                 key={slide.name}
//                 style={{
//                   backgroundImage: `url(${slide.src.src})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: "20px",
//                   overflow: "hidden",
//                 }}
//               />
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Carousel3.css";

import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";
import { useEffect, useState } from "react";

const slides = [
  {
    name: "India",
    src: image1,
  },
  {
    name: "Japan",
    src: image2,
  },
  {
    name: "Scotland",
    src: image3,
  },
  {
    name: "Norway",
    src: image4,
  },
  {
    name: "France",
    src: image5,
  },
];

export const Carousel3 = () => {
  const [scale, setScale] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1600
  );

  // Adjustable parameters
  const baseSlideWidth = 360; // Adjust this to change slide width (in pixels)
  const baseSlideHeight = 600; // Slide height
  const frameHeight = 850; // Increased to show shadows/reflection

  useEffect(() => {
    const updateScale = () => {
      const frame = document.querySelector(".story-frame") as HTMLElement;
      if (!frame) return;

      const frameWidth = baseSlideWidth * 3; // Width for 3 slides
      const scaleX = window.innerWidth / frameWidth;
      const scaleY = window.innerHeight / frameHeight;
      const scale = Math.min(scaleX, scaleY); // Prevent overscaling

      setScale(scale);
      setViewportWidth(window.innerWidth);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Scale coverflowEffect parameters based on viewport width
  const referenceViewportWidth = 1600;
  const scaleFactor = viewportWidth / referenceViewportWidth;
  const scaledStretch = ((-40 * baseSlideWidth) / 400) * scaleFactor; // Scale relative to baseSlideWidth
  const scaledDepth = ((150 * baseSlideWidth) / 400) * scaleFactor; // Scale relative to baseSlideWidth

  return (
    <section className="page carousel-3-page">
      <div className="carousel-3-container">
        <div
          className="story-frame"
          style={{
            width: `${baseSlideWidth * 3}px`, // 3 slides
            height: `${frameHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: "center",
            transition: "transform 0.2s ease",
          }}
        >
          <Swiper
            grabCursor
            centeredSlides
            slidesPerView={3}
            speed={600}
            effect="coverflow"
            loop
            loopAdditionalSlides={1}
            mousewheel
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 40,
              stretch: scaledStretch,
              depth: scaledDepth,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.name}
                style={{
                  backgroundImage: `url(${slide.src.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "20px",
                  overflow: "hidden",
                  width: `${baseSlideWidth}px`,
                  height: `${baseSlideHeight}px`,
                }}
              />
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
