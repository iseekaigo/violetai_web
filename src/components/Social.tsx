const Social = () => {
  const socialLinks = [
    { href: "https://www.twitch.tv/violetai_iseekaigo", src: "/twitch.svg", alt: "Twitch" },
    { href: "https://x.com/VioletAi_chan", src: "/twitter.svg", alt: "Twitter" },
    { href: "t.me/violetai_iseekaigo_hub", src: "/telegram.svg", alt: "Telegram" },
    { href: "https://discord.gg/hpmEhtCbRY", src: "/discord.svg", alt: "Discord" },
  ];

  return (
    <section className="bg-pink-light py-10">
      <h2 className="text-3xl font-bold text-violet-dark mb-10 text-center">
        Connect With Me
      </h2>

      <div className="flex justify-center space-x-6">
        {socialLinks.map(({ href, src, alt }, index) => (
          <a
            key={index}
            href={href}
            className="p-4 bg-white border-2 border-gray-300 rounded-full transition-colors duration-300 
                       hover:border-violet-dark"
          >
            <img src={src} alt={alt} className="w-6 h-6" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Social;
