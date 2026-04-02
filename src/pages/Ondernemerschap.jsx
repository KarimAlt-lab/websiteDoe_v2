import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Globe, TrendingUp, Layers, AlertTriangle, Shield } from "lucide-react";

const subscriberData = [
  { year: "2020", users: 0.01 },
  { year: "2022", users: 1 },
  { year: "Sep '24", users: 4 },
  { year: "Eind '25", users: 9 },
  { year: "Feb '26", users: 10 },
];

const revenueData = [
  { year: "2021", revenue: 0.5 },
  { year: "2022", revenue: 1.4 },
  { year: "2023", revenue: 4.2 },
  { year: "2024", revenue: 8 },
  { year: "2025", revenue: 15 },
];

export default function Ondernemerschap() {
  return (
    <div>
      <PageHero
        badge="Hoofdstuk 2"
        title="Winstmodel"
        description="Hoe Starlink van satellietinternet een mondiale groeimachine maakte en wat dat economisch betekent."
      />

      {/* 1. Positionering */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="01"
            title="Doel en commerciële positionering"
            description="Waarom zijn zoveel satellieten nodig?"
          />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Starlink richt zich op wereldwijde connectiviteit en bouwt zijn commerciële
              positionering op rond bereik, schaal en beschikbaarheid. De dienst is vooral
              relevant in regio's waar klassieke telecominfrastructuur beperkt aanwezig is.
              Dat maakt het model commercieel sterk in een context waarin volgens de ITU in
              2025 nog altijd{" "}
              <strong className="text-foreground">2,2 miljard mensen offline blijven</strong>{" "}
              — ongeveer een kwart van de wereldbevolking.
            </p>
            <p>
              Om die wereldwijde aanwezigheid uit te bouwen, heeft Starlink een zeer grote
              satellietconstellatie nodig. Het bedrijf kiest bewust voor een grootschalige
              uitrol en blijft die capaciteit stelselmatig uitbreiden. Die commerciële ambitie
              is vandaag zichtbaar in de internationale uitrol: Starlink is inmiddels beschikbaar
              in meer dan <strong className="text-foreground">150 landen</strong>, en breidde in
              2025 verder uit met 35 extra markten en meer dan{" "}
              <strong className="text-foreground">4,6 miljoen nieuwe actieve klanten</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Winstmodel */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="02"
            title="Hoe Starlink omzet maakt"
          />

          <div className="grid lg:grid-cols-2 gap-12 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5 text-muted-foreground leading-relaxed"
            >
              <p>
                Starlink combineert de verkoop van apparatuur met inkomsten uit maandelijkse
                abonnementen. Klanten betalen niet alleen voor de internetdienst, maar ook voor
                de installatie die nodig is om toegang te krijgen tot het netwerk.
              </p>
              <p>
                Tegelijk richt Starlink zich op verschillende soorten gebruikers die elk een
                ander tarief betalen: vaste bedrijfslocaties, mobiele toepassingen op land,
                scheepvaart, luchtvaart en particulier gebruik. Zakelijke vaste installaties
                zijn beschikbaar vanaf <strong className="text-foreground">~$65/maand</strong>,
                terwijl maritieme toepassingen starten vanaf{" "}
                <strong className="text-foreground">~$250/maand</strong>.
              </p>
              <p>
                Die opbouw toont dat Starlink zijn dienst niet als één standaardproduct in de
                markt zet, maar bewust afstemt op verschillende doelgroepen. Zo wordt dezelfde
                basisinfrastructuur commercieel anders aangeboden, afhankelijk van de noden,
                mobiliteit en schaal van de gebruiker. Starlink profileert zich daarmee steeds
                meer als een wereldwijde infrastructuurpartner.
              </p>

              {/* Reuters quote */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5"
              >
                <p className="text-sm text-foreground leading-relaxed italic">
                  "Starlink is a vital profit generator for SpaceX. Last year, the company
                  generated about <strong>$8 billion in profit on $15 billion to $16 billion
                  of revenue</strong>, with Starlink as the main revenue driver, accounting
                  for about <strong>50% to 80%</strong> of the total."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Reuters, februari 2026</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/50 rounded-xl p-6"
            >
              <h4 className="font-heading font-semibold text-sm text-foreground mb-4">
                Geschatte omzet Starlink/SpaceX (mrd USD)
              </h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 25%, 18%)" />
                    <XAxis dataKey="year" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                    <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(222, 40%, 10%)",
                        border: "1px solid hsl(215, 25%, 18%)",
                        borderRadius: "8px",
                        color: "hsl(210, 40%, 96%)",
                      }}
                      formatter={(v) => [`$${v} mrd`, "Omzet"]}
                    />
                    <Bar dataKey="revenue" fill="hsl(38, 92%, 60%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Bron: Reuters (feb. 2026), sectoranalyses
              </p>
            </motion.div>
          </div>

          {/* Geldstroom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-6"
          >
            <h4 className="font-heading font-semibold text-foreground mb-4">Geldstroom</h4>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              {["Abonnees", "→", "Starlink-inkomsten", "→", "SpaceX R&D", "→", "Starship / Mars-ambitie"].map(
                (item, i) => (
                  <span
                    key={i}
                    className={
                      item === "→"
                        ? "text-primary font-bold text-lg"
                        : "bg-secondary/50 px-4 py-2 rounded-lg text-foreground font-medium"
                    }
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Strategisch verlengstuk SpaceX */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="03"
            title="Starlink als strategisch verlengstuk van SpaceX"
          />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Starlink opereert niet als een losstaand telecombedrijf naast SpaceX, maar als
              onderdeel van dezelfde organisatie. Daardoor kan Starlink mee evolueren met de
              prioriteiten van SpaceX: lanceringen, schaalvergroting en technologische
              ontwikkeling. Op die manier versterken internetdiensten en ruimtevaartcapaciteit
              elkaar.
            </p>
            <p>
              Vanuit ondernemerschap is dat interessant, omdat SpaceX een uitzonderlijk groot
              deel van de waardeketen zelf beheert: het bedrijf{" "}
              <strong className="text-foreground">
                ontwikkelt satellieten, lanceert ze met eigen raketten en exploiteert de dienst
                vervolgens wereldwijd.
              </strong>{" "}
              Dat betekent dat groei minder afhankelijk is van externe partners en het bedrijf
              zelf schaalvergroting kan bepalen.
            </p>
            <p>
              Dankzij de hoge lanceerfrequentie en het gebruik van herbruikbare raketten kan het
              netwerk sneller worden uitgebreid. Starlink levert SpaceX ook een voortdurende
              stroom eigen lanceringen op — die vaste vraag maakt het makkelijker om een hoog
              lanceritme aan te houden, wat op zijn beurt helpt om kosten te verlagen en sneller
              verbeteringen door te voeren.
            </p>

            <div className="bg-card border border-primary/20 rounded-xl p-6 mt-4">
              <p className="text-sm text-foreground leading-relaxed font-medium">
                Starlink zorgt niet alleen voor extra inkomsten voor SpaceX; het versterkt
                tegelijk ook zijn eigen groeimogelijkheden. De koppeling met SpaceX is
                strategisch: het gaat om een{" "}
                <span className="text-primary">
                  geïntegreerde groeimachine
                </span>{" "}
                waarin (1) commerciële schaal, (2) consistente lanceercapaciteit en (3) next-gen
                innovatie elkaar versnellen binnen één ecosysteem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Groeistrategie */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="04"
            title="Groeistrategie en toekomstvisie"
          />
          <div className="flex gap-8 items-start">
            <div className="flex-1 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Starlink groeit niet alleen door meer gebruikers aan te trekken, maar vooral
                door zijn infrastructuur in steeds meer markten en toepassingen te duwen. De
                groeistrategie is breder dan klassieke internetabonnementen: het bedrijf wil
                dezelfde satellietconstellatie tegelijk inzetten voor{" "}
                <strong className="text-foreground">
                  residentieel internet, mobiele toepassingen, scheepvaart, luchtvaart en
                  rechtstreeks mobiel bereik via satelliet.
                </strong>
              </p>
              <p>
                Dat laatste is strategisch bijzonder belangrijk, omdat Starlink daarmee niet
                langer alleen concurreert met lokale internetproviders, maar zich ook richting
                telecomoperatoren en mobiele netwerken beweegt. Men zou dit kunnen zien als het
                overnemen van de markt en alle concurrenten uitschakelen.
              </p>
            </div>
            <div className="flex flex-col gap-4 flex-shrink-0">
              {[
                { icon: "🏠", label: "Thuis" },
                { icon: "📱", label: "Mobiel" },
                { icon: "🚢", label: "Scheepvaart" },
                { icon: "✈️", label: "Luchtvaart" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Monopolie */}
      <section className="py-16 sm:py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="05"
            title="Monopoliepositie"
          />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Aangezien Starlink zorgt voor betrouwbare en snelle verbindingen, zijn bedrijven
              genoodzaakt om Starlink te gebruiken om nadeel te voorkomen ten opzichte van
              concurrenten. Net omdat het zich tegelijk richt op particuliere gebruikers,
              ondernemingen, mobiliteit, scheepvaart, luchtvaart en overheidscommunicatie,
              is het steeds meer aanwezig in alle sectoren.
            </p>
            <p>
              Omdat het deel uitmaakt van SpaceX, snel kon uitbreiden en zich in steeds meer
              sectoren binnenwerkt, is Starlink vandaag veel meer dan zomaar een
              internetprovider. Starlink groeit stilaan uit tot een systeem waar bedrijven,
              overheden en andere organisaties moeilijk nog naast kunnen kijken. Hoe meer
              mensen en sectoren ervan afhankelijk worden,{" "}
              <strong className="text-foreground">
                hoe sterker de invloed van Starlink ook wordt — niet omdat het officieel
                alleenheerser is, maar omdat het zichzelf stap voor stap onmisbaar maakt.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* 6. Risico's */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="06"
            title="Risico's en uitdagingen"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-destructive/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">
                  6.1 Regelgevende en juridische risico's
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Satellietinternet vereist internationale goedkeuringen. Indien Starlink
                deze niet krijgt in bepaalde landen, wordt de groei vertraagd. Quasi ieder
                land heeft zijn eigen regulering over prijsmodellen en datacaps, wat de
                internationale uitrol bemoeilijkt. Die juridische regelgeving kan Starlink
                in latere stadia van uitbreiding in grote mate beperken.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-accent/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">
                  6.2 Toenemende concurrentie in de LEO-markt
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Starlink is marktleider, maar de concurrentie staat niet stil.{" "}
                <strong className="text-foreground">Amazon's Project Kuiper</strong> (VS)
                startte in 2025 met het lanceren van productiesatellieten en plant een
                netwerk van 3.236 toestellen — profiterend van Amazon's AWS-infrastructuur
                en logistiek.{" "}
                <strong className="text-foreground">OneWeb</strong> (VK) en{" "}
                <strong className="text-foreground">Telesat Lightspeed</strong> (Canada)
                richten zich op zakelijke en regionale markten. Deze concurrentiedruk kan
                leiden tot prijsverlaging maar ook tot innovatie in duurzamere
                satellietontwerpen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}