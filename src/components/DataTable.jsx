import { motion } from "framer-motion";

export default function DataTable({ headers, rows, caption }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-xl border border-border/50"
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-secondary/50">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-heading font-semibold text-foreground whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-t border-border/30 hover:bg-secondary/20 transition-colors"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 ${
                    j === 0 ? "font-medium text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <div className="px-4 py-2 bg-muted/30 text-xs text-muted-foreground border-t border-border/30">
          {caption}
        </div>
      )}
    </motion.div>
  );
}