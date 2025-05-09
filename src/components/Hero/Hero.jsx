import React from 'react'
import "../Hero/Hero.css"
import homeimg from "../../../public/cryptoimg/Tablet.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero__section'>
        <div className="hero__blues"></div>
      <div className="hero__content">
        <h1 className='hero_h1'>Grow Your Wealth with <span className='hero_span'>Cryptous</span></h1>
        <p className='hero__p'>Smart. Secure. Rewarding.</p>
        <div className="pdiv">
        <p className='hero_p'>At Cryptous, we make crypto investing simple and profitable. Whether you're new to the world of crypto or a seasoned investor, our platform gives you everything you need to stake, grow, and manage your assets with confidence.</p>
        </div>
        <Link><button className='hero_btn'> Start Investing</button></Link>
        <div className="img-con">
        <img src={homeimg}alt=""  className='hero__img'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
