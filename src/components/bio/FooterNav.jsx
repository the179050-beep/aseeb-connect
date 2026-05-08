import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Lock } from "lucide-react";

export default function FooterNav() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.5 }}
      className="flex flex-col items-center gap-4 mt-10 mb-8 px-4"
    >
      {/* Divider */}
      <div className="flex items-center gap-3 w-full max-w-xs">
        <div className="flex-1 h-px bg-border/40" />
        <svg className="w-3 h-3 opacity-25" viewBox="0 0 24 24" fill="hsl(36,55%,52%)">
          <polygon points="12,3 21,21 3,21" />
        </svg>
        <div className="flex-1 h-px bg-border/40" />
      </div>

      <div className="flex items-center gap-6">
        <Link
          to="/privacy"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
        >
          <Shield className="w-3.5 h-3.5" />
          سياسة الخصوصية
        </Link>
        <span className="w-1 h-1 rounded-full bg-border" />
        <Link
          to="/security"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
        >
          <Lock className="w-3.5 h-3.5" />
          قواعد الأمان
        </Link>
      </div>

      <p className="text-[11px] text-muted-foreground/50 tracking-wide">
        © {new Date().getFullYear()} عسيب — جميع الحقوق محفوظة
      </p>
    </motion.div>
  );
}