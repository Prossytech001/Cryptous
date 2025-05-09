// import React from 'react'
// import trusted from "../Trusted/Trustjson"


// const Trusted = () => {
//   return (
//     <section className='trusted__container'>
//          <h2 className="">🔐 Trusted Worldwide</h2>
//          <p className="trusted__h1">Your safety and satisfaction are our top priorities. Cryptous is built on transparency, accountability, and real-time results.</p>
//         <div className="trusted_container">
//       {trusted.map((item) => (
        
//         <div key={item.id} className="trusted__container">
//           <h1 className='trusted__h1'>{item.name}</h1>
//           <p className='trusted__p'>{item.description}</p>
//           <img src={item.image} alt={item.name} className="trusted__img" />
//         </div>
//       ))}
//       </div>
//     </section>
//   )
// }

// export default Trusted
// components/TrustSection.jsx
import React from "react";
import trusted from "../Trusted/Trustjson"
import "../Trusted/Trusted.css"

const TrustSection = () => {
  return (
    <section className="trusted__container py-12 px-4 bg-gray-50">
      <h2 className="">
        🔐 Trusted Worldwide
      </h2>
      <p className="trusted__h1">Your safety and satisfaction are our top priorities. Cryptous is built on transparency, accountability, and real-time results.</p>
      <div className="trusted_container">
        {trusted.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="md:/2 h-64 object-cover rounded-xl shadow-md"
            />
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-semibold text-blue-700">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
