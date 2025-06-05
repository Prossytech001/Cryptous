// import React from 'react'
// import "../Hero/Hero.css"
// import homeimg from "../../../public/cryptoimg/Tablet.png"
// import { Link } from 'react-router-dom'
// import Threads from "../Threads"

// const Hero = () => {
//   return (
//     <div className='hero__section' style={{ width: '100%',  position: 'relative' }}>
//       <Threads
//     amplitude={1}
//     distance={0.2}
//     enableMouseInteraction={true}
//   />
//         <div className="hero__blues"></div>
//       <div className="hero__content">
//         <h1 className='hero_h1'>Grow Your Wealth with <span className='hero_span'>Cryptous</span></h1>
//         <p className='hero__p'>Smart. Secure. Rewarding.</p>
//         <div className="pdiv">
//         <p className='hero_p'>At Cryptous, we make crypto investing simple and profitable. Whether you're new to the world of crypto or a seasoned investor, our platform gives you everything you need to stake, grow, and manage your assets with confidence.</p>
//         </div>
//         <Link to="/signup"><button className='hero_btn'> Start Investing</button></Link>
//         <div className="img-con">
//         <img src={homeimg}alt=""  className='hero__img'/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero
// import React from 'react';
// import "../Hero/Hero.css";
// import homeimg from "../../../public/cryptoimg/Tablet.png";
// import { Link } from 'react-router-dom';
// import Threads from "../Threads";

// const Hero = () => {
//   return (
//     <section
//       className="hero__section"
//       style={{
//         position: 'relative',
//         width: '100%',
//         height: '100vh',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background Canvas */}
//       <Threads
//         amplitude={1}
//         distance={0.2}
//         enableMouseInteraction={true}
//         className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
//       />

//       {/* Hero Background Gradient Overlay (optional) */}
//       <div className="hero__blues absolute inset-0 z-10" />

//       {/* Hero Content */}
//       <div className="hero__content relative z-20">
//         <h1 className="hero_h1">
//           Grow Your Wealth with <span className="hero_span">Cryptous</span>
//         </h1>
//         <p className="hero__p">Smart. Secure. Rewarding.</p>
//         <div className="pdiv">
//           <p className="hero_p">
//             At Cryptous, we make crypto investing simple and profitable. Whether you're new to the world of crypto or a seasoned investor, our platform gives you everything you need to stake, grow, and manage your assets with confidence.
//           </p>
//         </div>
//         <Link to="/signup">
//           <button className="hero_btn">Start Investing</button>
//         </Link>
//         <div className="img-con">
//           <img src={homeimg} alt="Crypto dashboard" className="hero__img" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import '../Hero/Hero.css';
import homeimg from '../../../public/cryptoimg/Tablet.png';
import { Link } from 'react-router-dom';
import Threads from '../Threads';

const Hero = () => {
  return (
    <div className="hero__section">
     
      <div className="hero__blues"></div>
      <div className="hero__content">
        <h1 className="hero_h1">
          Grow Your Wealth with <span className="hero_span">Cryptous</span>
        </h1>
        <p className="hero__p">Smart. Secure. Rewarding.</p>
        <div className="pdiv">
          <p className="hero_p">
            At Cryptous, we make crypto investing simple and profitable. Whether you're new to the world of crypto or a seasoned investor, our platform gives you everything you need to stake, grow, and manage your assets with confidence.
          </p>
        </div>
        <Link to="/signup">
          <button className="hero_btn">Start Investing</button>
        </Link>
        <div className="img-con">
          <img src={homeimg} alt="Crypto UI" className="hero__img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
