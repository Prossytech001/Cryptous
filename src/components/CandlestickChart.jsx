// import React, { useEffect, useState, useRef } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const CandlestickChart = () => {
//   const [series, setSeries] = useState([{ data: [] }]);
//   const ws = useRef(null);

//   useEffect(() => {
//     // Fetch last 50 historical candles
//     const fetchInitialData = async () => {
//       const res = await fetch(
//         'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=50'

//       );
//       const data = await res.json();

//       const formatted = data.map((d) => ({
//         x: new Date(d[0]),
//         y: [parseFloat(d[1]), parseFloat(d[2]), parseFloat(d[3]), parseFloat(d[4])],
//       }));

//       setSeries([{ data: formatted }]);
//     };

//     fetchInitialData();

//     // Connect WebSocket
//     ws.current = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1m');

//     ws.current.onmessage = (event) => {
//       const msg = JSON.parse(event.data);
//       const k = msg.k;

//       const newCandle = {
//         x: new Date(k.t),
//         y: [parseFloat(k.o), parseFloat(k.h), parseFloat(k.l), parseFloat(k.c)],
//       };

//       setSeries((prev) => {
//         const updated = [...prev[0].data];
//         const last = updated[updated.length - 1];

//         if (last && new Date(last.x).getTime() === k.t) {
//           updated[updated.length - 1] = newCandle;
//         } else {
//           updated.push(newCandle);
//         }

//         return [{ data: updated.slice(-50) }];
//       });
//     };

//     return () => {
//       if (ws.current) ws.current.close();
//     };
//   }, []);

//   const options = {
//     chart: {
//       type: 'line',
//       height: 350,
//       animations: {
//         enabled: false,
//       },
//       toolbar: {
//       show: false, // ⛔ Hides zoom/selection/export icons
//     },
//     zoom: {
//       enabled: false, // ⛔ Disables zoom interaction
//     },
//     },
//     title: {
//       text: 'Bitcon / USDT',
//       align: 'left',
//     },
//     xaxis: {
//       type: 'datetime',
//     },
//     yaxis: {
//       tooltip: {
//         enabled: true,
//       },
//     },
//   };

//   return (
//     <div>
//       <ReactApexChart options={options} series={series} type="candlestick" height={350} />
//     </div>
//   );
// };

// export default CandlestickChart;
// import React, { useEffect, useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const CandlestickChart = () => {
//   const [series, setSeries] = useState([{ data: [] }]);

//   useEffect(() => {
//     const fetchCoinGeckoData = async () => {
//       try {
//         const res = await fetch(
//           'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=minute'
//         );
//         const data = await res.json();

//         const prices = data.prices; // [timestamp, price]
//         const candles = [];

//         // Generate basic candles from price data (every 5 mins group)
//         for (let i = 0; i < prices.length; i += 5) {
//           const chunk = prices.slice(i, i + 5);
//           if (chunk.length < 5) break;

//           const times = chunk.map((d) => d[0]);
//           const values = chunk.map((d) => d[1]);

//           const candle = {
//             x: new Date(times[0]),
//             y: [
//               values[0], // open
//               Math.max(...values), // high
//               Math.min(...values), // low
//               values[values.length - 1], // close
//             ].map((v) => parseFloat(v.toFixed(2))),
//           };

//           candles.push(candle);
//         }

//         setSeries([{ data: candles }]);
//       } catch (error) {
//         console.error('CoinGecko fetch failed:', error);
//       }
//     };

//     fetchCoinGeckoData();
//   }, []);

//   const options = {
//     chart: {
//       type: 'candlestick',
//       height: 350,
//       toolbar: {
//         show: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//     },
//     title: {
//       text: 'BTC/USD - Candlestick (via CoinGecko)',
//       align: 'left',
//       style: {
//         fontSize: '18px',
//         fontWeight: 'bold',
//         color: '#1E293B',
//       },
//     },
//     xaxis: {
//       type: 'datetime',
//     },
//     yaxis: {
//       tooltip: {
//         enabled: true,
//       },
//     },
//   };

