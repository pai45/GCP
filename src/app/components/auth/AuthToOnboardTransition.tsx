import { motion } from "motion/react";
import vectorMark from "../../../imports/Vector.png";

export function AuthToOnboardTransition() {
  return (
    <motion.div
      className="fixed inset-0 z-[150] pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Subtle secondary-tinted backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(0,86,86,0.03) 0%, rgba(0,86,86,0.015) 45%, rgba(255,255,255,0) 80%)`,
          backgroundColor: "#ffffff",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.2, times: [0, 0.15, 0.7, 1], ease: "easeInOut" }}
      />

      {/* Mark — travels from bottom-left to top-right with ease-in-out */}
      <motion.div
        className="absolute"
        style={{ width: 520, height: 520, left: 0, top: 0 }}
        initial={{ x: "-40vw", y: "85vh", scale: 0.85, rotate: -8, opacity: 0 }}
        animate={{
          x: ["-40vw", "30vw", "100vw"],
          y: ["85vh", "30vh", "-30vh"],
          scale: [0.85, 1, 1.05],
          rotate: [-8, 0, 6],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 1.2,
          times: [0, 0.5, 1],
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        <img
          src={vectorMark}
          alt=""
          aria-hidden
          className="w-full h-full object-contain select-none"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
