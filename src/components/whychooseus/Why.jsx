import React from 'react'
import './Why.css'
import { IoShieldCheckmark } from "react-icons/io5";
import { RiGlobalFill } from "react-icons/ri";
import { TbChartAreaLineFilled } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";

const Why = () => {
  return (
    <div className='why__container'>
      <div className='why__contents'>
        <h1>Why Choose Us?</h1>
        <p className='why__p'>We are a team of dedicated professionals committed to providing the best service possible.</p>
        <div className="why__content">
            <div className="why__cons">
            <IoShieldCheckmark className='why__icon'/>
                <div className="why_box">
                <h2>Secure & Transparent</h2>
                <p>We prioritize your safety. Cryptous uses industry-leading security protocols and transparent operations to protect your assets and build trust.</p>
                </div>
            </div>
            <div className="why__cons">
            <RiGlobalFill className='why__icon'/>
            <div className="why_box">
            <h2> Global Access</h2>
            <p>No matter where you are, Cryptous is accessible. Our platform is designed for a global audience, supporting users from all over the world.</p>
            </div>
            </div>
            <div className="why__cons">
               <TbChartAreaLineFilled className='why__icon'/>
            <div className="why_box">
            <h2> Real-Time Earnings</h2>
            <p>Track your earnings as they happen. Our system calculates and updates your investment returns in real time, giving you full visibility.</p>
            </div>
            </div>
            <div className="why__cons">
                <FaHandHoldingDollar className='why__icon'/>
            <div className="why_box">
            <h2>Flexible Staking Plans</h2>
            <p>We offer a range of investment plans to suit your goals. Whether you're a beginner or a pro, you'll find a plan that fits your budget and timeline.</p>
            </div>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default Why
