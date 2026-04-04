import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const galleryRow1 = Array.from({ length: 10 }, (_, i) => `/gallery/row1/photo${i + 1}.jpg`);
const galleryRow2 = Array.from({ length: 10 }, (_, i) => `/gallery/row2/photo${i + 1}.jpg`);

const Gallery = () => {
  return (
    <div className="min-h-screen pb-16 pt-8 sm:pt-10">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading title="Gallery" subtitle="Moments captured from our events and activities." />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-6 overflow-hidden"
      >
        <div className="scroll-track">
          {[...galleryRow1, ...galleryRow1].map((photo, i) => (
            <div key={`r1-${i}`} className="h-40 w-60 flex-shrink-0 overflow-hidden rounded-lg neon-border sm:h-44 sm:w-64 md:h-48 md:w-72">
              <img
                src={photo}
                alt={`Gallery ${i + 1}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full bg-muted flex items-center justify-center"><div class="text-center"><p class="font-heading text-xs text-neon-cyan" style="color:hsl(180,100%,50%)">EVENT PHOTO</p><p class="font-mono text-xs" style="color:hsl(180,20%,60%)">#${(i % galleryRow1.length) + 1}</p></div></div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden"
      >
        <div className="scroll-track-reverse">
          {[...galleryRow2, ...galleryRow2].map((photo, i) => (
            <div key={`r2-${i}`} className="h-40 w-60 flex-shrink-0 overflow-hidden rounded-lg neon-border-green sm:h-44 sm:w-64 md:h-48 md:w-72">
              <img
                src={photo}
                alt={`Gallery ${i + 1}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full bg-muted flex items-center justify-center"><div class="text-center"><p class="font-heading text-xs" style="color:hsl(135,100%,50%)">EVENT PHOTO</p><p class="font-mono text-xs" style="color:hsl(180,20%,60%)">#${(i % galleryRow2.length) + 1}</p></div></div>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto mt-12 px-4 sm:px-6">
        <div className="glass-card neon-border rounded-lg p-5 text-center sm:p-6">
          <p className="font-mono text-xs text-muted-foreground sm:text-sm">
            <span className="text-primary">See what's happening</span> and{" "}
            <span className="text-secondary">join us and experience our upcoming events.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
