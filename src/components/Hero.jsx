export default function Hero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[-60px] sm:top-[-100px] left-[-60px] sm:left-[-100px] w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] rounded-full bg-[radial-gradient(circle,#ff2d00,transparent)] blur-[80px] opacity-40 sm:opacity-50 animate-float" />
      <div className="absolute bottom-[-60px] sm:bottom-[-100px] right-[-30px] sm:right-[-50px] w-[220px] sm:w-[300px] lg:w-[400px] h-[220px] sm:h-[300px] lg:h-[400px] rounded-full bg-[radial-gradient(circle,#ff6b00,transparent)] blur-[80px] opacity-40 sm:opacity-50 animate-float-delay2" />
      <div className="absolute top-1/2 left-1/2 w-[180px] sm:w-[250px] lg:w-[300px] h-[180px] sm:h-[250px] lg:h-[300px] rounded-full bg-[radial-gradient(circle,#ff0055,transparent)] blur-[80px] opacity-30 sm:opacity-40 animate-float-delay4" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,45,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Diagonal Accent Line */}
      <div
        className="absolute w-[200%] h-[2px] left-[-50%] pointer-events-none"
        style={{
          top: "35%",
          transform: "rotate(-8deg)",
          background:
            "linear-gradient(90deg, transparent, rgba(255,45,0,0.4), transparent)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-600/40 px-3 sm:px-4 py-1.5 rounded-sm mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[2px] sm:tracking-[3px] uppercase text-red-400 whitespace-nowrap">
            Sam Fitness Club
          </span>
        </div>

        {/* Heading */}
        <h1
          className="leading-[0.9] mb-2 w-full"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(56px, 14vw, 120px)",
            letterSpacing: "-1px",
          }}
        >
          <span className="block text-white">Train</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Harder.
          </span>
          <span className="block text-white">Live Stronger.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-md mx-auto mt-4 sm:mt-6 mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
          Built for warriors. No shortcuts, no excuses. Just raw discipline,
          elite coaching, and real transformation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full max-w-xs sm:max-w-none">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 font-bold text-sm tracking-[2px] uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,45,0,0.4)] active:scale-95"
            style={{
              background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
              clipPath:
                "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            Join Now
          </button>

          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 font-semibold text-sm tracking-[2px] uppercase text-white border border-white/20 transition-all duration-300 hover:border-red-600/60 hover:bg-red-950/20 hover:-translate-y-1 active:scale-95"
            style={{
              clipPath:
                "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            Free Trial
          </button>
        </div>

        {/* Stats */}
        <div
          className="flex items-center justify-center w-full max-w-xs sm:max-w-none gap-0 px-5 sm:px-10 py-5 sm:py-6 rounded-sm"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {[
            { number: "500+", label: "Members" },
            { number: "12", label: "Trainers" },
            { number: "5K", label: "Sq Ft Gym" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center flex-1 justify-center"
            >
              {i > 0 && (
                <div className="w-px h-8 sm:h-10 bg-white/10 mr-4 sm:mr-8 lg:mr-10 flex-shrink-0" />
              )}
              <div className="text-center">
                <div
                  className="text-3xl sm:text-4xl leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-[9px] sm:text-[10px] tracking-[1.5px] sm:tracking-[2px] uppercase text-white/40 mt-1 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
