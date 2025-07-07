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
import Heros from "../components/Home/Hero/index.jsx"
import Perks from '../components/Home/perks/index.jsx'
import Platform from '../components/Home/platform/index.jsx'
import Portfolio from '../components/Home/portfolio/index.jsx'
import TimeLine from '../components/Home/timeline/index.jsx'
import Upgrade from '../components/Home/upgrade/index.jsx'
import Work from '../components/Home/work/index.jsx'


const Homepage = () => {
  return (
    <div>
      
      {/* <Hero/>
      <Trade/>
      <Nextview/>
      <Track/>
      <Why/>
      <How/>
      <InvestmentPlans/>
      <Trusted/>
      <Counters/>
      <TeamSlider/>
      
      <Footer/> */}
      <Heros />
      <Work />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
    </div>
  )
}

export default Homepage
