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
      className="group flex items-center gap-3 w-full px-5 py-4 rounded-xl bg-card/80 border border-border/60 backdrop-blur-sm hover:border-primary/50 hover:bg-accent/60 transition-colors duration-200 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <span className="flex-1 text-sm font-medium text-foreground">{label}</span>
      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
    </motion.a>
  );
}