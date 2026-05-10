import { motion } from "motion/react";

export function DocumentIllustration() {
  return (
    <div className="fixed bottom-12 right-12 pointer-events-none z-10">
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dotted curved lines flowing from top right */}
        <motion.path
          d="M 280 20 Q 220 50, 180 100 Q 140 150, 120 210"
          stroke="#005656"
          strokeWidth="3"
          strokeDasharray="6 12"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />

        <motion.path
          d="M 260 10 Q 210 40, 170 90 Q 130 140, 110 200"
          stroke="#005656"
          strokeWidth="2.5"
          strokeDasharray="5 10"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 0.5, ease: "easeOut" }}
        />

        {/* Email envelope - larger */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Envelope body */}
          <rect
            x="20"
            y="220"
            width="90"
            height="65"
            rx="4"
            stroke="#005656"
            strokeWidth="3"
            fill="#fff"
            opacity="0.6"
          />

          {/* Envelope flap */}
          <path
            d="M 20 220 L 65 252 L 110 220"
            stroke="#005656"
            strokeWidth="3"
            fill="none"
            strokeLinejoin="round"
            opacity="0.6"
          />
        </motion.g>

        {/* Small decorative dots */}
        <motion.circle
          cx="15"
          cy="180"
          r="3"
          fill="#005656"
          opacity="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.1 }}
        />
        <motion.circle
          cx="30"
          cy="170"
          r="3"
          fill="#005656"
          opacity="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
        <motion.circle
          cx="15"
          cy="160"
          r="3"
          fill="#005656"
          opacity="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.3 }}
        />
      </svg>
    </div>
  );
}
