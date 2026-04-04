import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Shield, Code } from "lucide-react";
import { Link } from "react-router-dom";

const movingWordTransition = {
  duration: 6.5,
  ease: "easeInOut" as const,
  times: [0, 0.22, 0.36, 0.44, 0.76, 1],
};

type SlotPoint = {
  left: number;
  top: number;
};

const Index = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const topSlotRef = useRef<HTMLSpanElement>(null);
  const bottomSlotRef = useRef<HTMLSpanElement>(null);
  const [slots, setSlots] = useState<{ top: SlotPoint; bottom: SlotPoint } | null>(null);

  useEffect(() => {
    const updateSlots = () => {
      if (!titleRef.current || !topSlotRef.current || !bottomSlotRef.current) {
        return;
      }

      const containerRect = titleRef.current.getBoundingClientRect();
      const topRect = topSlotRef.current.getBoundingClientRect();
      const bottomRect = bottomSlotRef.current.getBoundingClientRect();

      setSlots({
        top: {
          left: topRect.left - containerRect.left + topRect.width / 2,
          top: topRect.top - containerRect.top + topRect.height / 2,
        },
        bottom: {
          left: bottomRect.left - containerRect.left + bottomRect.width / 2,
          top: bottomRect.top - containerRect.top + bottomRect.height / 2,
        },
      });
    };

    updateSlots();
    window.addEventListener("resize", updateSlots);

    return () => {
      window.removeEventListener("resize", updateSlots);
    };
  }, []);

  return (
    <div className="relative">
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden circuit-bg">
        <div className="absolute inset-0 bg-background/70" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px w-full"
              style={{
                top: `${20 + i * 15}%`,
                background: "linear-gradient(90deg, transparent, hsl(180 100% 50% / 0.1), transparent)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 font-heading text-[10px] uppercase tracking-[0.28em] text-primary sm:mb-8 sm:text-xs md:text-sm md:tracking-[0.4em]"
          >
            Department of Computer Science & Engineering
          </motion.p>

          <div className="relative mx-auto h-[220px] w-full max-w-[980px] sm:h-[280px] md:h-[340px]">
            <div ref={titleRef} className="absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2">
              <div className="relative grid w-fit grid-cols-[auto_auto] gap-x-3 gap-y-3 sm:gap-x-4 md:gap-x-5 md:gap-y-5">
                <span
                  ref={topSlotRef}
                  className="pointer-events-none select-none opacity-0 font-heading text-4xl font-black sm:text-5xl md:text-7xl lg:text-8xl"
                >
                  Script
                </span>
                <h1 className="font-heading text-4xl font-black text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
                  Knights
                </h1>

                <span
                  ref={bottomSlotRef}
                  className="pointer-events-none select-none opacity-0 font-heading text-4xl font-black sm:text-5xl md:text-7xl lg:text-8xl"
                >
                  Script
                </span>
                <h1 className="font-heading text-4xl font-black text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
                  Soldiers
                </h1>

                {slots && (
                  <>
                    <motion.span
                      className="absolute font-heading text-4xl font-black text-neon-cyan sm:text-5xl md:text-7xl lg:text-8xl"
                      initial={{ opacity: 0, left: slots.top.left + 180, top: slots.top.top - 120 }}
                      animate={{
                        opacity: [0, 1, 1, 1, 1, 1],
                        left: [
                          slots.top.left + 180,
                          slots.top.left + 70,
                          slots.top.left,
                          slots.top.left,
                          slots.bottom.left + 90,
                          slots.bottom.left,
                        ],
                        top: [
                          slots.top.top - 120,
                          slots.top.top - 40,
                          slots.top.top,
                          slots.top.top,
                          slots.bottom.top + 40,
                          slots.bottom.top,
                        ],
                      }}
                      transition={movingWordTransition}
                      style={{ transform: "translate(-50%, -50%)" }}
                    >
                      Script
                    </motion.span>

                    <motion.span
                      className="absolute font-heading text-4xl font-black text-neon-green sm:text-5xl md:text-7xl lg:text-8xl"
                      initial={{ opacity: 0, left: slots.bottom.left - 180, top: slots.bottom.top + 120 }}
                      animate={{
                        opacity: [0, 1, 1, 1, 1, 1],
                        left: [
                          slots.bottom.left - 180,
                          slots.bottom.left - 70,
                          slots.bottom.left,
                          slots.bottom.left,
                          slots.top.left - 90,
                          slots.top.left,
                        ],
                        top: [
                          slots.bottom.top + 120,
                          slots.bottom.top + 40,
                          slots.bottom.top,
                          slots.bottom.top,
                          slots.top.top - 40,
                          slots.top.top,
                        ],
                      }}
                      transition={movingWordTransition}
                      style={{ transform: "translate(-50%, -50%)" }}
                    >
                      Cyber
                    </motion.span>
                  </>
                )}
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto mt-8 max-w-2xl px-2 font-body text-base italic text-muted-foreground sm:text-lg md:text-xl"
          >
            Two elite clubs. One mission. Pushing the boundaries of code, security, and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:mt-12 md:flex-row md:gap-6"
          >
            <Link to="/about" className="glass-card neon-border-green hover-glow group w-full rounded-xl p-5 text-left sm:p-6 md:max-w-sm">
              <div className="mb-3 flex items-center gap-3">
                <Shield className="text-secondary" size={28} />
                <h3 className="font-heading text-lg font-bold text-secondary">Cyber Knights</h3>
              </div>
              <p className="text-sm font-body text-muted-foreground">
                Guardians of the digital realm. Defending systems through security and ethical hacking.
              </p>
            </Link>

            <Link to="/about#script-soldiers" className="glass-card neon-border hover-glow group w-full rounded-xl p-5 text-left sm:p-6 md:max-w-sm">
              <div className="mb-3 flex items-center gap-3">
                <Code className="text-primary" size={28} />
                <h3 className="font-heading text-lg font-bold text-primary">Script Soldiers</h3>
              </div>
              <p className="text-sm font-body text-muted-foreground">
                Masters of code. Building the future through algorithms, development, and innovation.
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12 sm:mt-16"
          >
            <Link
              to="/about"
              className="inline-flex flex-col items-center gap-2 font-heading text-sm tracking-[0.3em] text-primary transition-colors hover:text-foreground"
            >
              EXPLORE
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ChevronDown size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
