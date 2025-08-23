import React from 'react'



import InvestmentPlans from '../components/investmentplan/invest'
import Trusted from '../components/Trusted/Trusted'


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
      
      
      
      
      <Heros />
      <Trade/>
      <Work />
      <TimeLine />
      <InvestmentPlans/>
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
      <Footer/>
    </div>
  )
}

export default Homepage
