import { Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const founders = [
  "Diwakar S",
  "Saravanan V",
  "Shanmuga Sundaram S",
  "Vikram A",
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="glow-line mb-8" />
      <div className="container mx-auto px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-3 font-heading text-xl font-bold">
              <span className="text-neon-cyan">CSE</span>
              <span className="text-neon-green">CLUBS</span>
            </h3>
            <p className="text-sm font-body leading-relaxed text-muted-foreground">
              Department of Computer Science & Engineering
            </p>
            <p className="text-sm font-body text-muted-foreground">Cyber Knights & Script Soldiers</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 font-heading text-sm tracking-wider text-primary">CONTACT</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:cseclubs@college.edu"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail size={16} />
                periitcseclub@gmail.com
              </a>
              <a
                href="https://instagram.com/cseclubs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-secondary"
              >
                <Instagram size={16} />
                @cseclubs
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 font-heading text-sm tracking-wider text-primary">ESTABLISHED BY</h4>
            <div className="flex flex-col gap-1">
              {founders.map((name) => (
                <p key={name} className="text-sm font-body text-muted-foreground">
                  {name}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="glow-line mb-4 mt-8" />
        <p className="text-center font-mono text-xs tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} CSE CLUBS - ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
