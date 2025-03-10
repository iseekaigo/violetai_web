import React from 'react';

const FloatingSakura = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 10}s linear infinite`,
            animationDelay: `${-Math.random() * 10}s`,
            transform: 'scale(48)' // Making flowers 4800% bigger (3x from previous 1600%)
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C13.2 3.2 14 4.8 14 6.5C14 8.2 13.2 9.8 12 11C10.8 9.8 10 8.2 10 6.5C10 4.8 10.8 3.2 12 2Z" fill="#8B5CF6" fillOpacity="0.6"/>
            <path d="M12 13C13.2 14.2 14 15.8 14 17.5C14 19.2 13.2 20.8 12 22C10.8 20.8 10 19.2 10 17.5C10 15.8 10.8 14.2 12 13Z" fill="#8B5CF6" fillOpacity="0.6"/>
            <path d="M2 12C3.2 13.2 4.8 14 6.5 14C8.2 14 9.8 13.2 11 12C9.8 10.8 8.2 10 6.5 10C4.8 10 3.2 10.8 2 12Z" fill="#8B5CF6" fillOpacity="0.6"/>
            <path d="M13 12C14.2 13.2 15.8 14 17.5 14C19.2 14 20.8 13.2 22 12C20.8 10.8 19.2 10 17.5 10C15.8 10 14.2 10.8 13 12Z" fill="#8B5CF6" fillOpacity="0.6"/>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingSakura;