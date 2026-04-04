import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, MapPin, Download, ExternalLink, X } from "lucide-react";
import { events } from "@/data/events";
import SectionHeading from "@/components/SectionHeading";

const Events = () => {
  const pastEvents = events.filter((e) => e.type === "past");
  const upcomingEvents = events.filter((e) => e.type === "upcoming");
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  return (
    <div className="min-h-screen pb-16 pt-8 sm:pt-10">
      <div className="container mx-auto px-4 sm:px-6">
        {upcomingEvents.length > 0 && (
          <div className="mb-20">
            <SectionHeading title="Upcoming Events" subtitle="Don't miss out - register now!" accent="green" />
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="event-card neon-border-green mb-6 cursor-pointer p-5 sm:p-8"
                onClick={() => event.poster && setSelectedPoster(event.poster)}
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  <div className="flex-1">
                    <span className="mb-2 inline-block font-mono text-xs tracking-wider text-secondary">
                      {event.club.toUpperCase()}
                    </span>
                    <h3 className="mb-3 font-heading text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                      {event.title}
                    </h3>
                    <p className="mb-4 font-body text-muted-foreground">{event.description}</p>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-4">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {event.venue}</span>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-3 shrink-0 sm:w-auto">
                    {event.registrationLink && (
                      <a
                        href={event.registrationLink}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-center font-heading text-xs tracking-wider text-secondary-foreground transition-opacity hover:opacity-90"
                      >
                        REGISTER <ExternalLink size={14} />
                      </a>
                    )}
                    {event.invitationFile && (
                      <a
                        href={event.invitationFile}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="neon-border-green inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-center font-heading text-xs tracking-wider text-secondary transition-colors hover:bg-secondary/10"
                      >
                        INVITATION <Download size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <SectionHeading title="Past Events" subtitle="A look back at our incredible journey." />
        <div className="grid gap-6 md:grid-cols-2">
          {pastEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="event-card neon-border cursor-pointer p-5 sm:p-6"
              onClick={() => event.poster && setSelectedPoster(event.poster)}
            >
              <span className="mb-2 inline-block font-mono text-xs tracking-wider text-primary">
                {event.club.toUpperCase()}
              </span>
              <h3 className="mb-2 font-heading text-xl font-bold text-foreground">{event.title}</h3>
              <p className="mb-4 text-sm font-body text-muted-foreground">{event.description}</p>
              <div className="mb-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {event.venue}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPoster && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative">
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute -right-4 -top-4 rounded-full bg-background p-2 text-foreground shadow-lg transition-transform hover:scale-110"
            >
              <X size={18} />
            </button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedPoster}
              alt="Event Poster"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
