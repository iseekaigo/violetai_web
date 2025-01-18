import React from "react";

const Schedule = () => {
  const schedule = [
    {
      day: "Sunday",
      time: "4 AM UTC+0",
      activity: "First token launch & AMA",
    },
    { day: "Sunday", time: "13 PM UTC+0", activity: "Chat" },
    { day: "Monday", time: "13 PM UTC+0", activity: "Chat" },
    { day: "TBA", time: "2 PM UTC+0", activity: "Special Stream" },
  ];

  return (
    <section
      className="py-20 px-4 relative bg-cover bg-top"
      style={{
        backgroundImage: "url('/violetai_celebration_compressed.png')",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay with blur effect */}
      <div className="absolute inset-0 bg-violet-light/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-violet-dark mb-10">
          Live Schedule
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schedule.map((item, index) => (
            <div
              key={item.day}
              className="bg-violet-light rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate-fade-up relative z-10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-violet-dark mb-2">
                {item.day}
              </h3>
              <p className="text-violet-dark/80">{item.time}</p>
              <p className="text-violet">{item.activity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