//   return (
//     <div>
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="candlestick"
//         height={350}
//       />
//     </div>
//   );
// };

// export default CandlestickChart;
// import React, { useEffect, useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const CandlestickChart = () => {
//   const [series, setSeries] = useState([{ data: [] }]);

//   useEffect(() => {
//     const fetchCoinGeckoData = async () => {
//       try {
//         const proxy = 'https://corsproxy.io/?';
//         const endpoint = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=minute';

//         const response = await fetch(proxy + encodeURIComponent(endpoint), {
//           headers: {
//             'User-Agent': 'Mozilla/5.0',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP ${response.status} - ${response.statusText}`);
//         }

//         const data = await response.json();
//         const prices = data?.prices;

//         if (!Array.isArray(prices)) throw new Error('Invalid price data');

//         const candles = [];

//         for (let i = 0; i < prices.length; i += 5) {
//           const chunk = prices.slice(i, i + 5);
//           if (chunk.length < 5) break;

//           const times = chunk.map((d) => d[0]);
//           const values = chunk.map((d) => d[1]);

//           candles.push({
//             x: new Date(times[0]),
//             y: [
//               values[0], // open
//               Math.max(...values), // high
//               Math.min(...values), // low
//               values[values.length - 1], // close
//             ].map((v) => parseFloat(v.toFixed(2))),
//           });
//         }

//         setSeries([{ data: candles }]);
//       } catch (err) {
//         console.error('CoinGecko fetch failed:', err.message);
//       }
//     };

//     fetchCoinGeckoData();
//   }, []);

//   const options = {
//     chart: {
//       type: 'candlestick',
//       height: 350,
//       toolbar: { show: false },
//       zoom: { enabled: false },
//     },
//     title: {
//       text: 'BTC/USD - Candlestick (via CoinGecko)',
//       align: 'left',
//       style: {
//         fontSize: '18px',
//         fontWeight: 'bold',
//         color: '#1E293B',
//       },
//     },
//     xaxis: { type: 'datetime' },
//     yaxis: { tooltip: { enabled: true } },
//   };

//   return (
//     <div>
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="candlestick"
//         height={350}
//       />
//     </div>
//   );
// };

// export default CandlestickChart;
import React, { useEffect, useRef } from 'react';

const TradingViewChart = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [["BTCUSDT", "BINANCE:BTCUSDT|1D"]],
      chartOnly: false,
      width: "100%",
      height: "400",
      locale: "en",
      colorTheme: "dark",
      gridLineColor: "#3a3939",
      trendLineColor: "#96651e",
      fontColor: "#ffffff",
      underLineColor: "#3a3939",
      isTransparent: true,
      autosize: false,
      container_id: "tv-container" // ✅ must match div ID
    });

    container.current.innerHTML = ''; // Clear previous
    container.current.appendChild(script);
  }, []);

  return (
    <div
      id="tv-container"
      ref={container}
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default TradingViewChart;
// const TradingViewChart = ({ theme }) => {
//   const container = useRef();

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
//     script.type = 'text/javascript';
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       symbols: [["BTCUSDT", "BINANCE:BTCUSDT|1D"]],
//       chartOnly: false,
//       width: "100%",
//       height: "400",
//       locale: "en",
//       colorTheme: theme,
//       gridLineColor: theme === 'dark' ? "#3a3939" : "#e0e0e0",
//       trendLineColor: theme === 'dark' ? "#96651e" : "#0066cc",
//       fontColor: theme === 'dark' ? "#ffffff" : "#000000",
//       underLineColor: theme === 'dark' ? "#3a3939" : "#dcdcdc",
//       isTransparent:true,
//       autosize: false,
//       container_id: "tv-container"
//     });

//     container.current.innerHTML = '';
//     container.current.appendChild(script);
//   }, [theme]); // ✅ re-run on theme change

//   return <div id="tv-container" ref={container} style={{ height: "400px" }} />;
// };

// export default TradingViewChart;

