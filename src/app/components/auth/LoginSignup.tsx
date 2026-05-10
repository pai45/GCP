import { useState } from "react";
import { Eye, EyeOff, Check, Wallet, Zap, Gift, Shield, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import pineLabsLogoImg from "../../../imports/image.png";

interface LoginSignupProps {
  onContinue: (email: string, password: string, isSignup: boolean) => void;
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export function LoginSignup({ onContinue }: LoginSignupProps) {
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [email, setEmail] = useState("john.doe@company.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const [shineKey, setShineKey] = useState(0);

  const hasMinLength = password.length >= 8;
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const isPasswordValid = hasMinLength && hasLetters && hasNumbers;

  const spawnRipple = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 1.4;
    const id = Date.now() + Math.random();
    setRipples((r) => [...r, { id, x, y, size }]);
    setShineKey((k) => k + 1);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (email && (mode === "login" || (mode === "signup" && isPasswordValid))) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        onContinue(email, password, mode === "signup");
      }, 950);
    }
  };

  const features = [
    { Icon: Wallet, text: "Digital Wallet Integration" },
    { Icon: Zap, text: "Instant Settlements" },
    { Icon: Gift, text: "Gift Cards & Vouchers" },
    { Icon: Shield, text: "Enterprise-grade Security" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background - matching Figma design */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(140.342deg, rgb(6, 18, 18) 8.4861%, rgb(10, 31, 31) 50%, rgb(13, 32, 32) 91.514%)"
        }}
      />

      {/* Blur layer */}
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{
          background: "rgba(6, 18, 18, 0.15)"
        }}
      />

      {/* Mask Reveal Transition Layers - More Subtle */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(13, 32, 32, 0.25) 0%, rgba(10, 31, 31, 0.2) 50%, rgba(6, 18, 18, 0.18) 100%)",
          filter: "blur(100px)",
        }}
        animate={{ clipPath: ["circle(0% at 20% 80%)", "circle(150% at 20% 80%)", "circle(0% at 20% 80%)"] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 70%, rgba(0, 86, 86, 0.12) 0%, rgba(0, 120, 110, 0.06) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ clipPath: ["circle(0% at 15% 85%)", "circle(140% at 15% 85%)", "circle(0% at 15% 85%)"] }}
        transition={{ duration: 14, delay: 0.3, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(209, 242, 86, 0.04) 0%, rgba(180, 255, 160, 0.02) 30%, transparent 60%)",
          filter: "blur(100px)",
        }}
        animate={{ clipPath: ["circle(0% at 25% 75%)", "circle(160% at 25% 75%)", "circle(0% at 25% 75%)"] }}
        transition={{ duration: 15, delay: 0.6, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(220deg, rgba(60, 200, 170, 0.04) 0%, rgba(20, 160, 140, 0.025) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ clipPath: ["polygon(0% 100%, 0% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", "polygon(0% 100%, 0% 100%, 0% 100%)"] }}
        transition={{ duration: 13, delay: 0.4, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 70% 30%, rgba(209, 242, 86, 0.045) 0%, rgba(180, 255, 160, 0.03) 25%, transparent 50%)",
          filter: "blur(100px)",
        }}
        animate={{ clipPath: ["circle(0% at 80% 20%)", "circle(145% at 80% 20%)", "circle(0% at 80% 20%)"] }}
        transition={{ duration: 14.5, delay: 0.8, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(310deg, rgba(0, 140, 130, 0.05) 0%, rgba(0, 86, 86, 0.035) 50%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ clipPath: ["polygon(100% 0%, 100% 0%, 100% 0%)", "polygon(0% 0%, 100% 0%, 100% 100%)", "polygon(100% 0%, 100% 0%, 100% 0%)"] }}
        transition={{ duration: 12.5, delay: 0.5, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 40% 60%, rgba(60, 200, 170, 0.04) 0%, rgba(209, 242, 86, 0.025) 35%, transparent 65%)",
          filter: "blur(100px)",
        }}
        animate={{ clipPath: ["circle(0% at 50% 50%)", "circle(155% at 50% 50%)", "circle(0% at 50% 50%)"] }}
        transition={{ duration: 16, delay: 0.2, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(209, 242, 86, 0.06) 0%, transparent 100%)"
        }}
      />

      {/* Ambient animated blobs (calm, low-intensity) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[720px] h-[720px] rounded-full"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,140,130,0.12) 0%, rgba(0,86,86,0) 70%)",
          filter: "blur(110px)",
          boxShadow: "0 0 80px 20px rgba(0,140,130,0.08), 0 0 120px 40px rgba(0,86,86,0.04)",
        }}
        animate={{ x: [0, 50, 0], y: [0, 20, 0], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/4 right-[-12%] w-[640px] h-[640px] rounded-full"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(60,200,170,0.11) 0%, rgba(20,160,140,0) 70%)",
          filter: "blur(120px)",
          boxShadow: "0 0 90px 25px rgba(60,200,170,0.1), 0 0 130px 45px rgba(20,160,140,0.05)",
        }}
        animate={{ x: [0, -40, 0], y: [0, 25, 0], opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[2%] w-[560px] h-[560px] rounded-full"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(209,242,86,0.1) 0%, rgba(209,242,86,0) 70%)",
          filter: "blur(120px)",
          boxShadow: "0 0 85px 22px rgba(209,242,86,0.09), 0 0 125px 42px rgba(209,242,86,0.05)",
        }}
        animate={{ x: [0, 40, 0], y: [0, -20, 0], opacity: [0.09, 0.15, 0.09] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      {/* Soft moving color wash behind heading (drives the text color shift) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute hidden lg:block"
        style={{
          left: "-5%",
          top: "10%",
          width: "65%",
          height: "65%",
          backgroundImage:
            "linear-gradient(110deg, rgba(120,220,200,0.22) 0%, rgba(180,255,160,0.25) 33%, rgba(255,220,120,0.22) 66%, rgba(120,220,200,0.22) 100%)",
          backgroundSize: "300% 100%",
          filter: "blur(110px)",
          opacity: 0.18,
          borderRadius: "50%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], x: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle diagonal light sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-[80%]"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(180,255,200,0.025) 35%, rgba(209,242,86,0.06) 50%, rgba(180,255,200,0.025) 65%, rgba(255,255,255,0) 100%)",
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
        initial={{ x: "-60%", opacity: 0 }}
        animate={{
          x: ["-60%", "-20%", "30%", "120%", "120%"],
          opacity: [0, 0.08, 0.12, 0, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.1, 0.18, 0.3, 1],
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Floating fintech shapes (parallax depth) */}
      {[
        { left: "8%", top: "18%", w: 120, h: 70, radius: 14, opacity: 0.05, dur: 20, delay: 0, drift: 12 },
        { left: "22%", top: "62%", w: 90, h: 90, radius: 999, opacity: 0.04, dur: 18, delay: 1.2, drift: 10 },
        { left: "38%", top: "30%", w: 70, h: 44, radius: 10, opacity: 0.06, dur: 16, delay: 0.6, drift: 8 },
        { left: "55%", top: "78%", w: 140, h: 80, radius: 16, opacity: 0.035, dur: 22, delay: 2, drift: 14 },
        { left: "68%", top: "12%", w: 60, h: 60, radius: 999, opacity: 0.045, dur: 17, delay: 0.4, drift: 10 },
        { left: "82%", top: "55%", w: 110, h: 64, radius: 14, opacity: 0.04, dur: 19, delay: 1.6, drift: 12 },
        { left: "12%", top: "82%", w: 80, h: 50, radius: 12, opacity: 0.05, dur: 21, delay: 0.9, drift: 16 },
        { left: "46%", top: "8%", w: 50, h: 50, radius: 999, opacity: 0.03, dur: 15, delay: 2.4, drift: 8 },
      ].map((s, i) => (
        <motion.div
          key={`fx-shape-${i}`}
          aria-hidden
          className="pointer-events-none absolute hidden md:block"
          style={{
            left: s.left,
            top: s.top,
            width: s.w,
            height: s.h,
            borderRadius: s.radius,
            border: "1px solid rgba(209,242,86,0.09)",
            backgroundColor: "rgba(255,255,255,0.008)",
            backdropFilter: "blur(2px)",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -s.drift, 0],
            opacity: [s.opacity * 0.7, s.opacity, s.opacity * 0.7],
          }}
          transition={{ duration: s.dur, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: s.delay }}
        />
      ))}

      {/* Subtle network/grid pan */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(209,242,86,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(209,242,86,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)",
          filter: "blur(0.5px)",
          opacity: 0.3,
        }}
        animate={{ backgroundPosition: ["0px 0px", "60px 0px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Logo header */}
      <header className="absolute top-0 left-0 right-0 z-20 py-4 sm:py-6">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <img
            src={pineLabsLogoImg}
            alt="Pine Labs"
            className="h-8 sm:h-9 w-auto select-none"
            draggable={false}
          />
        </div>
      </header>

      {/* Bottom gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(209, 242, 86, 0.35) 50%, rgba(0, 0, 0, 0) 100%)",
          animation: "pulseGlow 4s ease-in-out infinite",
          opacity: 0.3
        }}
      >
        <style>{`
          @keyframes secondaryShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.3; filter: blur(0px); }
            50% { opacity: 0.7; filter: blur(1px); }
          }
          @keyframes borderShimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .feature-card {
            position: relative;
            isolation: isolate;
            transition: transform 200ms ease-out, box-shadow 200ms ease-out, background-color 200ms ease-out;
          }
          .feature-card::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 1rem;
            padding: 1px;
            background: linear-gradient(120deg, rgba(209,242,86,0) 0%, rgba(209,242,86,0.55) 25%, rgba(180,255,180,0.35) 50%, rgba(209,242,86,0.55) 75%, rgba(209,242,86,0) 100%);
            background-size: 200% 200%;
            -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
                    mask-composite: exclude;
            opacity: 0.3;
            animation: borderShimmer 5s linear infinite;
            transition: opacity 200ms ease-out;
            pointer-events: none;
          }
          .feature-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 30px -12px rgba(0,0,0,0.5);
            background-color: rgba(255,255,255,0.07);
          }
          .feature-card:hover::before { opacity: 0.55; }
          .feature-card .icon-wrap { transition: background-color 200ms ease-out; }
          .feature-card:hover .icon-wrap { background-color: rgba(209,242,86,0.32); }
          .auth-input { transition: border-color 180ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 180ms cubic-bezier(0.4, 0, 0.2, 1); }
          .auth-input:focus { border-color: #005656; }
          .eye-btn { transition: opacity 180ms ease-out; opacity: 0.75; }
          .eye-btn:hover { opacity: 1; }
        `}</style>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-6 flex gap-20 items-center">
        {/* Left side - Marketing content */}
        <div className="flex-1 hidden lg:flex flex-col gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: easeOut }}
            className="inline-flex items-center justify-center px-[18px] py-[10px] bg-[rgba(209,242,86,0.1)] border border-[rgba(209,242,86,0.3)] rounded-[20px] self-start"
          >
            <p className="text-[#d1f256] text-[15px] font-semibold">Trusted by 1000+ Merchants</p>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.65, ease: easeOut }}
          >
            <h1 className="text-[60px] leading-[72px] font-bold text-white" style={{ mixBlendMode: "screen" }}>Power Your</h1>
            <h1 className="text-[60px] leading-[72px] font-bold text-[#d1f256]" style={{ mixBlendMode: "screen" }}>Business Growth</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5, ease: easeOut }}
            className="text-[16px] max-w-[550px] text-[rgba(255,255,255,0.7)]"
            style={{ mixBlendMode: "screen" }}
          >
            Join the leading payment platform designed for modern businesses. Accept payments, manage transactions, and grow revenue seamlessly.
          </motion.p>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-4 max-w-[560px]">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + idx * 0.12, duration: 0.45, ease: easeOut }}
                className="relative flex gap-3 items-center p-4 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden isolate"
              >
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    padding: 1,
                    backgroundImage:
                      "linear-gradient(120deg, rgba(209,242,86,0) 0%, rgba(209,242,86,0.7) 25%, rgba(180,255,180,0.5) 50%, rgba(209,242,86,0.7) 75%, rgba(209,242,86,0) 100%)",
                    backgroundSize: "200% 200%",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    opacity: 0.45
                  }}
                  animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: idx * 0.4 }}
                />
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(209,242,86,0.12) 0%, rgba(209,242,86,0) 65%)",
                    filter: "blur(16px)"
                  }}
                  animate={{ opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                />
                <motion.div
                  className="icon-wrap w-10 h-10 bg-[rgba(209,242,86,0.2)] rounded-[10px] flex items-center justify-center relative z-10"
                  animate={{ backgroundColor: ["rgba(209,242,86,0.18)", "rgba(209,242,86,0.32)", "rgba(209,242,86,0.18)"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                >
                  <feature.Icon size={20} className="text-[#d1f256]" />
                </motion.div>
                <p className="text-[16px] text-[rgba(255,255,255,0.8)] relative z-10">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side - Auth form */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.65, ease: easeOut }}
          className="w-full lg:w-[500px] bg-white rounded-[20px] shadow-2xl p-10"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.45, ease: easeOut }}
            className="mb-6"
          >
            <h2 className="text-[36px] leading-[48px] font-bold text-[#181d27] mb-2">
              {mode === "signup" ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-[16px] text-[#4a5565]">
              {mode === "signup"
                ? "Get started with your Pine Labs business account"
                : "Log in to your Pine Labs business account"
              }
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.45, ease: easeOut }}
            className="relative bg-[#f5f5f5] border border-[#e2e8f0] rounded-[15px] p-[5px] flex gap-1 mb-6"
          >
            {(["signup", "login"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`relative flex-1 py-2 px-6 rounded-[10px] text-[15px] font-semibold transition-colors ${
                  mode === m ? "text-[#181d27]" : "text-[#717680]"
                }`}
              >
                {mode === m && (
                  <motion.span
                    layoutId="auth-mode-pill"
                    className="absolute inset-0 bg-white rounded-[10px] shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{m === "signup" ? "Sign Up" : "Log In"}</span>
              </button>
            ))}
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email input */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.4, ease: easeOut }}
            >
              <label className="flex gap-1 text-[14px] font-semibold text-[#414651] mb-2">
                Corporate Email Address
                <span className="text-[#d92d20]">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@company.com"
                className="auth-input w-full px-4 py-2.5 bg-[#fafafa] border border-[#d5d7da] rounded-lg text-[16px] text-[#181d27] focus:outline-none focus:ring-2 focus:ring-[#005656] focus:border-transparent"
                required
              />
            </motion.div>

            {/* Password input */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.74, duration: 0.4, ease: easeOut }}
            >
              <label className="flex gap-1 text-[14px] font-semibold text-[#414651] mb-2">
                {mode === "signup" ? "Create your password" : "Password"}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="auth-input w-full px-4 py-2.5 bg-[#fafafa] border border-[#d5d7da] rounded-lg text-[16px] text-[#181d27] focus:outline-none focus:ring-2 focus:ring-[#005656] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-btn absolute right-4 top-1/2 -translate-y-1/2 text-[#252B37]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>

            {/* Password requirements (only for signup) */}
            <AnimatePresence>
              {mode === "signup" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="bg-[#f9fafb] rounded-[10px] p-3 space-y-2 overflow-hidden"
                >
                  <PasswordRequirement met={hasMinLength} text="At least 8 characters" />
                  <PasswordRequirement met={hasLetters} text="Contains letters" />
                  <PasswordRequirement met={hasNumbers} text="Contains numbers" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={(mode === "signup" && !isPasswordValid) || submitting}
              onPointerDown={(e) => { if (!((mode === "signup" && !isPasswordValid) || submitting)) spawnRipple(e); }}
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
              }}
              whileHover={
                ((mode === "signup" && !isPasswordValid) || submitting)
                  ? undefined
                  : {
                      y: -2,
                      backgroundColor: "#004444",
                      boxShadow:
                        "0 0 0 1px rgba(208,242,85,0.18), 0 8px 24px -6px rgba(0,86,86,0.45), 0 0 28px 2px rgba(208,242,85,0.18)",
                    }
              }
              whileTap={
                ((mode === "signup" && !isPasswordValid) || submitting)
                  ? undefined
                  : {
                      y: 0,
                      scale: 0.97,
                      boxShadow: "0 4px 12px -4px rgba(0,86,86,0.35)",
                    }
              }
              transition={{ delay: submitting ? 0 : 0.82, duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className="submit-btn relative overflow-hidden w-full bg-[#005656] text-white py-3 px-6 rounded-xl font-semibold text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ WebkitTapHighlightColor: "transparent", willChange: "transform" }}
            >
              {/* Glass top highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0) 100%)",
                }}
              />
              {/* Shine sweep */}
              {shineKey > 0 && (
                <motion.span
                  key={shineKey}
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0"
                  initial={{ x: "-120%", opacity: 0.2 }}
                  animate={{ x: "180%", opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    width: "60%",
                    background:
                      "linear-gradient(75deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)",
                    filter: "blur(2px)",
                  }}
                />
              )}
              {/* Ripples */}
              {ripples.map((r) => (
                <motion.span
                  key={r.id}
                  aria-hidden
                  className="pointer-events-none absolute rounded-full"
                  initial={{ opacity: 0.35, scale: 0 }}
                  animate={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    left: r.x - r.size / 2,
                    top: r.y - r.size / 2,
                    width: r.size,
                    height: r.size,
                    background:
                      "radial-gradient(circle, rgba(208,242,85,0.55) 0%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0) 70%)",
                  }}
                />
              ))}
              <span className="relative z-10 inline-flex items-center justify-center gap-2">
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    {mode === "signup" ? "Creating account..." : "Logging in..."}
                  </>
                ) : (
                  mode === "signup" ? "Create Account" : "Log In"
                )}
              </span>
            </motion.button>

            {/* Terms */}
            {mode === "signup" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.4, ease: easeOut }}
                className="text-[13px] text-[#6a7282] text-center leading-5"
              >
                By creating an account, you agree to our{" "}
                <span className="text-[#364153] underline cursor-pointer">Terms of Service</span>
                {" and "}
                <span className="text-[#364153] underline cursor-pointer">Privacy Policy</span>
              </motion.p>
            )}

            {mode === "login" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.4, ease: easeOut }}
                className="text-center"
              >
                <a href="#" className="text-[#005656] text-[14px] font-medium hover:underline">
                  Forgot password?
                </a>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function PasswordRequirement({ met, text }: { met: boolean; text: string }) {
  return (
    <div className="flex gap-2.5 items-center">
      <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center transition-colors ${
        met ? "bg-[#a9efc5]" : "bg-[#e5e7eb]"
      }`}>
        {met && <Check size={13} className="text-[#079455]" strokeWidth={2.5} />}
      </div>
      <p className={`text-[14px] ${met ? "text-[#079455]" : "text-[#6b7280]"}`}>{text}</p>
    </div>
  );
}
