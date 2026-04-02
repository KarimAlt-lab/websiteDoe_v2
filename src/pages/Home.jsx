import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Satellite, Building2, Leaf, Scale, BookOpen } from "lucide-react";

const sections = [
  {
    to: "/wat-is-starlink",
    icon: Satellite,
    title: "Wat is Starlink?",
    description: "Ontdek het satellietinternet-netwerk van SpaceX: techniek, schaal en toepassingen.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    to: "/ondernemerschap",
    icon: Building2,
    title: "Ondernemerschap",
    description: "Het winstmodel, marktpositie en de rol van Starlink in wereldwijde internettoegang.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    to: "/duurzaamheid",
    icon: Leaf,
    title: "Duurzaamheid",
    description: "Materiaalgebruik, klimaatimpact, ruimtepuin en de verbranding van satellieten.",
    color: "text-chart-3",
    bg: "bg-chart-3/10",
  },
  {
    to: "/balans",
    icon: Scale,
    title: "De Balans",
    description: "Wanneer gaat winst boven duurzaamheid? Aanbevelingen en toekomstscenario's",
    color: "text-chart-4",
    bg: "bg-chart-4/10",
  },
  {
    to: "/bronnen",
    icon: BookOpen,
    title: "Bronnen",
    description: "Volledige bronvermelding en referenties van ons onderzoek.",
    color: "text-chart-5",
    bg: "bg-chart-5/10",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69cad1d5baab65a92e1bc6ec/aa7fee87b_generated_b6ce9bc2.png"
            alt="Earth surrounded by Starlink satellites in orbit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40 animate-glow"
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + i * 14}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6 backdrop-blur-sm">
              Academisch Onderzoek — 2025/2026
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Surrounded by{" "}
              <span className="text-primary">Starlink</span>{" "}
              <span className="text-accent">Satellites</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Een casestudy over de balans tussen de ecologische impact van
              Starlink-satellieten en het winstbelang van SpaceX. Duurzaamheid
              versus ondernemerschap in de moderne Space Race.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/wat-is-starlink"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Begin het verhaal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/balans"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors border border-border/50"
              >
                Bekijk De Balans
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Research Goal */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
              About
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Over deze website
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Zonder dat u het beseft wordt onze wereld steeds dichter omringd door duizenden satellieten. Met meer dan{" "}
              <strong className="text-foreground">10.000 Starlink-satellieten</strong> roept zich de vraag op:{" "}
              <em className="text-primary">
                welke impact brengt het ruimteprogramma van Starlink teweeg?
              </em>
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Aan de hand van een casestudy over Starlink maken we de balans op
              tussen de ecologische impact en het winstbelang van het bedrijf.
            </p>
          </motion.div>

          <div className="mb-20" />
        </div>
      </section>

      {/* Section Cards */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Verken het onderzoek
            </h2>
            <p className="text-muted-foreground text-lg">
              Navigeer door de verschillende onderdelen van onze casestudy.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section, i) => (
              <motion.div
                key={section.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={section.to}
                  className="block bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group h-full"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${section.bg} flex items-center justify-center mb-4`}
                  >
                    <section.icon className={`h-5 w-5 ${section.color}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {section.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Lees meer <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}