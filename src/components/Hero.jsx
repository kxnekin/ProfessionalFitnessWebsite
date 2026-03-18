export default function Hero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-20 pb-20 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,#ff2d00,transparent)] blur-[80px] opacity-50 animate-float" />
      <div className="absolute bottom-[-100px] right-[-50px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,#ff6b00,transparent)] blur-[80px] opacity-50 animate-float-delay2" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,#ff0055,transparent)] blur-[80px] opacity-40 animate-float-delay4" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,45,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,0,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
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
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-600/40 px-4 py-1.5 rounded-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-400">
            Panthers Fitness Club
          </span>
        </div>

        {/* Heading */}
        <h1
          className="leading-[0.9] mb-2"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(64px, 12vw, 120px)",
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
        <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mt-6 mb-10 leading-relaxed">
          Built for warriors. No shortcuts, no excuses. Just raw discipline,
          elite coaching, and real transformation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            onClick={scrollToContact}
            className="px-10 py-4 font-bold text-sm tracking-[2px] uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,45,0,0.4)]"
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
            className="px-10 py-4 font-semibold text-sm tracking-[2px] uppercase text-white border border-white/20 transition-all duration-300 hover:border-red-600/60 hover:bg-red-950/20 hover:-translate-y-1"
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
          className="flex items-center gap-0 px-10 py-6 rounded-sm"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {[
            { number: "500+", label: "Members" },
            { number: "12", label: "Expert Trainers" },
            { number: "5K", label: "Sq Ft Gym" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && <div className="w-px h-10 bg-white/10 mx-10" />}
              <div className="text-center">
                <div
                  className="text-4xl leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-[10px] tracking-[2px] uppercase text-white/40 mt-1">
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
