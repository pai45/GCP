import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { AuthShell } from "./AuthShell";

interface OTPVerificationProps {
  email: string;
  onVerify: () => void;
  onBack: () => void;
  embedded?: boolean;
}

export function OTPVerification({ email, onVerify, onBack, embedded = false }: OTPVerificationProps) {
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

  const content = (
    <>
      <div className={embedded ? "w-full" : "relative z-10 w-full max-w-[500px] px-6"}>
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
    </>
  );

  if (embedded) return content;
  return <AuthShell layout="centered">{content}</AuthShell>;
}
