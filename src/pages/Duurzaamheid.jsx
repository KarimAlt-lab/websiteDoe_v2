import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import DataTable from "../components/DataTable";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Recycle,
  Flame,
  Cloud,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const footprintData = [
  { name: "Al (productie)", waarde: 1000, eenheid: "ton/jaar" },
  { name: "Li (batterijen)", waarde: 50, eenheid: "ton/jaar" },
  { name: "CO₂ (lanceringen)", waarde: 400, eenheid: "kton CO₂eq/jaar" },
  { name: "Al₂O₃ (re-entry)", waarde: 360, eenheid: "ton/jaar" },
];

export default function Duurzaamheid() {
  return (
    <div>
      <PageHero
        badge="Hoofdstuk 3"
        title="Ecologische Impact"
        description="De ecologische keerzijde van Starlink: materiaalgebruik, atmosferische impact en de gevolgen van re-entry op grote schaal."
        image="https://media.base44.com/images/public/69cad1d5baab65a92e1bc6ec/1ed2983df_generated_05e15c33.png"
      />

      {/* Materiaalgebruik */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Materialen"
            title="Materiaalgebruik"
            description="Waaruit bestaan Starlink-satellieten en welke ecologische vragen roept dit op?"
          />

          <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
            <p>
              De satellieten van Starlink, ontwikkeld door SpaceX, zijn ontworpen volgens
              principes van massaproductie en schaalbaarheid. In tegenstelling tot traditionele
              satellieten worden Starlink-satellieten in grote aantallen geproduceerd, wat
              directe implicaties heeft voor materiaalgebruik en duurzaamheid.
            </p>
            <p>
              Volgens technische richtlijnen van NASA worden Starlink-satellieten — net zoals
              andere satellieten — voornamelijk opgebouwd uit lichte en sterke materialen zoals{" "}
              <strong className="text-foreground">aluminium en composieten</strong>. Aluminium
              wordt gebruikt voor de structuur vanwege zijn gunstige verhouding tussen sterkte
              en gewicht, terwijl composietmaterialen extra stevigheid bieden zonder het gewicht
              significant te verhogen. Deze materiaalkeuze is essentieel om de lanceerkosten te
              beperken en compatibel te blijven met herbruikbare raketten zoals de Falcon 9.
            </p>
            <p>
              Daarnaast zijn Starlink-satellieten uitgerust met{" "}
              <strong className="text-foreground">
                zonnepanelen (op basis van silicium), lithium-ionbatterijen
              </strong>{" "}
              en een reeks geminiaturiseerde elektronische systemen voor communicatie. Op
              zichzelf zijn deze componenten niet uitzonderlijk, maar het verschil ligt in de{" "}
              <strong className="text-foreground">schaal</strong> waarop ze worden geproduceerd.
              Waar traditionele satellieten in beperkte aantallen worden gebouwd, gaat het bij
              Starlink om duizenden identieke eenheden.
            </p>
          </div>

          {/* Satellite diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <img
              src="https://media.base44.com/images/public/69cad1d5baab65a92e1bc6ec/5d492c630_generated_image.png"
              alt="Componenten en materialen van een Starlink-satelliet"
              className="rounded-xl border border-border/50 w-full"
            />
            <p className="text-center text-xs text-muted-foreground mt-3">
              Schematisch overzicht van de componenten en materialen van een Starlink-satelliet
            </p>
          </motion.div>

          <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
            <p>
              De keuze voor deze materialen wordt in grote mate bepaald door de extreme
              omstandigheden waarin Starlink-satellieten opereren: ze moeten bestand zijn tegen
              grote temperatuurverschillen, intense straling en vacuümomstandigheden. Tegelijk
              moeten ze zo licht mogelijk blijven om lanceerkosten en brandstofverbruik te
              beperken.
            </p>
            <p>
              Toch brengt dit materiaalgebruik — en daarmee de productie — ook vragen met zich
              mee in verband met duurzaamheid, en dat is waar wij hier de aandacht op willen
              vestigen.
            </p>
            <p>
              De productie van aluminium, batterijen en elektronische componenten is bijzonder
              energie-intensief en vereist de ontginning van schaarse grondstoffen zoals{" "}
              <strong className="text-foreground">bauxiet en lithium</strong>. Wanneer dit op
              kleine schaal gebeurt, blijft de impact relatief beperkt, maar bij
              megaconstellaties zoals Starlink verandert dit drastisch: de massaproductie van
              duizenden satellieten leidt tot een continue vraag naar grondstoffen en energie,
              wat de ecologische voetafdruk aanzienlijk vergroot.
            </p>
          </div>

          {/* Staafgrafiek voetafdruk */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-6 mb-6"
          >
            <h4 className="font-heading font-semibold text-foreground mb-1">
              Geschatte jaarlijkse materialenvoetafdruk van Starlink
            </h4>
            <p className="text-xs text-muted-foreground mb-4">
              Grondstoffen in productie &amp; atmosferische uitstoot bij lanceringen en re-entry
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={footprintData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 25%, 18%)" />
                  <XAxis type="number" stroke="hsl(215, 20%, 55%)" fontSize={11} />
                  <YAxis type="category" dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={11} width={120} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(222, 40%, 10%)",
                      border: "1px solid hsl(215, 25%, 18%)",
                      borderRadius: "8px",
                      color: "hsl(210, 40%, 96%)",
                      fontSize: "12px",
                    }}
                    formatter={(v, name, props) => [`${v} ${props.payload.eenheid}`, "Geschat"]}
                  />
                  <Bar dataKey="waarde" fill="hsl(217, 91%, 60%)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Bron: Larson et al. (2023), NASA, ESA, sectorschattingen — let op: eenheden verschillen per categorie
            </p>
          </motion.div>
        </div>
      </section>

      {/* Re-entry */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Re-entry"
            title="Re-entry en atmosferische impact"
            description="Gecontroleerde verbranding als oplossing én nieuw milieuprobleem."
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Een centraal onderdeel van het Starlink-systeem is dat satellieten zich in een
                relatief lage baan bevinden en na hun operationele levensduur gecontroleerd
                terugkeren in de atmosfeer. Deze strategie wordt door SpaceX gepresenteerd als
                een bewuste keuze om de vorming van ruimteafval te beperken.
              </p>
              <p>
                Hoewel deze aanpak effectief inspeelt op het groeiende probleem van ruimtepuin,
                introduceert ze tegelijkertijd een nieuw duurzaamheidsvraagstuk. Bij het opbranden
                van satellieten tijdens de re-entry komen metaaldeeltjes vrij, voornamelijk in de
                vorm van{" "}
                <strong className="text-foreground">aluminiumoxide (Al₂O₃)</strong>. Deze
                microscopische partikels blijven achter in de hogere lagen van de atmosfeer, waar
                ze zich kunnen ophopen en mogelijk interfereren met de chemische en fysische
                processen die daar plaatsvinden.
              </p>
              <p>
                De potentiële impact situeert zich onder meer in de{" "}
                <strong className="text-foreground">
                  aantasting van de ozonlaag en verstoringen in de stralingsbalans
                </strong>{" "}
                van de atmosfeer. Aluminiumoxide kan fungeren als katalysator in chemische
                reacties die bijdragen aan ozonafbraak, terwijl de aanwezigheid van dergelijke
                deeltjes ook invloed kan hebben op de manier waarop straling wordt geabsorbeerd
                en weerkaatst. Hoewel deze effecten nog niet volledig gekwantificeerd zijn, wijzen
                recente studies erop dat de cumulatieve impact niet verwaarloosbaar kan zijn.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://media.base44.com/images/public/69cad1d5baab65a92e1bc6ec/c87559d2f_generated_image.png"
                alt="Satelliet tijdens re-entry in de atmosfeer"
                className="rounded-xl border border-border/50 w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mb-8"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  Schaal als het echte probleem
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wat het Starlink-programma fundamenteel onderscheidt van eerdere
                  satellietsystemen is de schaal waarop re-entry plaatsvindt. Met reeds
                  duizenden operationele satellieten en plannen voor verdere uitbreiding,
                  evolueert re-entry van een individueel en sporadisch fenomeen naar een{" "}
                  <strong className="text-foreground">
                    continu en systematisch proces
                  </strong>
                  . Hierdoor wordt de uitstoot van metaaldeeltjes geen uitzondering, maar
                  een structureel kenmerk van het systeem.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
            <p>
              In tegenstelling tot traditionele satellieten (levensduur 10–15 jaar) blijven
              Starlink-satellieten gemiddeld slechts{" "}
              <strong className="text-foreground">~5 jaar operationeel</strong>. Dit creëert
              een permanente vervangingscyclus waarbij oude satellieten worden verwijderd en
              nieuwe gelanceerd. Hierdoor ontstaat een systeem van continue productie en
              lancering, met structureel hoog materiaalverbruik.
            </p>
            <p>
              De gecontroleerde verbranding van satellieten vormt dus een duidelijke trade-off.
              Enerzijds vermindert ze de druk op de ruimteomgeving door de ophoping van
              ruimtepuin te beperken. Anderzijds verschuift ze een deel van de milieulast naar
              de atmosfeer, waar de langetermijneffecten nog onvoldoende begrepen zijn.
            </p>
          </div>

        </div>
      </section>

      {/* Ruimtepuin */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Ruimtepuin"
            title="Ruimtepuin en botsingsrisico"
          />

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Cloud, label: ">40.000", sub: "getraceerde objecten in LEO (ESA)" },
              { icon: Recycle, label: "~6.000", sub: "Starlink-objecten in LEO" },
              { icon: Flame, label: "Kessler", sub: "kettingreactie van puin — reëel risico" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/50 rounded-xl p-5 text-center"
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="font-heading text-2xl font-bold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">{stat.sub}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              ESA telt meer dan 40.000 baanobjecten, waarvan ~6.000 Starlink-satellieten.
              LEO is dermate vol dat botsingen — het{" "}
              <strong className="text-foreground">Kessler-syndroom</strong> — reëel worden.
              Starlink-satellieten kunnen actief ontwijken, maar defuncte exemplaren en
              fragmentaties blijven als puin achter. Een stijgende debris-index wijst op
              een naderend kantelmoment.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}