import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"}`}
    >
      <h3 className="text-primary font-bold text-sm md:text-base uppercase tracking-widest mb-2">
        {subtitle}
      </h3>
      <h2 className="text-3xl md:text-5xl font-display font-black text-foreground">
        {title}
      </h2>
      <div 
        className={`h-1.5 w-24 bg-gradient-to-r from-primary to-accent mt-4 rounded-full ${
          alignment === "center" ? "mx-auto" : ""
        }`} 
      />
    </motion.div>
  );
}
