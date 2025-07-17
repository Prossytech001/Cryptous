// src/components/Preloader.jsx
import React, { useEffect, useState } from "react";
import logo from "../../../public/cryptoimg/Cryptologo.png"; // adjust path to your logo
import "./Preloader.css";
import Loader from "../Loader/Loader";

const Preloader = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 2000); // 2s loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${fade ? "preloader--hide" : ""}`}>
     <Loader/>
    </div>
  );
};

export default Preloader;
