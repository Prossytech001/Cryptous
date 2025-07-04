import React from "react";
import "../About/About.css"; // Assuming you have some styles for the About page
import about1 from "../../../public/about.jpeg";   // Adjust the path as necessary
import about2 from "../../../public/aboutsky.jpeg";   // Adjust the path as necessary
import Footer from "../Footer/Footer"; // Adjust the path as necessary
import MarketCapChart from "../Marketcap/Mark";

const AboutPage = () => {
  return (
    <>
    <div className=" ">
     

      <section className="empower-content mb-12">
        <div className="empowers">
        <h2 className=" em-h1 ">Empowering Your Financial Future</h2>
        <p className="text-lg ">
          At <span className="font-semibold text-blue-800">Cryptous Investments</span>, we believe that everyone deserves access to simple, secure, and rewarding investment opportunities.
          We are a forward-thinking crypto investment platform dedicated to helping individuals grow their wealth through professionally designed staking plans and consistent daily returns.
        </p>
        </div>
        <div className="img-cons">
           <MarketCapChart/>
        </div>
        
      </section>

      
    </div>
 
    </>
  );
};

export default AboutPage;
