import { motion } from "framer-motion";

export default function InfoCard({ icon: Icon, title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
    >
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      )}
      <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
        {title}
      </h3>
      <div className="text-muted-foreground text-sm leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}