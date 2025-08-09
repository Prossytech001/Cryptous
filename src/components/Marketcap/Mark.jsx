
// TradingViewWidget.jsx
// TradingViewWidget.jsx
// TradingViewWidget.jsx
// import React, { useEffect, useRef, memo } from 'react';

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(
//     () => {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "lineWidth": 2,
//           "lineType": 0,
//           "chartType": "area",
//           "fontColor": "rgb(106, 109, 120)",
//           "gridLineColor": "rgba(242, 242, 242, 0.06)",
//           "volumeUpColor": "rgba(34, 171, 148, 0.5)",
//           "volumeDownColor": "rgba(247, 82, 95, 0.5)",
//           "backgroundColor": "#0F0F0F",
//           "widgetFontColor": "#DBDBDB",
//           "upColor": "#22ab94",
//           "downColor": "#f7525f",
//           "borderUpColor": "#22ab94",
//           "borderDownColor": "#f7525f",
//           "wickUpColor": "#22ab94",
//           "wickDownColor": "#f7525f",
//           "colorTheme": "dark",
//           "isTransparent": false,
//           "locale": "en",
//           "chartOnly": false,
//           "scalePosition": "right",
//           "scaleMode": "Normal",
//           "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
//           "valuesTracking": "1",
//           "changeMode": "price-and-percent",
//           "symbols": [
//             [
//               "BINANCE:BTCUSDT|1D"
//             ]
//           ],
//           "dateRanges": [
//             "1d|1",
//             "1m|30",
//             "3m|60",
//             "12m|1D",
//             "60m|1W",
//             "all|1M"
//           ],
//           "fontSize": "10",
//           "headerFontSize": "medium",
//           "autosize": true,
//           "width": "100%",
//           "height": "100%",
//           "noTimeScale": false,
//           "hideDateRanges": false,
//           "hideMarketStatus": false,
//           "hideSymbolLogo": false
//         }`;
//       container.current.appendChild(script);
//     },
//     []
//   );

//   return (
//     <div className="tradingview-widget-container" ref={container}>
      
//     </div>
//   );
// }

// export default memo(TradingViewWidget);
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Prevent duplicate widget injection
    if (container.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [["BINANCE:BTCUSDT|1D"]],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "colorTheme": "dark",
        "autosize": true,
        "lineWidth": 2,
        "lineType": 0,
        "chartType": "area",
        "fontColor": "rgb(106, 109, 120)",
        "gridLineColor": "rgba(242, 242, 242, 0.06)",
        "volumeUpColor": "rgba(34, 171, 148, 0.5)",
        "volumeDownColor": "rgba(247, 82, 95, 0.5)",
        "backgroundColor": "#0F0F0F",
        "widgetFontColor": "#DBDBDB",
        "upColor": "#22ab94",
        "downColor": "#f7525f",
        "borderUpColor": "#22ab94",
        "borderDownColor": "#f7525f",
        "wickUpColor": "#22ab94",
        "wickDownColor": "#f7525f",
        "scalePosition": "right",
        "scaleMode": "Normal",
        "valuesTracking": "1",
        "isTransparent": true,
        "changeMode": "price-and-percent",
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ],
        "fontSize": "10",
        "headerFontSize": "medium",
        "noTimeScale": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container w-full h-[500px] rounded-xl overflow-hidden bg-gray-900 shadow-lg" ref={container}></div>
  );
}

export default memo(TradingViewWidget);
