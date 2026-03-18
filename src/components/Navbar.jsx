import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navLinks = ["home", "programs", "trainers", "pricing", "contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(255,45,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #ff2d00, #ff6b00, transparent)",
        }}
      />

      {/* DESKTOP NAV — only on lg+ (1024px+) */}
      <div className="hidden lg:grid grid-cols-3 items-center px-10 py-4">
        {/* LEFT — Brand */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div
            className="w-9 h-9 flex items-center justify-center text-white font-black text-base flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
              clipPath:
                "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            P
          </div>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "2px",
            }}
            className="text-2xl whitespace-nowrap"
          >
            <span
              style={{
                background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sam
            </span>
            <span className="text-white ml-1">Fitness</span>
          </span>
        </div>

        {/* CENTER — Nav Links */}
        <ul className="flex justify-center gap-8">
          {navLinks.map((id) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className="relative cursor-pointer text-sm font-semibold tracking-[2px] uppercase text-white/70 hover:text-white transition-colors duration-300 group whitespace-nowrap"
            >
              {id}
              <span
                className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, #ff2d00, #ff6b00)",
                }}
              />
            </li>
          ))}
        </ul>

        {/* RIGHT — CTA */}
        <div className="flex justify-end">
          <button
            onClick={() => scrollToSection("contact")}
            className="relative px-7 py-2.5 text-sm font-bold tracking-[2px] uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,45,0,0.5)] whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
              clipPath:
                "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            Join Now
          </button>
        </div>
      </div>

      {/* MOBILE + TABLET NAV — shown below lg (covers phones + all iPads) */}
      <div className="lg:hidden flex justify-between items-center px-5 sm:px-8 py-4">
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div
            className="w-8 h-8 flex items-center justify-center text-white font-black text-sm flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
              clipPath:
                "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
          >
            P
          </div>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "2px",
            }}
            className="text-xl sm:text-2xl whitespace-nowrap"
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

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 flex-shrink-0"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${
              open ? "w-0 opacity-0" : "w-6"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE + TABLET — Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "rgba(10,10,10,0.98)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Divider */}
        <div
          className="h-px mx-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,45,0,0.5), transparent)",
          }}
        />

        <ul className="px-6 sm:px-10 py-4 space-y-1">
          {navLinks.map((id, i) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex items-center gap-3 cursor-pointer py-3.5 border-b border-white/5 group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span
                className="w-1 h-4 rounded-full transition-all duration-300 group-hover:h-6 flex-shrink-0"
                style={{
                  background: "linear-gradient(180deg, #ff2d00, #ff6b00)",
                }}
              />
              <span className="text-sm font-semibold tracking-[2px] uppercase text-white/60 group-hover:text-white transition-colors duration-300">
                {id}
              </span>
            </li>
          ))}
        </ul>

        <div className="px-6 sm:px-10 pb-6 pt-2">
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full py-4 text-sm font-bold tracking-[2px] uppercase text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,45,0,0.4)] active:scale-95"
            style={{
              background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
              clipPath:
                "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
            }}
          >
            Join Now — Free Trial
          </button>
        </div>
      </div>
    </nav>
  );
}
