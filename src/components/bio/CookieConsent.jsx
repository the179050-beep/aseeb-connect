import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("aseeb_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("aseeb_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("aseeb_cookie_consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto"
        >
          <div className="bg-card/95 border border-border/70 backdrop-blur-md rounded-2xl p-4 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-foreground mb-1">
                  نستخدم ملفات تعريف الارتباط
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  نستخدم الكوكيز لتحسين تجربتك وتحليل أداء الموقع. بالمتابعة، توافق على{" "}
                  <Link to="/privacy" className="text-primary underline underline-offset-2 hover:no-underline" onClick={() => setVisible(false)}>
                    سياسة الخصوصية
                  </Link>
                  .
                </p>
              </div>
              <button
                onClick={decline}
                aria-label="رفض"
                className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150 cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={accept}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity duration-150 cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                قبول الكل
              </button>
              <button
                onClick={decline}
                className="flex-1 py-2.5 rounded-xl bg-muted text-muted-foreground text-xs font-medium hover:bg-secondary hover:text-foreground transition-colors duration-150 cursor-pointer"
              >
                رفض
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}