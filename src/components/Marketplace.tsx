import React from "react";
import Section from "./Section";

const marketplaces = [
  {
    title: "Solscan",
    logo: "/solscan.png",
    url: "https://solscan.io/",
    isActive: true,
  },
  {
    title: "CoinMarketCap",
    logo: "/cmc.png",
    url: "https://coinmarketcap.com/",
    isActive: false,
  },
  {
    title: "Pump.fun",
    logo: "/pumpfun.png",
    url: "https://pump.fun/",
    isActive: true,
  },
  {
    title: "Bybit",
    logo: "/bybit.png",
    url: "https://www.bybit.com/",
    isActive: false,
  },
  {
    title: "Dexscreener",
    logo: "/dexscreener.png",
    url: "https://dexscreener.com/",
    isActive: false,
  },
  {
    title: "Raydium",
    logo: "/raydium.png",
    url: "https://raydium.io/",
    isActive: false,
  },
  {
    title: "MEXC",
    logo: "/mexc.svg",
    url: "https://www.mexc.com/",
    isActive: false,
  },
  {
    title: "BITGET",
    logo: "/bitget.png",
    url: "https://www.bitget.com/",
    isActive: false,
  },
  {
    title: "COINEX",
    logo: "/coinex.png",
    url: "https://www.coinex.com/",
    isActive: false,
  },
];

const Marketplace = () => {
  return (
    <Section bgColor="bg-white">
      <h2 className="text-3xl font-bold text-center text-violet-dark mb-10">
        Get $VIOLETAI
      </h2>
      <h2 className="text-xl font-bold text-center text-violet-dark mb-10">
        CA: 
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {marketplaces.map((market, index) =>
          market.isActive ? (
            <a
              key={market.title}
              href={market.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-6 rounded-lg transition-colors duration-300 cursor-pointer ${
                market.isActive
                  ? "bg-violet-light hover:bg-violet text-white"
                  : "bg-violet-light/50 text-violet-dark/50"
              }`}
            >
              <img
                src={market.logo}
                alt={market.title}
                className="w-12 h-12 object-contain mr-4"
              />
              <span className="text-lg font-medium">{market.title}</span>
            </a>
          ) : (
            <div
              key={market.title}
              className={`flex items-center justify-center p-6 rounded-lg transition-colors duration-300 cursor-context-menu ${
                market.isActive
                  ? "bg-violet-light hover:bg-violet text-white"
                  : "bg-violet-light/50 text-violet-dark/50"
              }`}
            >
              <img
                src={market.logo}
                alt={market.title}
                className="w-12 h-12 object-contain mr-4"
              />
              <span className="text-lg font-medium">{market.title}</span>
            </div>
          )
        )}
      </div>
    </Section>
  );
};

export default Marketplace;
