import React from 'react'
import "./How.css"

const How = () => {
  return (
    <div className='how__container'>
        <div className="how__content">
            <h1>How It Works</h1>
            <p className='how__p'>Turn Crypto Into Passive Profit in Minutes</p>
            <div className="how__contents">
                <div className="how__cons">
                    <div className="how-num red">1</div>
                    
                      <h2 className='how__h2'>Create an Account</h2>
                      <p>Sign up in seconds using your email and start your journey toward smart crypto investing. No complicated steps—just quick and secure access.</p>
                </div>
                <div className="how__cons">
                <div className="how-num green">2</div>
                <h2 className='how__h2'> Choose a Plan</h2>
                 <p>Browse our flexible investment plans designed for all levels. Select the one that fits your budget, duration, and ROI expectations.</p>
                </div>
                <div className="how__cons">
                <div className="how-num blue">3</div>
                <h2 className='how__h2'>Deposit Crypto</h2>
                <p>Fund your account using popular cryptocurrencies like Bitcoin, Ethereum, or USDT. Your funds are securely processed and tracked from day one.</p>
                </div>
                <div className="how__cons">
                <div className="how-num purple">4</div>
                <h2 className='how__h2'>Earn Returns</h2>
                <p>Sit back and watch your investment grow. We calculate your earnings in real time and deliver consistent, monthly ROI straight to your dashboard.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default How
