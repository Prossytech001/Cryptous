// src/components/Loader.jsx
import React from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from '../../assets/loader.json'; // path to your lottie file

const Loader = () => {
  return (
    <div className="loader fixed inset-0 flex items-center justify-center  z-0">
      <Lottie animationData={loaderAnimation} loop={true} style={{ width: 200, height: 200 }} />
    </div>
  );
};

export default Loader;
