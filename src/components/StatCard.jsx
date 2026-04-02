import { motion } from "framer-motion";

export default function StatCard({ value, label, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
    >
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      )}
      <div className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-1">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}