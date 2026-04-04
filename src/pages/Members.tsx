import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";
import { leaders, staffCoordinators, scriptSoldiersMembers, cyberKnightsMembers } from "@/data/members";
import type { Member, Leadership } from "@/data/members";
import SectionHeading from "@/components/SectionHeading";

const MemberCard = ({ member, accentGreen }: { member: Member | Leadership; accentGreen?: boolean }) => (
  <motion.a
    href={member.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    className={`member-card ${accentGreen ? "neon-border-green" : "neon-border"} block`}
  >
    <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-muted">
      <img
        src={member.photo}
        alt={member.name}
        className="h-full w-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
          (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
        }}
      />
      <User className="hidden text-muted-foreground" size={32} />
    </div>
    <h4 className="font-heading text-sm font-bold text-foreground">{member.name}</h4>
    <p className={`font-mono text-xs ${accentGreen ? "text-secondary" : "text-primary"}`}>{member.designation}</p>
    <p className="text-xs font-body text-muted-foreground">{member.department}</p>
  </motion.a>
);

const Members = () => {
  const [activeClub, setActiveClub] = useState<"cyber" | "script">("cyber");
  const members = activeClub === "cyber" ? cyberKnightsMembers : scriptSoldiersMembers;

  return (
    <div className="min-h-screen pb-16 pt-8 sm:pt-10">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading title="Leadership" subtitle="The driving force behind our clubs." />
        <div className="mx-auto mb-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <MemberCard key={leader.name} member={leader} />
          ))}
        </div>

        <SectionHeading title="Staff Coordinators" subtitle="Faculty mentors guiding our journey." accent="green" />
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staffCoordinators.map((staff) => (
            <MemberCard key={staff.name} member={staff} accentGreen />
          ))}
        </div>

        <SectionHeading title="Club Members" subtitle="The backbone of our community." />

        <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={() => setActiveClub("cyber")}
            className={`rounded-lg px-6 py-3 font-heading text-xs tracking-wider transition-all ${
              activeClub === "cyber"
                ? "bg-secondary text-secondary-foreground"
                : "neon-border-green text-secondary hover:bg-secondary/10"
            }`}
          >
            CYBER KNIGHTS
          </button>
          <button
            onClick={() => setActiveClub("script")}
            className={`rounded-lg px-6 py-3 font-heading text-xs tracking-wider transition-all ${
              activeClub === "script"
                ? "bg-primary text-primary-foreground"
                : "neon-border text-primary hover:bg-primary/10"
            }`}
          >
            SCRIPT SOLDIERS
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeClub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          >
            {members.map((member) => (
              <MemberCard key={member.name} member={member} accentGreen={activeClub === "cyber"} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Members;
