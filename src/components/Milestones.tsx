import React from "react";
import { Milestone } from "@/components/ui/milestone";

const Milestones = () => {
  const milestones = [
    {
      title: "Raydium Listing",
      description:
        "Achieved first major milestone with our official listing on Raydium, marking the start of our exciting journey!",
      completed: true,
    },
    {
      title: "$10M Market Cap",
      description:
        "Celebrated $10M market cap with an exclusive community giveaway and reward.",
      completed: false,
    },
    {
      title: "$50M Market Cap",
      description:
        "Launched a massive airdrop campaign to celebrate our $50M market cap and give back to the community that helped us grow!",
      completed: false,
    },
    {
      title: "$100M Market Cap",
      description:
        "Reaching the $100M market cap and making waves in the industry with our centralized exchange listings.",
      completed: false,
    },
    {
      title: "$300M Market Cap",
      description:
        "With a $300M market cap, we’re preparing for top-tier centralized exchange listings and launching UR Limited NFT rewards to top holders!",
      completed: false,
    },
    {
      title: "$1B Market Cap",
      description:
        "Achieving the monumental $1B market cap and delivering VioletAI as a super-intelligent AI that pushes the boundaries of technology as physical AI.",
      completed: false,
    },
  ];

  return (
    <section
      className="py-20 px-4 relative bg-violet-light bg-cover bg-top"
      style={{
        backgroundImage: "url('/violetai.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur overlay, make sure it's only covering the background */}
      <div className="absolute inset-0 z-10 bg-violet-light/50 backdrop-blur-[1px]"></div>

      {/* Content section */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-violet-dark mb-10">
          Milestone
        </h2>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Milestone
                title={milestone.title}
                description={milestone.description}
                completed={milestone.completed}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
