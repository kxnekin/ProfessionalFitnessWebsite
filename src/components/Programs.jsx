const programs = [
  {
    title: "Strength Training",
    desc: "Build muscle, power, and overall strength with structured progressive overload workouts designed for all levels.",
    icon: "",
    tag: "Muscle & Power",
  },
  {
    title: "Personal Training",
    desc: "1-on-1 coaching tailored to your body type, goals, and pace. Your trainer. Your plan. Your results.",
    icon: "",
    tag: "1-on-1 Coaching",
  },
  {
    title: "Fat Loss",
    desc: "Burn fat effectively with a science-backed mix of cardio and strength training that keeps your metabolism firing.",
    icon: "",
    tag: "Body Transformation",
  },
  {
    title: "Cardio Conditioning",
    desc: "Push your limits. Improve stamina, endurance, and heart health with high-energy conditioning circuits.",
    icon: "",
    tag: "Endurance",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-28 bg-[#080808] relative overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full opacity-15 blur-[100px] pointer-events-none -translate-y-1/2"
        style={{ background: "radial-gradient(circle, #ff2d00, transparent)" }}
      />
      <div
        className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff6b00, transparent)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,45,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-600/30 px-4 py-1.5 rounded-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-400">
              What We Offer
            </span>
          </div>

          <h2
            className="text-5xl sm:text-6xl mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "2px",
            }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Programs
            </span>
          </h2>
          <p className="text-white/40 text-sm tracking-widest uppercase max-w-md mx-auto">
            Every program built to push you past your limits
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <div
              key={i}
              className="group relative bg-[#0f0f0f] border border-white/[0.06] rounded-sm p-8 flex flex-col justify-between min-h-[300px] transition-all duration-500 hover:-translate-y-2 hover:border-red-600/40 cursor-pointer overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at bottom left, rgba(255,45,0,0.08), transparent 70%)",
                }}
              />

              {/* Top: number + icon */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-[11px] font-black tracking-[3px] uppercase"
                  style={{
                    background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl">{p.icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Tag */}
                <div className="inline-block mb-3">
                  <span className="text-[9px] font-bold tracking-[2px] uppercase text-white/30 border border-white/10 px-2 py-0.5 rounded-sm">
                    {p.tag}
                  </span>
                </div>

                <h3
                  className="text-2xl text-white mb-3 leading-tight"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  {p.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {/* Bottom: Learn More */}
              <div className="mt-8 flex items-center gap-2 overflow-hidden">
                <div
                  className="h-px flex-1 transition-all duration-300 group-hover:opacity-100 opacity-30"
                  style={{
                    background: "linear-gradient(90deg, #ff2d00, transparent)",
                  }}
                />
                <span
                  className="text-[11px] font-black tracking-[2px] uppercase transition-all duration-300 group-hover:translate-x-1"
                  style={{
                    background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Explore →
                </span>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: "linear-gradient(90deg, #ff2d00, #ff6b00)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
