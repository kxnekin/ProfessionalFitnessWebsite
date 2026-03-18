import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbxzGwDzJjfPvBbNftazEIHomg2GTLYdCA7ZrSvT0KVkLblpAxM-ygieEHTsQAx0No7ROA/exec";

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        }),
      });

      setSuccess("Message sent! We'll contact you soon 💪");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(""), 5000);
    } catch {
      setError("Something went wrong. Please try again.");
      setTimeout(() => setError(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#0f0f0f] border border-white/[0.08] text-white text-sm placeholder-white/25 px-5 py-4 rounded-sm outline-none focus:border-red-600/60 focus:bg-[#130800] transition-all duration-300";

  return (
    <section
      id="contact"
      className="py-28 bg-[#080808] relative overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff2d00, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full opacity-10 blur-[80px] pointer-events-none"
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

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-600/30 px-4 py-1.5 rounded-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-400">
              Get In Touch
            </span>
          </div>
          <h2
            className="text-5xl sm:text-6xl mb-4"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "2px",
            }}
          >
            Start Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Journey
            </span>
          </h2>
          <p className="text-white/40 text-sm tracking-widest uppercase">
            Drop us a message. We'll get back to you within 24 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT — Info */}
          <div className="space-y-8">
            <p className="text-white/50 text-sm leading-relaxed">
              Ready to transform your body and life? Fill out the form and one
              of our coaches will reach out to build your personalized plan.
            </p>

            {[
              {
                icon: "📍",
                label: "Location",
                value: "Panthers Fitness Club, Bengaluru",
              },
              { icon: "📞", label: "Phone", value: "+91 98765 43210" },
              { icon: "🕐", label: "Hours", value: "Mon–Sat: 5AM – 10PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-base"
                  style={{
                    background: "rgba(255,45,0,0.1)",
                    border: "1px solid rgba(255,45,0,0.2)",
                    clipPath:
                      "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/30 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm text-white/70">{item.value}</p>
                </div>
              </div>
            ))}

            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,45,0,0.4), transparent)",
              }}
            />

            <div>
              <p className="text-[10px] font-bold tracking-[3px] uppercase text-white/25 mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {["IG", "FB", "YT"].map((s) => (
                  <button
                    key={s}
                    className="w-9 h-9 text-[11px] font-black text-white/50 rounded-sm transition-all duration-300 hover:text-white hover:bg-red-950/20"
                    style={{
                      border: "1px solid rgba(255,255,255,0.10)",
                      clipPath:
                        "polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-sm blur-xl opacity-20 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
              }}
            />

            <form
              onSubmit={handleSubmit}
              className="relative bg-[#0f0f0f] border border-white/[0.06] rounded-sm p-8 space-y-4"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-sm"
                style={{
                  background:
                    "linear-gradient(90deg, #ff2d00, #ff6b00, transparent)",
                }}
              />

              {success && (
                <div className="flex items-center gap-3 bg-green-950/40 border border-green-500/40 text-green-400 px-4 py-3 rounded-sm text-xs font-semibold tracking-wide">
                  <span>✓</span> {success}
                </div>
              )}
              {error && (
                <div className="flex items-center gap-3 bg-red-950/40 border border-red-500/40 text-red-400 px-4 py-3 rounded-sm text-xs font-semibold tracking-wide">
                  <span>✕</span> {error}
                </div>
              )}

              <div>
                <label className="block text-[10px] font-bold tracking-[2px] uppercase text-white/30 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              {/* ✅ NEW: Email Field */}
              <div>
                <label className="block text-[10px] font-bold tracking-[2px] uppercase text-white/30 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-[2px] uppercase text-white/30 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-[2px] uppercase text-white/30 mb-2">
                  Your Fitness Goal
                </label>
                <textarea
                  name="message"
                  placeholder="e.g. I want to lose 10kg in 3 months..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ resize: "none" }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-sm font-black tracking-[3px] uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,45,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: loading
                    ? "rgba(255,45,0,0.4)"
                    : "linear-gradient(135deg, #ff2d00, #ff6b00)",
                  clipPath:
                    "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                }}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
