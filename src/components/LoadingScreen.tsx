import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated circuit lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-primary"
              style={{ top: `${15 + i * 15}%`, left: 0 }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px bg-secondary"
              style={{ left: `${15 + i * 15}%`, top: 0 }}
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
            />
          ))}
        </div>

        {/* Logo text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-wider">
            <span className="text-neon-cyan">CSE</span>
            <span className="text-foreground">CLUBS</span>
          </h1>
          <p className="font-mono text-sm text-muted-foreground mt-2 tracking-[0.3em]">
            INITIALIZING SYSTEM...
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 md:w-80">
          <div className="h-[2px] w-full bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(135 100% 50%), hsl(180 100% 50%))",
                boxShadow: "0 0 10px hsl(180 100% 50% / 0.5)",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-mono text-xs text-primary mt-2 text-right">
            {progress}%
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
