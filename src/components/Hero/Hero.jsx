// import React from 'react'
// import "../Hero/Hero.css"
// import homeimg from "../../../public/cryptoimg/Tablet.png"
// import { Link } from 'react-router-dom'
// import Threads from "../Threads"

// const Hero = () => {
//   return (
//     <div className='hero__section' style={{ width: '100%',  position: 'relative' }}>
     
       
//       <div className="hero__content">
//         <h1 className='hero_h1'>Grow Your Wealth with <span className='hero_span'>Cryptous</span></h1>
//         <p className='hero__p'>Smart. Secure. Rewarding.</p>
//         <div className="pdiv">
//         <p className='hero_p'>At Cryptous, we make crypto investing simple and profitable. Whether you're new to the world of crypto or a seasoned investor, our platform gives you everything you need to stake, grow, and manage your assets with confidence.</p>
//         </div>
//         <Link to="/signup"><button className='hero_btn'> Start Investing</button></Link>
//         <div className="img-con">
       
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero
// HeroSlider.jsx
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "../Hero/Hero.css"
// import "swiper/css/effect-fade";
// import { EffectFade, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";

// const slides = [
//   {
//     title: "Secure Crypto Investment",
//     subtitle: "Grow your wealth with daily ROI",
//     image: "/bgs.jpg",
//   },
//   {
//     title: "Stake with Confidence",
//     subtitle: "Your assets, your control, your future",
//     image: "/trades.jpg",
//   },
// ];

// export default function HeroSlider() {
//   return (
//     <Swiper
//       modules={[EffectFade, Autoplay]}
//       effect="fade"
//       autoplay={{ delay: 5000 }}
//       loop
//       className="w-full h-screen"
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>

          
//           <div
//             className=" h-screen bg-cover bg-center flex items-center justify-center"
//             style={{  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.78) ,rgba(0, 0, 0, 0.78)), url(${slide.image})` }}
//           >
//             <motion.div
//               initial={{ x: 80, opacity: 0 }}
//               animate={{ x: 40, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.9 }}
//               className="text-white "
//             >
//               <div><div className="smarts">Smart. Secure. Rewarding.</div></div>
//               <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
//               <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
//               <button className=" bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105  ">
//                 Get Started
//               </button>
//             </motion.div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "../Hero/Hero.css";
// import "swiper/css/effect-fade";
// import { EffectFade, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";

// const slides = [
//   {
//     title: "Secure Crypto Investment",
//     subtitle: "Grow your wealth with daily ROI",
//     image: "/bgs.jpg",
//   },
//   {
//     title: "Stake with Confidence",
//     subtitle: "Your assets, your control, your future",
//     image: "/trades.jpg",
//   },
// ];

// export default function HeroSlider() {
//   return (
//     <Swiper
//       modules={[EffectFade, Autoplay]}
//       effect="fade"
//       autoplay={{ delay: 1000 }}
//       loop
//       className="w-full h-screen"
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div
//             className="h-screen bg-cover bg-center flex items-center justify-center"
//             style={{
//               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url(${slide.image})`,
//             }}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{opacity: 0, scale: 0.8, duration: 0.8, delay: 0.3, ease: "easeOut" }}
//               className="text-center text-white max-w-3xl p-4"
//             >
//               <div className="smarts text-yellow-300 text-sm uppercase tracking-widest mb-2">
//                 Smart. Secure. Rewarding.
//               </div>
//               <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
//               <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
//               <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition">
//                 Get Started
//               </button>
//             </motion.div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "../Hero/Hero.css";
// import "swiper/css/effect-fade";
// import { EffectFade, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";

// const slides = [
//   {
//     title: "Secure Crypto Investment",
//     subtitle: "Grow your wealth with daily ROI",
//     image: "/bgs.jpg",
//   },
//   {
//     title: "Stake with Confidence",
//     subtitle: "Your assets, your control, your future",
//     image: "/trades.jpg",
//   },
// ];

