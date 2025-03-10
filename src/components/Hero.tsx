import React, { useState } from "react";
import Section from "./Section";

const Hero = () => {
  const [streamError, setStreamError] = useState(false);
  const currentDomain = window.location.hostname;
  const iframeSrc = `https://player.twitch.tv/?channel=violetai_iseekaigo&parent=${currentDomain}`;

  const handleStreamError = () => {
    setStreamError(true);
  };

  return (
    <Section bgColor="bg-violet-light" className="pt-20 pb-10 mb-40">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-violet-dark mb-4 animate-fade-up">
          VIOLET AI
        </h1>
      </div>

      <div
        className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl animate-fade-up bg-violet-dark/5 backdrop-blur-sm"
        style={{ animationDelay: "0.4s" }}
      >
        {streamError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-violet-dark">
            <svg
              className="w-16 h-16 mb-4 opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-2xl font-bold mb-2">
              Violet AI is currently offline.
            </h3>
            <p className="text-center text-violet-dark/80">
              Check our schedule below for the next exciting stream!
              <br />
              In the meantime, join our community on Discord and Twitter.
            </p>
          </div>
        ) : (
          <iframe
            src={iframeSrc}
            frameBorder="0"
            allowFullScreen
            scrolling="no"
            height="100%"
            width="100%"
            className="w-full h-full"
            onError={handleStreamError}
          ></iframe>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-violet opacity-20 writing-vertical text-4xl">
          愛  あい  アイ  ♡
        </div>
        <div className="absolute top-20 right-10 text-violet opacity-20 writing-vertical text-4xl">
          バイオレット
        </div>
      </div>
    </Section>
  );
};

export default Hero;
