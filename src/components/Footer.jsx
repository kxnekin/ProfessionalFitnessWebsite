const navLinks = ["home", "programs", "trainers", "pricing", "contact"];

const socials = [
  { label: "Instagram", href: "https://instagram.com", short: "IG" },
  { label: "WhatsApp", href: "https://wa.me/9198765432", short: "WA" },
  { label: "Email", href: "mailto:panthersfit@gmail.com", short: "EM" },
];

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="bg-[#060606] relative overflow-hidden">
      {/* Top gradient */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #ff2d00, #ff6b00, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 pt-16 pb-8">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* BRAND */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center text-white font-black text-lg bg-gradient-to-br from-red-600 to-orange-500"></div>
              <span className="text-2xl font-bold">
                <span className="text-red-500">Sam</span> Fitness
              </span>
            </div>

            <p className="text-white/40 text-sm max-w-xs">
              Built for warriors. No shortcuts, no excuses. Just discipline and
              transformation.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-2 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center text-xs font-bold text-white/50 border border-white/10 hover:text-white hover:bg-red-600/20 transition"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <p className="text-xs font-bold text-white/30 mb-5 uppercase">
              Quick Links
            </p>
            <ul className="space-y-3">
              {navLinks.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-white/50 hover:text-white transition capitalize"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs font-bold text-white/30 mb-5 uppercase">
              Contact
            </p>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>📍 Sam Fitness, Bengaluru</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ samFitness@gmail.com</li>
              <li>🕐 Mon–Sat: 5AM – 10PM</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mb-6" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>
            © {new Date().getFullYear()} Sam Fitness Club. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Open Today · 5AM–10PM
          </div>
        </div>

        {/* CREDIT */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://www.linkedin.com/in/sameera-b-b-b53bb8327/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-white/30 hover:text-white transition"
          >
            Designed & Developed by{" "}
            <span className="text-red-500">Sameera</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
