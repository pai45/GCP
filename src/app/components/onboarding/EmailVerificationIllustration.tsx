import { motion } from "motion/react";

export function EmailVerificationIllustration() {
  return (
    <div className="fixed bottom-8 right-8 pointer-events-none z-0 opacity-80">
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Decorative dotted lines */}
        <motion.line
          x1="20"
          y1="180"
          x2="120"
          y2="180"
          stroke="#fff"
          strokeWidth="2.5"
          strokeDasharray="6 10"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.line
          x1="280"
          y1="120"
          x2="370"
          y2="120"
          stroke="#fff"
          strokeWidth="2.5"
          strokeDasharray="6 10"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
        <motion.line
          x1="40"
          y1="60"
          x2="110"
          y2="60"
          stroke="#fff"
          strokeWidth="2.5"
          strokeDasharray="6 10"
          strokeLinecap="round"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        <motion.line
          x1="290"
          y1="320"
          x2="370"
          y2="320"
          stroke="#fff"
          strokeWidth="2.5"
          strokeDasharray="6 10"
          strokeLinecap="round"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        {/* Curved dotted lines for more engagement */}
        <motion.path
          d="M 340 200 Q 360 230, 350 270"
          stroke="#fff"
          strokeWidth="2.5"
          strokeDasharray="6 10"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M 30 250 Q 50 280, 80 290"
          stroke="#fff"
          strokeWidth="2.5"
          strokeDasharray="6 10"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        />

        {/* Decorative circles */}
        <motion.circle
          cx="140"
          cy="40"
          r="8"
          stroke="#fff"
          strokeWidth="2.5"
          fill="none"
          opacity="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.circle
          cx="340"
          cy="280"
          r="7"
          stroke="#fff"
          strokeWidth="2.5"
          fill="none"
          opacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
        <motion.circle
          cx="90"
          cy="340"
          r="5"
          fill="#fff"
          opacity="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        />
        <motion.circle
          cx="350"
          cy="180"
          r="5"
          fill="#fff"
          opacity="0.4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
        />
        <motion.circle
          cx="25"
          cy="120"
          r="6"
          stroke="#fff"
          strokeWidth="2.5"
          fill="none"
          opacity="0.45"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />

        {/* Decorative plus signs */}
        <motion.g
          opacity="0.5"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <line x1="70" y1="280" x2="70" y2="298" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="61" y1="289" x2="79" y2="289" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
        <motion.g
          opacity="0.45"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <line x1="330" y1="45" x2="330" y2="63" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="321" y1="54" x2="339" y2="54" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
        <motion.g
          opacity="0.4"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <line x1="30" y1="300" x2="30" y2="314" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="23" y1="307" x2="37" y2="307" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>

        {/* Circle with underline */}
        <motion.g
          opacity="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <circle cx="160" cy="360" r="6" stroke="#fff" strokeWidth="2.5" fill="none" />
          <line x1="148" y1="373" x2="172" y2="373" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
        <motion.g
          opacity="0.45"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <circle cx="380" cy="240" r="5" stroke="#fff" strokeWidth="2.5" fill="none" />
          <line x1="370" y1="250" x2="390" y2="250" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>

        {/* Main envelope illustration - larger and centered */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Envelope back rectangle */}
          <rect
            x="120"
            y="150"
            width="160"
            height="120"
            rx="6"
            stroke="#fff"
            strokeWidth="3.5"
            fill="rgba(255,255,255,0.12)"
          />

          {/* Envelope flap - open */}
          <motion.path
            d="M 120 150 L 200 210 L 280 150"
            stroke="#fff"
            strokeWidth="3.5"
            fill="none"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Envelope top flap */}
          <motion.path
            d="M 120 150 L 200 90 L 280 150"
            stroke="#fff"
            strokeWidth="3.5"
            fill="rgba(255,255,255,0.18)"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />

          {/* Letter inside - subtle */}
          <motion.rect
            x="145"
            y="180"
            width="110"
            height="70"
            rx="3"
            fill="rgba(255,255,255,0.3)"
            initial={{ y: 210, opacity: 0 }}
            animate={{ y: 180, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          />
          <motion.line
            x1="160"
            y1="200"
            x2="240"
            y2="200"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          <motion.line
            x1="160"
            y1="215"
            x2="220"
            y2="215"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <motion.line
            x1="160"
            y1="230"
            x2="235"
            y2="230"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
