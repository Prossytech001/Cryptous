// import React, { useState, useEffect } from "react";
// import teamMembers from "../Teamwork/Teamworkjson";

// const TeamSlider = () => {
//   const [current, setCurrent] = useState(0);
//   const length = teamMembers.length;

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
//   };

//   // Auto slide every 7s
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 7000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="py-16 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold text-blue-800 mb-10">👩‍💼 Meet Our Team</h2>
//       <div className="relative max-w-xl mx-auto overflow-hidden">
//         {teamMembers.map((member, index) => (
//           <div
//             key={member.id}
//             className={`transition-opacity duration-700 ${
//               index === current ? "opacity-100" : "opacity-0 absolute"
//             }`}
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               className="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-md"
//             />
//             <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
//             <p className="text-sm text-gray-500">{member.role}</p>
//             <p className="mt-2 text-gray-600 max-w-md mx-auto">{member.bio}</p>
//           </div>
//         ))}

//         {/* Navigation Buttons */}
//         <div className="flex justify-center gap-4 mt-8">
//           <button
//             onClick={prevSlide}
//             className="px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
//           >
//             ◀
//           </button>
//           <button
//             onClick={nextSlide}
//             className="px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
//           >
//             ▶
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-4">
//           {teamMembers.map((_, idx) => (
//             <div
//               key={idx}
//               className={`w-3 h-3 rounded-full ${
//                 idx === current ? "bg-blue-700" : "bg-gray-300"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSlider;
import React, { useState, useEffect } from "react";
import teamMembers from "../Teamwork/Teamworkjson";
import { motion } from "framer-motion";
import "../Teamwork/Teamwork.css"
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const TeamCarousel = () => {
  const itemsPerSlide = 2;
  const total = teamMembers.length;
  const totalGroups = Math.ceil(total / itemsPerSlide);
  const [currentGroup, setCurrentGroup] = useState(0);

  const nextGroup = () => {
    setCurrentGroup((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
  };

  const prevGroup = () => {
    setCurrentGroup((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextGroup, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="team__container overflow-hidden py-16 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-10">💼 Meet Our Team</h2>
     <div className="team__containers">
      <div className="relative  max-w-5xl mx-auto">
        {/* Carousel Container */}
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${currentGroup *33}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ width: `${(total / itemsPerSlide) * 100}%` }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team_content w-1/2 flex"
            >
              <div className="team_content   text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team_image object-cover  mx-auto mb-4"
                />
                <h3 className="team-h3 text-lg font-semibold text-blue-700">{member.name}</h3>
                <p className="team-p  text-sm text-gray-500">{member.role}</p>
                <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevGroup}
            className="team-pre px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
          >
            <GrFormPrevious className="text-2xl" />
          </button>
          <button
            onClick={nextGroup}
            className="team-next bg-blue-700 text-white rounded-full hover:bg-blue-800"
          >
            <MdOutlineNavigateNext className="text-2xl" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalGroups }).map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentGroup ? "bg-blue-700 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default TeamCarousel;



// import React, { useState, useEffect, useRef } from "react";
// import teamMembers from "../Teamwork/Teamworkjson";
// import { motion } from "framer-motion";

// const TeamCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const total = teamMembers.length;

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
//   };

//   const slideWidth = 20; // percentage

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className=" overflow-hidden py-16 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold text-blue-800 mb-10">👥 Meet Our Team</h2>

//       <div className="">
//         {/* Slide container */}
//         <motion.div
//           className="flex"
//           animate={{ x: `-${currentIndex * slideWidth}%` }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
         
//         >
//           {teamMembers.map((member) => (
//             <div
//               key={member.id}
//               className=""
             
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-40 h-40 object-cover rounded-full shadow-md mb-4"
//               />
//               <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
//               <p className="text-sm text-gray-500">{member.role}</p>
//               <p className="mt-2 text-gray-600 max-w-md">{member.bio}</p>
//             </div>
//           ))}
//         </motion.div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-center gap-4 mt-8">
//           <button
//             onClick={prevSlide}
//             className="px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
//           >
//             ◀
//           </button>
//           <button
//             onClick={nextSlide}
//             className="px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
//           >
//             ▶
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-4">
//           {teamMembers.map((_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? "bg-blue-700 scale-110" : "bg-gray-300"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamCarousel;
