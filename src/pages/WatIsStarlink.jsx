import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const timeline = [
  {
    year: "2002",
    title: "Oprichting SpaceX",
    description:
      "Elon Musk richt SpaceX op met het doel herbruikbare raketten te bouwen en uiteindelijk Mars te bereiken.",
  },
  {
    year: "Jan 2015",
    title: "Starlink aangekondigd",
    description:
      "Tijdens de opening van een nieuw kantoor in Redmond kondigt Musk het Starlink-project aan: betaalbaar wereldwijd internet.",
  },
  {
    year: "Mei 2019",
    title: "Eerste 60 satellieten gelanceerd",
    description:
      "De eerste 60 Starlink v1.0-testsatellieten gaan de ruimte in. SpaceX mag in totaal bijna 12.000 Starlinks lanceren, met opties tot ~34.400.",
  },
  {
    year: "2020",
    title: "Bèta-service gestart",
    description:
      "De publieke bèta-dienst wordt uitgerold in geselecteerde gebieden en commerciële lancering begint wereldwijd.",
  },
  {
    year: "Eind 2022",
    title: "1 miljoen abonnees",
    description:
      "Starlink bereikt de mijlpaal van 1 miljoen gebruikers wereldwijd na snelle internationale uitrol.",
  },
  {
    year: "Sep 2024",
    title: "4 miljoen abonnees",
    description:
      "Het gebruikersaantal groeit explosief door voortdurende uitbreiding naar nieuwe markten.",
  },
  {
    year: "Eind 2025",
    title: "10.000 satellieten & 9 miljoen abonnees",
    description:
      "Starlink claimt op X dat meer dan 10.000 satellieten actief zijn en dat de dienst beschikbaar is in ~150 landen.",
  },
  {
    year: "Feb 2026",
    title: "10 miljoen abonnees",
    description:
      "Starlink bereikt 10 miljoen actieve abonnees wereldwijd — een jaar na jaar exponentiële groei.",
  },
];

const subscriberData = [
  { year: "2020", users: 0.01 },
  { year: "2022", users: 1 },
  { year: "Sep '24", users: 4 },
  { year: "Eind '25", users: 9 },
  { year: "Feb '26", users: 10 },
];

