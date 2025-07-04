import React from 'react'
import Hero from "../components/Hero/Hero"
import Why from '../components/whychooseus/Why'
import How from '../components/Howitwork/How'
import InvestmentPlans from '../components/investmentplan/invest'
import Trusted from '../components/Trusted/Trusted'
import Counters from '../components/Counter/Counter.jsx'
import TeamSlider from '../components/Teamwork/Teamwork.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Trade from '../components/tradingview/Trade.jsx'
import MarketCapChart from '../components/Marketcap/Mark.jsx'
import Nextview from "../components/Nextview/Next.jsx"
import Track from "../components/Track/Treckview.jsx"


const Homepage = () => {
  return (
    <div>
      
      <Hero/>
      <Trade/>
      <Nextview/>
      <Track/>
      <Why/>
      <How/>
      <InvestmentPlans/>
      <Trusted/>
      <Counters/>
      <TeamSlider/>
      
      <Footer/>
    </div>
  )
}

export default Homepage
