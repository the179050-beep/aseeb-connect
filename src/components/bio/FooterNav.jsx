import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Lock } from "lucide-react";

export default function FooterNav() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="flex flex-col items-center gap-4 mt-10 mb-8 px-4"
    >
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

      <p className="text-[11px] text-muted-foreground/60">
        © {new Date().getFullYear()} عسيب — جميع الحقوق محفوظة
      </p>
    </motion.div>
  );
}