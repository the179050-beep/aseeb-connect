import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center pt-12 pb-8 px-4">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow" />
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-6"
      >
        <div className="w-28 h-28 rounded-full border-2 border-primary/40 flex items-center justify-center bg-card/80 backdrop-blur-sm shadow-lg shadow-primary/10">
          <img
            src="https://aseeb.com.sa/images/logo.svg"
            alt="شعار عسيب"
            className="w-20 h-20 object-contain"
            width={80}
            height={80}
          />
        </div>
      </motion.div>

      {/* Brand Name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold text-foreground mb-1 tracking-wide"
      >
        عسيب
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-primary font-medium text-sm mb-1"
      >
        Najdi Restaurant
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-muted-foreground text-sm text-center max-w-xs leading-relaxed"
      >
        التجربة النجدية الأصيلة — أطباق تراثية بلمسة عصرية
      </motion.p>
    </div>
  );
}