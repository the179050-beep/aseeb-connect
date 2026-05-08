import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function BioLink({ icon: Icon, label, href, delay = 0 }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className="group flex items-center gap-3.5 w-full px-4 py-3.5 rounded-xl border border-border/50 backdrop-blur-sm cursor-pointer transition-all duration-200 hover:border-primary/50"
      style={{
        background: "linear-gradient(135deg, hsla(25,15%,14%,0.95) 0%, hsla(28,18%,16%,0.95) 100%)",
      }}
    >
      {/* Icon */}
      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
        style={{ background: "hsla(36,55%,52%,0.12)", border: "1px solid hsla(36,55%,52%,0.2)" }}>
        <Icon className="w-4.5 h-4.5 text-primary" style={{ width: "18px", height: "18px" }} />
      </div>

      {/* Label */}
      <span className="flex-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
        {label}
      </span>

      {/* Arrow */}
      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors duration-200" />
    </motion.a>
  );
}