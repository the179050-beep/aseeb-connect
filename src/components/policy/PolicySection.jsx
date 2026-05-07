import { motion } from "framer-motion";

export default function PolicySection({ title, children, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
      className="bg-card/60 border border-border/50 rounded-xl p-5 backdrop-blur-sm"
    >
      <h2 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
          {index + 1}
        </span>
        {title}
      </h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
        {children}
      </div>
    </motion.div>
  );
}