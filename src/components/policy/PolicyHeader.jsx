import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PolicyHeader({ icon: Icon, title }) {
  return (
    <div className="flex flex-col items-center pt-8 pb-6 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 mb-6 cursor-pointer"
        >
          <ArrowRight className="w-3.5 h-3.5" />
          العودة للرئيسية
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4"
      >
        <Icon className="w-7 h-7 text-primary" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="text-2xl font-bold text-foreground"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-xs text-muted-foreground mt-2"
      >
        آخر تحديث: مايو ٢٠٢٦
      </motion.p>
    </div>
  );
}