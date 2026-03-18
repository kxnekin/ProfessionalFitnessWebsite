const navLinks = ["home", "programs", "trainers", "pricing", "contact"];

const socials = [
  { label: "Instagram", href: "https://instagram.com", short: "IG" },
  { label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX", short: "WA" },
  { label: "Email", href: "mailto:panthersfit@gmail.com", short: "EM" },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="bg-[#060606] relative overflow-hidden">
      {/* Top gradient border */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #ff2d00, #ff6b00, transparent)",
        }}
      />

      {/* Background orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff2d00, transparent)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,45,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,0,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 flex items-center justify-center text-white font-black text-lg"
                style={{
                  background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                  clipPath:
                    "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                }}
              >
                P
              </div>
              <span
                className="text-2xl"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "2px",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Panthers
                </span>
                <span className="text-white ml-1">Fitness</span>
              </span>
            </div>

            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Built for warriors. No shortcuts, no excuses. Just raw discipline
              and real transformation.
            </p>

            {/* Social buttons */}
            <div className="flex gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center text-[10px] font-black text-white/40 rounded-sm transition-all duration-300 hover:text-white hover:bg-red-950/20"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    clipPath:
                      "polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)",
                  }}
                  title={s.label}
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="text-[10px] font-black tracking-[3px] uppercase text-white/25 mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {navLinks.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="group flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors duration-300 capitalize"
                  >
                    <span
                      className="w-0 h-px group-hover:w-4 transition-all duration-300"
                      style={{
                        background: "linear-gradient(90deg, #ff2d00, #ff6b00)",
                      }}
                    />
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact Info */}
          <div>
            <p className="text-[10px] font-black tracking-[3px] uppercase text-white/25 mb-5">
              Find Us
            </p>
            <ul className="space-y-4">
              {[
                { icon: "📍", text: "Panthers FC, Bengaluru, Karnataka" },
                { icon: "📞", text: "+91 98765 43210" },
                { icon: "✉️", text: "panthersfit@gmail.com" },
                { icon: "🕐", text: "Mon–Sat: 5AM – 10PM" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5">{item.icon}</span>
                  <span className="text-sm text-white/40 leading-snug">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/20 tracking-widest uppercase">
            © {new Date().getFullYear()} Panthers Fitness Club. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-white/20 tracking-[2px] uppercase">
              Open Today · 5AM–10PM
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
