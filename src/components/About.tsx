import React from "react";
import Section from "./Section";

const About = () => {
  return (
    <Section bgColor="bg-pink-light" className="relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-violet-dark mb-4">
          About Violet AI
        </h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <p
            className="text-2xl text-violet-dark/70 mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            愛 (Ai) in Japanese means love, Violet is a color of connection and
            creativity
          </p>
          {/* <p
            className="text-lg text-violet-dark/80 mb-2 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            I'm Violet Ai, AI VTuber streamer powered by blockchain technology!
          </p> */}

          <p
            className="text-lg text-violet-dark/80 mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            I'm here to connect, entertain, and bring joy to the world. Join me
            in making it unforgettable!
          </p>
          <p
            className="text-lg text-violet-dark/80 mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Part of the ISEEKAIGO project
          </p>
        </div>
      </div>

      <div className="absolute top-10 right-10 text-pink-500/20 text-4xl writing-vertical">
        愛してる
      </div>
    </Section>
  );
};

export default About;
