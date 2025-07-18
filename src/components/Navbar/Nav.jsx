// import React from 'react'
// import { useEffect, useState } from "react";
// import "../Navbar/Nav.css"

// const Nav = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Nav

import { Link ,useLocation } from "react-router-dom";
import { AuthContext  } from "../Authcontext.jsx";
import "../Navbar/Nav.css"
import { useEffect,useContext ,useState, useRef} from "react";
import logo from "../../../public/cryptoimg/Cryptologo.png"
import { useNavigate } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { RiChatHistoryFill } from "react-icons/ri";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();


    const handleLogout = () => {
        logout(); // Call logout to clear user data
        navigate("/"); // Redirect to homepage after logout
      };

     //sidebar toggle
     useEffect(() => {
      setActiveLink(location.pathname);
  }, [location]);

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const showSidebar = () => {
      setIsOpen(true);
  };

  const hideSidebar = () => {
      setIsOpen(false);
  };

  useEffect(() => {
      const handleClickOutside = (event) => {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
              hideSidebar();
          }
      };

      if (isOpen) {
          document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [isOpen]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <nav className={ `fixed w-full header__nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="flex justify-between items-center">
      <Link to={"/"} className="nav_logo_link">
            <img src={logo} alt="Logo" className="nav__logo" />
        </Link>
        <div className="xx2" onClick={showSidebar}>
                    <CgMenuRight className='menu-icon'/>
                </div>
        <div ref={sidebarRef}  className={`nav__elemets__container` + (isOpen ? " open" : "")}>
           <div className="elements">
            <div className="close-icon" onClick={hideSidebar}>
                <RiCloseFill className='menu-icon'/>
            </div>
           
          <Link to="/" className={`nav__elemet ${isScrolled ? "scrolled" : ""} ${activeLink === "/" ? "active" : ""}`} onClick={() => { setActiveLink("/"); hideSidebar(); }}>Home</Link>
           
          <a href="#investmentPlan" className={`nav__elemet ${isScrolled ? "scrolled" : ""} ${activeLink === "#investmentPlan" ? "active" : ""}`} onClick={() => { setActiveLink("/investmentPlan"); hideSidebar(); }}> Investment Plan</a>

          <a href="#about" ><li  className={`nav__elemet ${isScrolled ? "scrolled" : ""} ${activeLink === "#about" ? "active" : ""}`}  onClick={() => { setActiveLink("/about"); hideSidebar(); }}>About</li></a>
           <a href="#howtiwork" ><li  className={`nav__elemet ${isScrolled ? "scrolled" : ""} ${activeLink === "#howtiwork" ? "active" : ""}`}  onClick={() => { setActiveLink("/about"); hideSidebar(); }}>How it Work</li></a>
            <a href="#upgrade" ><li  className={`nav__elemet ${isScrolled ? "scrolled" : ""} ${activeLink === "#about" ? "active" : ""}`}  onClick={() => { setActiveLink("#upgrade"); hideSidebar(); }}> Upgrade</li></a>
            </div>
                
                <li className={`nav__elemet ${isScrolled ? "scrolled" : ""} compeny`}><p className="header-nav-font">Company</p>
                  <ul className="nav__dropdow">
                  
                  <Link to="/contact" > <li  className={`nav__elemet ${isScrolled ? "scrolled" : ""} ${activeLink === "/contact" ? "active" : ""}`} onClick={() => { setActiveLink("/contact"); hideSidebar(); }}><MdOutlineConnectWithoutContact className="nav-icons-side"/>Contact Us</li></Link>
                  
                  </ul>
                </li>
              <div className="element-btn">
              <Link to="/signup" className="nav__button" onClick={() => { setActiveLink("/signup"); hideSidebar(); }}> Sign Up</Link>
              <Link to="/login" className="nav__button" onClick={() => { setActiveLink("/login"); hideSidebar(); }}>Login</Link>
               </div>
               
             
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

