// import React, { useEffect } from 'react';

// const MarketCapChart = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//         "showSymbolLogo": true,
//         "isTransparent": false,
//         "displayMode": "adaptive",
//         "colorTheme": "light",
//         "locale": "en",
      
//     });

//     document.getElementById("tv_full_chart").appendChild(script);
//   }, []);

//   return (
//     <div className="tradingview-widget-container" style={{ height: "auto", width: "100%" }}>
//       <div id="tv_full_chart" />
//     </div>
//   );
// };

// export default MarketCapChart;

import "../tradingview/Trade.css"
import React, { useEffect } from 'react';

const MarketCapChart = () => {
  useEffect(() => {
    const existingScript = document.querySelector('#tv-script');
    if (existingScript) return; // Don't add again if already there

    const script = document.createElement('script');
    script.id = 'tv-script'; // mark the script
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "light",
        "locale": "en",
    });

    document.getElementById("tv_full_chart")?.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ height: "auto", width: "100%" }}>
      <div id="tv_full_chart" className="tradingview-widget-container"/>
    </div>
  );
};

export default MarketCapChart;




