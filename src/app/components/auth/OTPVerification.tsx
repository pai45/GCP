import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import PineLabsLogo from "../../../imports/Frame2-1/Frame2-27-25";
import { EmailVerificationIllustration } from "../onboarding/EmailVerificationIllustration";

interface OTPVerificationProps {
  email: string;
  onVerify: () => void;
  onBack: () => void;
}

export function OTPVerification({ email, onVerify, onBack }: OTPVerificationProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, idx) => {
      if (idx < 6) newOtp[idx] = char;
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  const handleResend = () => {
    setTimer(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const [verifying, setVerifying] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const [shineKey, setShineKey] = useState(0);

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

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifying) return;
    if (otp.every((digit) => digit !== "")) {
      setVerifying(true);
      setTimeout(() => {
        setVerifying(false);
        onVerify();
      }, 950);
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <EmailVerificationIllustration />
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
      <div className="absolute top-0 left-0 right-0 z-20 px-6 py-4 sm:px-8 sm:py-6">
        <div className="w-32 sm:w-40">
          <PineLabsLogo />
        </div>
      </div>

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
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.3; filter: blur(0px); }
            50% { opacity: 0.7; filter: blur(1px); }
          }
        `}</style>
      </div>

      <div className="relative z-10 w-full max-w-[500px] px-6">
        <div className="bg-white rounded-[20px] shadow-2xl p-10">
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#667085] hover:text-[#181d27] mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-[14px] font-medium">Back</span>
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-[36px] leading-[48px] font-bold text-[#181d27] mb-2">
              Verify Your Email
            </h2>
            <p className="text-[16px] text-[#4a5565]">
              We've sent a 6-digit code to
            </p>
            <p className="text-[16px] text-[#181d27] font-semibold mt-1">{email}</p>
          </div>

          {/* OTP Form */}
          <form onSubmit={handleVerify} className="space-y-6">
            {/* OTP Input boxes */}
            <div>
              <label className="block text-[14px] font-semibold text-[#414651] mb-3">
                Enter verification code
              </label>
              <div className="flex gap-3 justify-between">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-full aspect-square text-center text-[24px] font-semibold bg-[#fafafa] border-2 border-[#d5d7da] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005656] focus:border-transparent transition-all"
                    style={{
                      borderColor: digit ? "#005656" : "#d5d7da"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Timer / Resend */}
            <div className="text-center">
              {!canResend ? (
                <p className="text-[14px] text-[#6a7282]">
                  Resend code in{" "}
                  <span className="font-semibold text-[#181d27]">
                    {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
                  </span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-[14px] text-[#005656] font-semibold hover:underline"
                >
                  Resend verification code
                </button>
              )}
            </div>

            {/* Verify button */}
            <motion.button
              type="submit"
              disabled={!isComplete || verifying}
              onPointerDown={(e) => { if (isComplete && !verifying) spawnRipple(e); }}
              whileHover={
                !isComplete || verifying
                  ? undefined
                  : {
                      y: -2,
                      backgroundColor: "#004444",
                      boxShadow:
                        "0 0 0 1px rgba(208,242,85,0.18), 0 8px 24px -6px rgba(0,86,86,0.45), 0 0 28px 2px rgba(208,242,85,0.18)",
                    }
              }
              whileTap={
                !isComplete || verifying
                  ? undefined
                  : {
                      y: 0,
                      scale: 0.97,
                      boxShadow: "0 4px 12px -4px rgba(0,86,86,0.35)",
                    }
              }
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className="relative overflow-hidden w-full bg-[#005656] text-white py-3 px-6 rounded-xl font-semibold text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ WebkitTapHighlightColor: "transparent", willChange: "transform" }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0) 100%)",
                }}
              />
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
                {verifying ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify & Continue"
                )}
              </span>
            </motion.button>
          </form>

          {/* Help text */}
          <p className="text-[13px] text-[#6a7282] text-center mt-6">
            Didn't receive the code?{" "}
            <button className="text-[#005656] font-medium hover:underline">
              Check spam folder
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
