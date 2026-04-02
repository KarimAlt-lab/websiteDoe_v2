import { Link } from "react-router-dom";
import { Satellite } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Satellite className="h-5 w-5 text-primary" />
              <span className="font-heading font-bold text-sm tracking-wide">
                SURROUNDED BY STARLINK
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Een casestudy over de ecologische impact van Starlink-satellieten
              versus het winstbelang van SpaceX.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">
              Navigatie
            </h4>
            <div className="space-y-2">
              {[
                { to: "/wat-is-starlink", label: "Wat is Starlink?" },
                { to: "/ondernemerschap", label: "Winstmodel" },
                { to: "/duurzaamheid", label: "Ecologische Impact" },
                { to: "/balans", label: "De Balans" },
                { to: "/bronnen", label: "Bronnen" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">
              Project Info
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Academiejaar 2025–2026
              <br />
              Tweede-semester – DOE
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Surrounded By Starlink Satellites — Academisch onderzoeksproject
          </p>
        </div>
      </div>
    </footer>
  );
}