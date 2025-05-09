import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import "../Footer/Footer.css"

const Footer = () => {
  return (
    <footer className="footer__container bg-blue-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Cryptous</h2>
          <p className="text-sm leading-relaxed">
            Cryptous is a trusted global crypto investment platform offering secure, scalable, and transparent financial growth opportunities for all.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
            <li><a href="/plans" className="hover:text-blue-300">Investment Plans</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@cryptous.com</li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Location: 123 Blockchain Ave, Web3 City</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-300"><FaTelegramPlane /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-blue-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Cryptous. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