export default function WatIsStarlink() {
  return (
    <div>
      <PageHero
        badge="Hoofdstuk 1"
        title="Wat is Starlink?"
        description="Het satellietinternetnetwerk van SpaceX: van ambitieuze visie tot de grootste constellatie in de ruimte."
        image="https://media.base44.com/images/public/69cad1d5baab65a92e1bc6ec/aa7fee87b_generated_b6ce9bc2.png"
      />

      {/* Intro tekst */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              Starlink is het satellietinternetnetwerk van SpaceX, het ruimtebedrijf van Elon Musk.
              Het netwerk bestaat uit een grote constellatie van kleine satellieten in een lage baan om
              de aarde (<strong className="text-foreground">low Earth orbit, of LEO</strong>). SpaceX begon in 2019
              met de lanceringen, en eind 2025 waren er al meer dan{" "}
              <strong className="text-foreground">10.000 Starlink-satellieten</strong> actief. Starlink
              meldde toen zelf op X dat het internetdekking bood in ongeveer{" "}
              <strong className="text-foreground">150 landen</strong> wereldwijd.
            </p>
            <p>
              Starlink wil betaalbaar internet beschikbaar maken over de hele wereld, vooral op
              plaatsen waar traditionele netwerken ontbreken of slecht functioneren. In de loop der
              jaren is Starlink uitgegroeid tot een cruciale infrastructuur voor zowel commerciële
              toepassingen als noodcommunicatie en militaire inzet. Tegelijk roept deze
              megaconstellatie ook vragen op over de impact op het milieu, de ruimtevaart en
              astronomische waarnemingen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEO vs GEO */}
      <section className="py-4 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-8 flex flex-col items-center"
          >
            <h3 className="font-heading font-semibold text-foreground mb-6">LEO vs GEO</h3>
            <div className="relative flex items-center justify-center" style={{ width: 280, height: 280 }}>
              {/* Earth */}
              <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-green-600 z-10 flex items-center justify-center">
                <span className="text-xs font-bold text-white">🌍</span>
              </div>
              {/* LEO orbit */}
              <div className="absolute rounded-full border-2 border-primary/70 border-dashed" style={{ width: 120, height: 120 }} />
              <div className="absolute" style={{ top: 52, left: '50%', transform: 'translateX(-50%) translateX(60px)' }}>
                <div className="bg-primary/20 border border-primary/40 rounded-full px-2 py-0.5">
                  <span className="text-xs text-primary font-semibold">LEO</span>
                </div>
              </div>
              <div className="absolute" style={{ top: 52, left: '50%', transform: 'translateX(-50%) translateX(60px)', marginTop: 14 }}>
                <span className="text-xs text-muted-foreground">~550 km</span>
              </div>
              {/* GEO orbit */}
              <div className="absolute rounded-full border-2 border-accent/50 border-dashed" style={{ width: 240, height: 240 }} />
              <div className="absolute" style={{ top: 14, left: '50%', transform: 'translateX(-50%) translateX(120px)' }}>
                <div className="bg-accent/10 border border-accent/30 rounded-full px-2 py-0.5">
                  <span className="text-xs text-accent font-semibold">GEO</span>
                </div>
              </div>
              <div className="absolute" style={{ top: 28, left: '50%', transform: 'translateX(-50%) translateX(120px)' }}>
                <span className="text-xs text-muted-foreground">~36.000 km</span>
              </div>
              {/* LEO satellite dot */}
              <div className="absolute w-3 h-3 rounded-full bg-primary" style={{ top: 80, left: '50%', transform: 'translateX(-50%) translateX(60px)' }} />
              {/* GEO satellite dot */}
              <div className="absolute w-3 h-3 rounded-full bg-accent" style={{ top: -6, left: '50%', transform: 'translateX(-50%) translateX(120px)' }} />
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center max-w-xs">
              Starlink-satellieten opereren in LEO (~550 km), wat zorgt voor lage latentie. Klassieke telecomsatellieten hangen in GEO (~36.000 km).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Context & Oorsprong"
            title="Van visie tot megaconstellatie"
            description="De belangrijkste mijlpalen in de geschiedenis van SpaceX en Starlink — verschijnend naarmate je scrollt."
          />

          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />

            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`md:flex md:items-center md:gap-8 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } mb-8`}
                  >
                    {/* Card */}
                    <div className="flex-1">
                      <div
                        className={`bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-colors ${
                          isLeft ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-2">
                          {item.year}
                        </span>
                        <h4 className="font-heading font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary ring-4 ring-background flex-shrink-0 z-10" />

                    {/* Empty space */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Groei grafiek */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Explosieve Groei"
            title="Abonnees: van 0 naar 10 miljoen"
            description="De exponentiële groei van Starlink-gebruikers na de commerciële lancering in 2020."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-6"
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={subscriberData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 25%, 18%)" />
                  <XAxis dataKey="year" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                  <YAxis
                    stroke="hsl(215, 20%, 55%)"
                    fontSize={12}
                    tickFormatter={(v) => `${v}M`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(222, 40%, 10%)",
                      border: "1px solid hsl(215, 25%, 18%)",
                      borderRadius: "8px",
                      color: "hsl(210, 40%, 96%)",
                    }}
                    formatter={(v) => [`${v} miljoen`, "Abonnees"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="hsl(217, 91%, 60%)"
                    strokeWidth={2.5}
                    dot={{ fill: "hsl(217, 91%, 60%)", r: 5, strokeWidth: 0 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Datapunten: bèta 2020 (~10.000), eind 2022 (1M), sep. 2024 (4M), eind 2025 (9M), feb. 2026 (10M)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opmerking */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent/5 border border-accent/20 rounded-xl p-6"
          >
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-3">
              Opmerking
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Starlink is een privaat project.</strong> De data
              komen grotendeels van SpaceX / Starlink zelf en recente studies. Veel feitelijke
              informatie komt uit officiële aankondigingen, wetenschappelijke artikelen (Nature, AGU)
              en gerespecteerde media.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}