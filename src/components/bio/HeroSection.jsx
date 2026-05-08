import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center pt-14 pb-8 px-4">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl animate-glow"
        style={{ background: "radial-gradient(circle, hsla(36,55%,52%,0.12) 0%, transparent 70%)" }} />

      {/* Brand name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-black text-foreground mb-0.5 tracking-widest"
        style={{ fontFamily: "var(--font-tajawal)" }}
      >
        عسيب
      </motion.h1>

      {/* Subtitle EN */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.45 }}
        className="text-primary font-semibold text-xs tracking-[0.18em] uppercase mb-3"
      >
        Najdi Restaurant
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center gap-2 mb-3"
      >
        <div className="w-8 h-px bg-primary/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
        <div className="w-8 h-px bg-primary/40" />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.45 }}
        className="text-muted-foreground text-sm text-center max-w-xs leading-relaxed"
      >
        التجربة النجدية الأصيلة — أطباق تراثية بلمسة عصرية
      </motion.p>
    </div>
  );
}