import React from "react";
import { Milestone } from "@/components/ui/milestone";

const Milestones = () => {
  const milestones = [
    {
      title: "Raydium Listing",
      description: "First major milestone: Getting listed on Raydium",
      completed: true,
    },
    {
      title: "$100M Market Cap",
      description:
        "Reaching $100M market cap and centralized exchange listings",
      completed: false,
    },
    {
      title: "$300M Market Cap",
      description:
        "Reaching $300M market cap, getting listed on top-tiered centralized exchange and SR Limited NFT rewards distribution",
      completed: false,
    },
    {
      title: "$1B Market Cap",
      description: "Achieving $1B market cap",
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
