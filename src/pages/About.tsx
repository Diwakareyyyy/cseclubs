import { motion } from "framer-motion";
import { Code, Shield, Target, Eye, Zap, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <div className="min-h-screen pb-16 pt-8 sm:pt-10">
      <div className="container mx-auto space-y-6 px-4 sm:px-6 md:space-y-12">
        <SectionHeading
          title="About Our Clubs"
          subtitle="Learn about the vision, mission, and purpose behind CSE's elite clubs."
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card neon-border-green rounded-xl p-5 sm:p-8 md:p-12"
        >
          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="rounded-lg bg-secondary/10 p-3">
              <Shield className="text-secondary" size={32} />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary md:text-3xl">Cyber Knights</h3>
              <p className="font-mono text-xs tracking-wider text-muted-foreground">SECURITY • HACKING • DEFENSE</p>
            </div>
          </div>

          <p className="mb-8 text-base leading-relaxed text-foreground sm:text-lg">
            Cyber Knights is the cybersecurity club dedicated to protecting the digital frontier. We train students in
            ethical hacking, penetration testing, cryptography, and digital forensics to build the next generation of
            cybersecurity professionals.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <Target className="mt-1 shrink-0 text-secondary" size={20} />
              <div>
                <h4 className="mb-1 font-heading text-sm font-bold text-secondary">MISSION</h4>
                <p className="text-sm font-body text-muted-foreground">
                  To equip students with practical cybersecurity knowledge and hands-on learning experiences. To
                  encourage innovation in defending modern digital systems.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Eye className="mt-1 shrink-0 text-secondary" size={20} />
              <div>
                <h4 className="mb-1 font-heading text-sm font-bold text-secondary">VISION</h4>
                <p className="text-sm font-body text-muted-foreground">
                  To develop skilled cyber enthusiasts who can protect and secure the digital world. To build a strong
                  culture of cybersecurity awareness and ethical practice.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-1 shrink-0 text-secondary" size={20} />
              <div>
                <h4 className="mb-1 font-heading text-sm font-bold text-secondary">MOTTO</h4>
                <p className="text-sm font-body italic text-muted-foreground">"Protect. Secure. Lead."</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="script-soldiers"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card neon-border mb-12 rounded-xl p-5 sm:p-8 md:p-12"
        >
          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="rounded-lg bg-primary/10 p-3">
              <Code className="text-primary" size={32} />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary md:text-3xl">Script Soldiers</h3>
              <p className="font-mono text-xs tracking-wider text-muted-foreground">CODING • DEVELOPMENT • INNOVATION</p>
            </div>
          </div>

          <p className="mb-8 text-base leading-relaxed text-foreground sm:text-lg">
            Script Soldiers is the premier coding club of the CSE department, dedicated to fostering a culture of
            programming excellence and software innovation. We believe in learning by building - from competitive
            programming to full-stack development.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <Target className="mt-1 shrink-0 text-primary" size={20} />
              <div>
                <h4 className="mb-1 font-heading text-sm font-bold text-primary">MISSION</h4>
                <p className="text-sm font-body text-muted-foreground">
                  To strengthen coding and problem-solving skills through training, workshops, and competitions. To
                  prepare students for real-world technical challenges and career opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Eye className="mt-1 shrink-0 text-primary" size={20} />
              <div>
                <h4 className="mb-1 font-heading text-sm font-bold text-primary">VISION</h4>
                <p className="text-sm font-body text-muted-foreground">
                  To nurture passionate programmers capable of building impactful digital solutions. To inspire
                  innovation and excellence in the world of coding.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="mt-1 shrink-0 text-primary" size={20} />
              <div>
                <h4 className="mb-1 font-heading text-sm font-bold text-primary">MOTTO</h4>
                <p className="text-sm font-body italic text-muted-foreground">"Code. Innovate. Excel."</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
