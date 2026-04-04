import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: "cyan" | "green";
}

const SectionHeading = ({ title, subtitle, accent = "cyan" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10 text-center sm:mb-12"
    >
      <h2 className={`section-title ${accent === "cyan" ? "gradient-text-cyan" : "gradient-text-green"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl px-2 text-sm text-muted-foreground sm:text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div className={`${accent === "cyan" ? "glow-line" : "glow-line-green"} w-32 mx-auto mt-4`} />
    </motion.div>
  );
};

export default SectionHeading;
