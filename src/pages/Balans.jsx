import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import { TrendingUp, Leaf, ArrowRight, Scale, RefreshCw, Zap, Trophy } from "lucide-react";

export default function Balans() {
  return (
    <div>
      <PageHero
        badge="Conclusie"
        title="De Balans"
        description="Naar een duurzaam ondernemingsmodel voor Starlink: wanneer gaat winst boven duurzaamheid?"
        image="https://media.base44.com/images/public/69cad1d5baab65a92e1bc6ec/72dccc33d_generated_574df2f3.png"
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Scale className="h-10 w-10 text-primary" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              De analyse van Starlink toont duidelijk aan dat het bedrijf vandaag bijzonder
              sterk presteert op vlak van ondernemerschap. Dankzij schaalvergroting en een
              duidelijke commerciële positionering heeft Starlink zich ontwikkeld tot een
              dominante speler in wereldwijde connectiviteit. Tegelijk brengt precies die
              schaal ook aanzienlijke duurzaamheidsuitdagingen met zich mee — van de vervuiling
              van de stratosfeer tot het groeiende risico op ruimteafval.
            </p>
            <p>
              De kernvraag voor de toekomst is daarom niet{" "}
              <em>of</em> Starlink moet kiezen tussen groei en duurzaamheid, maar{" "}
              <strong className="text-foreground">
                hoe beide logica's structureel met elkaar gecombineerd kunnen worden.
              </strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Van schaal naar slimme schaal */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="01"
            title="Van schaalvergroting naar slimme schaal"
          />
          <div className="flex gap-8 items-center">
            <div className="flex-1 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Tot op heden is de groei van Starlink voornamelijk gebaseerd op het principe van
                maximale uitbreiding: meer satellieten betekent een betere dekking en een sterkere
                marktpositie. Hoewel deze strategie economisch succesvol is, zorgt ze ook voor
                een exponentiële toename in materiaalgebruik, lanceringen en atmosferische impact,
                zoals de uitstoot van aluminiumoxiden bij het opbranden van oude satellieten in
                de hogere luchtlagen.
              </p>
              <p>
                Een toekomstgericht model moet evolueren naar{" "}
                <strong className="text-foreground">slimme schaalvergroting</strong>. Hoewel een
                basisaantal satellieten fysiek noodzakelijk blijft voor lage latentie en wereldwijde
                dekking, kan de rendabiliteit per kilogram hardware drastisch omhoog. In plaats
                van het netwerk louter fysiek uit te breiden, kan Starlink inzetten op het
                optimaliseren van de bestaande infrastructuur — waardoor de ecologische voetafdruk
                per actieve gebruiker daalt terwijl de commerciële capaciteit blijft groeien.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                <TrendingUp className="h-12 w-12 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circulair model */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="02"
            title="Een verschuiving naar een circulair ruimte-economisch model"
          />
          <div className="flex gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-chart-3/10 border-2 border-chart-3/30 flex items-center justify-center">
                <RefreshCw className="h-12 w-12 text-chart-3" />
              </div>
            </div>
            <div className="flex-1 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Een van de grootste spanningen tussen duurzaamheid en ondernemerschap ligt in
                de korte levensduur van de huidige satellieten en de voortdurende
                vervangingscyclus. Dit lineaire model — produceren, lanceren, gebruiken en laten
                opbranden — is economisch werkbaar, maar ecologisch belastend en verhoogt het
                risico op het{" "}
                <strong className="text-foreground">Kessler-syndroom</strong> (een kettingreactie
                van ruimteafval).
              </p>
              <p>
                Op lange termijn zou Starlink kunnen evolueren naar een{" "}
                <strong className="text-foreground">circulair model</strong>. Dit begint bij een
                modulair ontwerp, waardoor kritieke onderdelen geüpgraded kunnen worden zonder
                het volledige systeem te vernietigen. Toekomstige technologieën voor onderhoud
                en herconfiguratie in de ruimte kunnen de operationele levensduur aanzienlijk
                verlengen. Een langere levensduur verlaagt niet alleen de druk op grondstoffen,
                maar reduceert ook de nood aan extreem frequente lanceringen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Duurzaamheid als motor */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="03"
            title="Duurzaamheid als motor voor efficiëntie"
          />
          <div className="flex gap-8 items-center">
            <div className="flex-1 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Waar duurzaamheid vaak wordt gezien als een beperking, kan het voor Starlink
                net een bron van efficiëntie worden. De sterke integratie met SpaceX biedt hier
                een uniek voordeel. Systemen zoals Starship maken het mogelijk om de impact per
                kilogram payload te verlagen, mits deze enorme capaciteit wordt ingezet voor een
                bewuste duurzaamheidsstrategie in plaats van loutere volume-expansie.
              </p>
              <p>
                Wanneer technologische vooruitgang gecombineerd wordt met minder materiaalgebruik
                en een hogere herbruikbaarheid van hardware in de ruimte, ontstaat een model
                waarin{" "}
                <strong className="text-foreground">
                  ecologische en economische optimalisatie elkaar versterken.
                </strong>
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <Zap className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategisch voordeel */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="04"
            title="Duurzaamheid als strategisch voordeel in een competitieve markt"
          />
          <div className="flex gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                <Trophy className="h-12 w-12 text-accent" />
              </div>
            </div>
            <div className="flex-1 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Naast interne efficiëntie speelt duurzaamheid een cruciale rol in de geopolitieke
                positionering. Naarmate internationale regelgevers strengere eisen stellen aan de
                veiligheid van de ruimte en de impact op astronomie, wordt een proactief
                duurzaamheidsbeleid een noodzakelijke voorwaarde voor markttoegang.
              </p>
              <p>
                Door transparant te communiceren over emissies, de actieve verwijdering van
                defecte satellieten en het minimaliseren van lichtvervuiling, kan Starlink zich
                profileren als een{" "}
                <strong className="text-foreground">verantwoorde infrastructuurpartner</strong>.
                Dit versterkt het vertrouwen bij overheden en grote zakelijke klanten die gebonden
                zijn aan strikte{" "}
                <strong className="text-foreground">ESG-criteria</strong> (Environmental, Social,
                and Governance).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visuele tegenstelling */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-6"
          >
            <div className="bg-card border border-accent/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Economisch: ✓</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "$8 mrd winst op $15-16 mrd omzet (2024)",
                  "50–80% van SpaceX-inkomsten",
                  "Beschikbaar in >150 landen",
                  "10 miljoen abonnees (feb. 2026)",
                  "Dominante marktpositie in LEO",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-chart-3/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-chart-3/10 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-chart-3" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Ecologisch: ⚠</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "~360 ton Al₂O₃/jaar in de stratosfeer (Larson 2023)",
                  "Levensduur satelliet slechts ~5 jaar → continue cyclus",
                  "CO₂ per lancering: 200–400 ton",
                  ">40.000 getraceerde ruimteobjecten (ESA)",
                  "Geen publieke ESG-rapportage door SpaceX",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-chart-3 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kernvak — letterlijk over te nemen */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-primary/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-primary" />
              <span className="font-heading font-semibold text-primary text-sm tracking-wide uppercase">
                Kernbevinding van dit onderzoek
              </span>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                Een van de belangrijkste inzichten die dit onderzoek ons heeft gegeven is het
                volgende. Starlink is een zodanige 'grootmacht' op vlak van satellieten dat het
                bedrijf nooit meer haar leiderspositie zal willen opgeven. Dit is natuurlijk te
                begrijpen, maar kan ook de reden zijn voor enige bezorgdheid naar de toekomst
                toe als we kijken naar duurzaamheid.
              </p>
              <p>
                Zoals eerder besproken slaagt Starlink erin op een heel korte periode enorm
                veel satellieten de ruimte in te sturen. Voorlopig is dit in zekere zin te
                verantwoorden omwille van de nood en vraag naar meer verbondenheid via
                satellieten. Het is echter van belang te beseffen dat er in de — al dan niet
                nabije — toekomst een punt zal komen waarop er objectief (meer dan) genoeg
                satellieten rond de aarde cirkelen om ons te voorzien van die nodige connecties.
              </p>
              <p className="text-foreground font-medium">
                Iedereen begrijpt dat Starlink op dat punt niet zal stoppen met produceren en
                lanceren van satellieten. Dit zou zowel hun leiderspositie in de
                satelliet-spacerace als hun winst negatief beïnvloeden. M.a.w.: als dit punt
                wordt bereikt, zal Starlinks absolute prioriteit onherroepelijk verschuiven
                naar winst — ervan uitgaande dat dit niet reeds zo is.
              </p>
              <p className="text-primary font-medium italic">
                Het is heel belangrijk deze balans op te merken en in te zien welke aspecten
                voor een onderneming — omwille van omstandigheden — de duurzaamheid in het
                gedrang brengen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}