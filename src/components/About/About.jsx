import React from "react";
import "./About.css"; // Assuming you have some styles for the About page
import about1 from "../../../public/about.jpeg";   // Adjust the path as necessary
import about2 from "../../../public/aboutsky.jpeg";   // Adjust the path as necessary
import Footer from "../Footer/Footer"; // Adjust the path as necessary

const AboutPage = () => {
  return (
    <>
    <div className="container_about ">
        <div className="about__hero">
      <h1 className="about--h1">About Us</h1>
        
      </div>

      <section className="empower-content mb-12">
        <div className="empower">
        <h2 className=" em-h1 ">Empowering Your Financial Future</h2>
        <p className="text-lg leading-relaxed">
          At <span className="font-semibold text-blue-800">Cryptous Investments</span>, we believe that everyone deserves access to simple, secure, and rewarding investment opportunities.
          We are a forward-thinking crypto investment platform dedicated to helping individuals grow their wealth through professionally designed staking plans and consistent daily returns.
        </p>
        </div>
        <div className="img-con">
            <img src={about1} alt="About Us" className="about__img" />
        </div>
        
      </section>

      <section className="mission-content mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          To <span className="font-semibold text-blue-600">simplify crypto investments</span> by providing reliable, transparent, and rewarding opportunities that help users achieve financial independence.
        </p>
      </section>

      <section className="whychoose-content mb-12">
        <div className="whychoose-img"><img src={about2} alt="About Us" className="about__img" /></div>
        <div className="whychoose_value">
        <h2 className="em-h1 text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="space-y-4 text-lg list-disc list-inside">
          <li>
            <span className="font-medium text-blue-600">Daily ROI:</span> Earn daily returns on your investments, automatically or manually, depending on your plan.
          </li>
          <li>
            <span className="font-medium text-blue-600">Flexible Plans:</span> Choose from a variety of investment plans that suit your budget and goals.
          </li>
          <li>
            <span className="font-medium text-blue-600">Secure Platform:</span> We use the latest security protocols to ensure your data and funds are safe.
          </li>
          <li>
            <span className="font-medium text-blue-600">User-First Design:</span> A clean dashboard, detailed insights, and full control over your funds.
          </li>
          <li>
            <span className="font-medium text-blue-600">No Hidden Fees:</span> What you invest is what you grow — no tricks, no gimmicks.
          </li>
        </ul>
        </div>
      </section>

      <section className="future-content mb-12">
        <h2 className="text-2xl font-semibold mb-4">Built for the Future of Finance</h2>
        <p className="text-lg leading-relaxed">
          Crypto is more than a trend — it’s the future. We’re committed to staying ahead of the curve, continuously improving our platform, and introducing new features that give you more power over your financial journey.
          Whether you're just starting or scaling your portfolio, <span className="font-semibold text-blue-600">Cryptous</span> is your trusted partner in crypto investing.
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;
