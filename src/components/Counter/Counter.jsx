// import React, { useEffect, useState } from "react";
// import counters from "../Counter/Counterjson";

// const AnimatedCounter = ({ end, suffix }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000; // total duration in ms
//     const stepTime = Math.max(Math.floor(duration / end), 20); // step every X ms
//     const increment = end / (duration / stepTime);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         start = end;
//         clearInterval(timer);
//       }
//       setCount(Math.ceil(start));
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, [end]);

//   return <span>{count}{suffix}</span>;
// };

// const AnimatedCounters = () => {
//   return (
//     <section className="bg-white py-16 px-6 text-center">
//       <h2 className="text-3xl font-bold text-blue-800 mb-12">
//         📈 Our Global Impact
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
//         {counters.map((counter) => (
//           <div key={counter.id} className="space-y-2">
//             <div className="text-4xl font-bold text-blue-700">
//               <AnimatedCounter end={counter.value} suffix={counter.suffix} />
//             </div>
//             <p className="text-gray-600 text-lg">{counter.title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AnimatedCounters;
import React from "react";
import counters from "../Counter/Counterjson";
import AnimatedCounter from "./AnimatedCounter";
import "../Counter/Counter.css"; // Assuming you have a CSS file for styling

const AnimatedCounters = () => {
  return (
    <section className="counter__container py-16 px-6 bg-white text-center">
      <h2 className="counter__h2">
        📈 Our Global Impact
      </h2>
      <div className="counter__containers">
      <div className="counter__content grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {counters.map((counter) => (
          <div key={counter.id} className="space-y-2">
            <div className="counter__number ">
              <AnimatedCounter end={counter.value} suffix={counter.suffix} />
            </div>
            <p className="counter__title">{counter.title}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default AnimatedCounters;
