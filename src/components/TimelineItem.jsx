import { motion } from "framer-motion";

export default function TimelineItem({ year, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-8 border-l border-border/50 last:pb-0"
    >
      {/* Dot */}
      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1.5 ring-4 ring-background" />
      <div className="text-xs font-medium text-primary mb-1">{year}</div>
      <h4 className="font-heading font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}