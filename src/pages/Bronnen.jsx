import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const bronnen = [
  {
    category: "SpaceX & Starlink",
    items: [
      "SpaceX/Starlink (2025). Starlink service plans. starlink.com (NL en US sites).",
      "Musk, E. (2021). Tweet over Starlink-funding voor Starship. Reuters Tech News, 23 juni 2021.",
      "SpaceX (2025). Post op X: meer dan 10.000 satellieten in de ruimte. 19 oktober 2025.",
      "SpaceX (2026). Starlink bereikt 10 miljoen abonnees. Persbericht, februari 2026.",
    ],
  },
  {
    category: "Wetenschappelijke publicaties",
    items: [
      "Larson, E.J.L., et al. (2023). Atmospheric re-entry aluminium from megaconstellations. Geophysical Research Letters (AGU).",
      "Borlaff, A.S., et al. (2025). Impact of satellite constellations on optical astronomy. Nature Astronomy.",
      "Boley, A.C. & Byers, M. (2021). Satellite mega-constellations create risks in low Earth orbit and beyond. Scientific Reports, 11.",
    ],
  },
  {
    category: "Ruimtevaartorganisaties",
    items: [
      "NASA (2023). Satellite materials and design guidelines. Technical Report.",
      "ESA (2025). Space Environment Report. European Space Agency.",
      "ESA (2025). Space Debris by the Numbers. esoc.esa.int.",
      "ITU (2024–2026). World Telecommunication Reports. Jaarverslagen.",
    ],
  },
  {
    category: "Media & Analyses",
    items: [
      'Press Staff (2025). "Starlink Charging $65/mo for Business Use." Reuters.',
      "Press Staff (2025). OneWeb Satellite Constellation. EO-portal.",
      "Reuters (2024). Starlink wordt cruciale financieringsbron voor SpaceX. Reuters Technology.",
      "FCC filings: Project Kuiper, OneWeb, Telesat vergunningen (2023–2026).",
    ],
  },
  {
    category: "Concurrentie & Markt",
    items: [
      "Amazon (2023–2026). Project Kuiper updates en lanceringen. aboutamazon.com.",
      "Eutelsat OneWeb (2024). OneWeb constellation status. oneweb.net.",
      "Telesat (2025). Telesat Lightspeed program update. telesat.com.",
    ],
  },
  {
    category: "Overig",
    items: [
      "COPUOS/VN (2024). Guidelines for the Long-term Sustainability of Outer Space Activities.",
      "Aanbevolen: ITU World Telecommunication Reports (2024–2026), officiële FCC filings.",
    ],
  },
];

export default function Bronnen() {
  return (
    <div>
      <PageHero
        badge="Referenties"
        title="Bronnen"
        description="Volledige bronvermelding en referenties gebruikt in dit onderzoek."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {bronnen.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="mb-10"
            >
              <h3 className="font-heading font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border/50 hover:border-primary/30 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-card border border-border/50 rounded-xl p-6"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Opmerking:</strong> Starlink is een
              privaat project. Veel feitelijke informatie komt uit officiële
              aankondigingen van SpaceX, wetenschappelijke artikelen (Nature, AGU) en
              gerespecteerde media. Gebrek aan onafhankelijke bronnen dwingt in sommige
              gevallen tot aannames — dit is steeds vermeld in de tekst.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}