import React from 'react';

const Contact = () => {
  return (
    <section
      className="py-20 px-4 relative bg-cover bg-top"
      style={{
        backgroundImage: "url('/grassland.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay with blur effect */}
      <div className="absolute inset-0 bg-violet-light/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="text-center text-white relative z-10">
        <h2 className="text-3xl font-bold mb-6">Are you a VC looking to invest?</h2>
        <a
          href="mailto:contact.iseekaigo@gmail.com"
          className="inline-block px-8 py-4 bg-white text-violet font-bold rounded-lg hover:bg-violet-light transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