// export default function HeroSlider() {
//   return (
//     <Swiper
//       modules={[EffectFade, Autoplay]}
//       effect="fade"
//       autoplay={{ delay: 5000 }}
//       loop
//       className="w-full h-screen"
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div
//             className="h-screen bg-cover bg-center flex items-center justify-center"
//             style={{
//               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url(${slide.image})`,
//             }}
//           >
//             <div className="text-center text-white max-w-3xl p-4">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="smarts text-yellow-300 text-sm uppercase tracking-widest mb-2"
//               >
//                 Smart. Secure. Rewarding.
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="text-4xl md:text-6xl font-bold mb-4"
//               >
//                 {slide.title}
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//                 className="text-lg md:text-xl mb-6"
//               >
//                 {slide.subtitle}
//               </motion.p>

//               <motion.button
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../Hero/Hero.css"; // optional for custom styles
// import {
//   EffectFade,
//   Autoplay,
//   Navigation,
//   Pagination,
// } from "swiper/modules";
// import { motion } from "framer-motion";

// const slides = [
//   {
//     title: "Secure Crypto Investment",
//     subtitle: "Grow your wealth with daily ROI",
//     image: "/bgs.jpg",
//   },
//   {
//     title: "Stake with Confidence",
//     subtitle: "Your assets, your control, your future",
//     image: "/trades.jpg",
//   },
// ];

// export default function HeroSlider() {
//   return (
//     <Swiper
//       modules={[EffectFade, Autoplay, Navigation, Pagination]}
//       effect="fade"
//       autoplay={{ delay: 5000 }}
//       loop
//       navigation
//       pagination={{ clickable: true }}
//       className="w-full h-screen"
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div
//             className="h-screen bg-cover bg-center flex items-center justify-center relative"
//             style={{
//               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url(${slide.image})`,
//             }}
//           >
//             <div className="text-center text-white max-w-3xl p-4 z-10">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="smarts text-yellow-300 text-sm uppercase tracking-widest mb-2"
//               >
//                 Smart. Secure. Rewarding.
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="text-4xl md:text-6xl font-bold mb-4"
//               >
//                 {slide.title}
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//                 className="text-lg md:text-xl mb-6"
//               >
//                 {slide.subtitle}
//               </motion.p>

//               <motion.button
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition"
//               >
//                 Get Started
//               </motion.button>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Hero/Hero.css";
import {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import { motion } from "framer-motion";
import MarketCapChart from "/here.jpg";

const slides = [
  {
    title: "Grow Your Wealth with Cryptous ",
    subtitle: "At Cryptous, we make crypto investing simple and profitable. Whether you're new to the world of crypto or a seasoned investor, our platform gives you everything you need to stake, grow, and manage your assets with confidence.",
    image: "/bgs.jpg",
  },
  {
    title: "Stake with Confidence",
    subtitle: "Your assets, your control, your future",
    image: "/trades.jpg",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleUserInteraction = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <Swiper
      modules={[EffectFade, Autoplay, Navigation, Pagination]}
      effect="fade"
      loop
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => {
        swiper.autoplay.stop(); // disable autoplay initially
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.realIndex); // update index to trigger animation
      }}
      className="w-full h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url(${slide.image})`,
            }}
          >
            <div
              className=" here-content w-full flex flex-col justify-center items-start  text-white p-4 z-10"
              onClick={handleUserInteraction}
            >
              <motion.button
                key={`smart-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="smarts text-yellow-300  uppercase "
              >
                Smart. Secure. Rewarding.
              </motion.button>
               

              <motion.h1
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className=" hero_h1 text-4xl md:text-6xl font-bold mb-4"
              >
                {slide.title}
              </motion.h1>
              

              <motion.p
                key={`subtitle-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="here-p text-sm md:text-sm mb-6"
              >
                {slide.subtitle}
              </motion.p>

              <motion.button
                key={`button-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="here-button px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition"
              >
                Get Started
              </motion.button>
            </div>
            <motion.div className="img-conss"
             key={`button-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}>
                       <img src={MarketCapChart} alt="" />
                    </motion.div>
          </div>
        </SwiperSlide>
      ))}

      <div
        className="swiper-button-prev"
        onClick={handleUserInteraction}
      ></div>
      <div
        className="swiper-button-next"
        onClick={handleUserInteraction}
      ></div>
      <div
        className="swiper-pagination"
        onClick={handleUserInteraction}
      ></div>
    </Swiper>
  );
}
