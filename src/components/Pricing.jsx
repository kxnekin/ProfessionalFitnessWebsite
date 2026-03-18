const plans = [
  {
    name: "Monthly",
    price: "₹1,500",
    per: "/ month",
    badge: null,
    features: [
      "Full Gym Access",
      "Locker Room",
      "Free WiFi",
      "1 Guest Pass / Month",
    ],
    highlight: false,
  },
  {
    name: "Quarterly",
    price: "₹4,000",
    per: "/ 3 months",
    badge: "Most Popular",
    features: [
      "Full Gym Access",
      "Locker Room + Towel Service",
      "1 Personal Training Session",
      "Diet Consultation",
      "3 Guest Passes",
    ],
    highlight: true,
  },
  {
    name: "Yearly",
    price: "₹12,000",
    per: "/ year",
    badge: "Best Value",
    features: [
      "Full Gym Access 24/7",
      "Unlimited Guest Passes",
      "4 Personal Training Sessions",
      "Monthly Diet Plan",
      "Merchandise Kit",
      "Priority Booking",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-28 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff2d00, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full opacity-15 blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff6b00, transparent)" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,45,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 text-center">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-600/30 px-4 py-1.5 rounded-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-400">
            Membership Plans
          </span>
        </div>

        <h2
          className="text-5xl sm:text-6xl mb-4"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "2px",
          }}
        >
          Choose Your{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Weapon
          </span>
        </h2>
        <p className="text-white/40 text-sm tracking-widest uppercase mb-16">
          No contracts. Cancel anytime. Start today.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Glow on highlight */}
              {plan.highlight && (
                <div
                  className="absolute inset-0 rounded-sm blur-xl opacity-30 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                  }}
                />
              )}

              <div
                className={`relative rounded-sm p-8 border transition-all duration-300 ${
                  plan.highlight
                    ? "border-red-500/60 bg-[#130800]"
                    : "border-white/8 bg-[#0f0f0f] hover:border-red-600/40"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 text-[10px] font-black tracking-[3px] uppercase text-white"
                    style={{
                      background: "linear-gradient(135deg, #ff2d00, #ff6b00)",
                      clipPath:
                        "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <p className="text-[11px] font-bold tracking-[3px] uppercase text-white/40 mb-4">
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-end justify-center gap-1 mb-8">
                  <span
                    className="text-6xl font-black leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      background: plan.highlight
                        ? "linear-gradient(135deg, #ff2d00, #ff6b00)"
                        : "white",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-white/30 text-sm mb-2">{plan.per}</span>
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full mb-6"
                  style={{
                    background: plan.highlight
                      ? "linear-gradient(90deg, transparent, rgba(255,45,0,0.5), transparent)"
                      : "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                  }}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span
                        className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-[10px] font-black text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #ff2d00, #ff6b00)",
                          clipPath:
                            "polygon(3px 0%, 100% 0%, calc(100% - 3px) 100%, 0% 100%)",
                        }}
                      >
                        ✓
                      </span>
                      <span className="text-sm text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3.5 text-sm font-bold tracking-[2px] uppercase transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "text-white hover:shadow-[0_8px_24px_rgba(255,45,0,0.5)]"
                      : "text-white/80 hover:text-white hover:shadow-[0_8px_24px_rgba(255,45,0,0.2)]"
                  }`}
                  style={{
                    background: plan.highlight
                      ? "linear-gradient(135deg, #ff2d00, #ff6b00)"
                      : "transparent",
                    border: plan.highlight
                      ? "none"
                      : "1px solid rgba(255,255,255,0.15)",
                    clipPath:
                      "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                  }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-white/25 text-xs tracking-widest uppercase mt-12">
          All plans include access to Panthers Fitness Club facilities · No
          hidden fees
        </p>
      </div>
    </section>
  );
}
