const trainers = [
  {
    name: "Rahul Sharma",
    role: "Strength Coach",
    specialty: "Powerlifting & Muscle Gain",
    exp: "8 Yrs",
    clients: "120+",
    initials: "RS",
    accent: "from-[#ff2d00] to-[#ff6b00]",
  },
  {
    name: "Amit Verma",
    role: "Personal Trainer",
    specialty: "Fat Loss & Conditioning",
    exp: "6 Yrs",
    clients: "95+",
    initials: "AV",
    accent: "from-[#ff6b00] to-[#ffaa00]",
  },
  {
    name: "Neha Patel",
    role: "Fitness Coach",
    specialty: "Mobility & Functional Training",
    exp: "5 Yrs",
    clients: "80+",
    initials: "NP",
    accent: "from-[#ff2d00] to-[#ff0055]",
  },
];

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="py-28 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff2d00, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
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

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-600/30 px-4 py-1.5 rounded-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-400">
              Meet The Team
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
              Coaches
            </span>
          </h2>
          <p className="text-white/40 text-sm tracking-widest uppercase max-w-md mx-auto">
            Elite trainers. Real results. Zero excuses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <div
              key={i}
              className="group relative bg-[#0f0f0f] border border-white/[0.06] rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-red-600/40"
            >
              {/* Top color band */}
              <div className={`h-1 w-full bg-gradient-to-r ${t.accent}`} />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top center, rgba(255,45,0,0.07), transparent 70%)",
                }}
              />

              <div className="p-8 flex flex-col items-center text-center relative">
                {/* Avatar */}
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div
                    className={`w-24 h-24 rounded-full p-[2px] bg-gradient-to-br ${t.accent}`}
                  >
                    <div className="w-full h-full rounded-full bg-[#0f0f0f] flex items-center justify-center">
                      <span
                        className="text-2xl font-black"
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          background: `linear-gradient(135deg, #ff2d00, #ff6b00)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {t.initials}
                      </span>
                    </div>
                  </div>

                  {/* Online dot */}
                  <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[#0f0f0f]" />
                </div>

                {/* Name & Role */}
                <h3
                  className="text-2xl text-white mb-1"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  {t.name}
                </h3>

                <span
                  className="text-[10px] font-bold tracking-[3px] uppercase mb-3"
                  style={{
                    background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t.role}
                </span>

                {/* Specialty tag */}
                <span className="text-[10px] font-semibold tracking-[1px] uppercase text-white/30 border border-white/10 px-3 py-1 rounded-sm mb-6">
                  {t.specialty}
                </span>

                {/* Divider */}
                <div
                  className="h-px w-full mb-6"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
                  }}
                />

                {/* Stats */}
                <div className="flex w-full justify-around">
                  {[
                    { label: "Experience", value: t.exp },
                    { label: "Clients", value: t.clients },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div
                        className="text-2xl font-black leading-none mb-1"
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          background:
                            "linear-gradient(135deg, #ff2d00, #ff6b00)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {s.value}
                      </div>
                      <div className="text-[9px] tracking-[2px] uppercase text-white/30">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="mt-6 w-full py-3 text-[11px] font-black tracking-[3px] uppercase text-white/60 border border-white/10 rounded-sm transition-all duration-300 group-hover:border-red-600/50 group-hover:text-white group-hover:bg-red-950/20"
                  style={{
                    clipPath:
                      "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  Book a Session
                </button>
              </div>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${t.accent}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
