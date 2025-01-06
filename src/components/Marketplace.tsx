import React from "react";
import Section from "./Section";

const marketplaces = [
  { title: "Solscan", logo: "/solscan.png", isActive: true },
  { title: "CoinMarketCap", logo: "/cmc.png", isActive: false },
  { title: "Pump.fun", logo: "/pumpfun.png", isActive: true },
  { title: "Bybit", logo: "/bybit.png", isActive: false },
  { title: "Dexscreener", logo: "/dexscreener.png", isActive: false },
  { title: "Raydium", logo: "/raydium.png", isActive: false },
  { title: "MEXC", logo: "/mexc.svg", isActive: false },
  { title: "BITGET", logo: "/bitget.png", isActive: false },
  { title: "COINEX", logo: "/coinex.png", isActive: false },
];

const Marketplace = () => {
  return (
    <Section bgColor="bg-white">
      <h2 className="text-3xl font-bold text-center text-violet-dark mb-10">
        Get $VIOLETAI
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {marketplaces.map((market, index) => (
          <div
            key={market.title}
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
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Marketplace;
