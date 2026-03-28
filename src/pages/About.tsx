import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillsList } from "@/components/SkillsList";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { siteConfig } from "@/config";

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    period: "2024 – En cours",
    title: "Master Réseaux Télécoms — Option DevOps / Cybersécurité",
    organization: "École Centrale des Logiciels Libres et des Télécommunications (EC2LT)",
    description:
      "Spécialisation en cloud computing, automatisation d'infrastructure, cybersécurité et architecture backend distribuée. Projets orientés virtualisation, haute disponibilité et sécurité applicative.",
  },
  {
    period: "2023 – 2024",
    title: "Stagiaire — Réseaux & Technologies Numériques (RTN)",
    organization: "RTN — Réseaux et Techniques Numériques",
    description:
      "Participation à la conception de solutions techniques, collaboration sur des projets, suivi d'avancement et travail en équipe dans un environnement orienté systèmes et réseaux.",
  },
  {
    period: "2021 – 2024",
    title: "Licence Réseaux Télécoms — Option DevOps / Cybersécurité",
    organization: "École Centrale des Logiciels Libres et des Télécommunications (EC2LT)",
    description:
      "Formation en administration systèmes Linux/Windows, développement web, virtualisation, sécurité offensive et analyse des vulnérabilités.",
  },
];

export default function About() {
  return (
    <div className="py-16">
      <Container className="space-y-16">
        {/* Introduction */}
        <section className="flex flex-col sm:flex-row gap-8 sm:gap-12 sm:items-start">
          {/* Photo */}
          <div className="shrink-0 flex justify-center sm:justify-start">
            <div className="relative p-0.5 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent ring-1 ring-primary/15">
              <div className="h-36 w-36 rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/profil.png"
                  alt={`Photo de ${siteConfig.name}`}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent && !parent.querySelector("[data-initials]")) {
                      const div = document.createElement("div");
                      div.setAttribute("data-initials", "true");
                      div.className =
                        "h-full w-full flex items-center justify-center bg-primary/10 text-primary font-bold text-3xl select-none";
                      div.textContent = siteConfig.name.split(" ").map((n) => n[0]).join("");
                      parent.appendChild(div);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="min-w-0">
            <SectionHeader label="À propos" title="Qui suis-je ?" className="mb-6" />

            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                Ingénieur DevOps / Cybersécurité en formation, spécialisé en développement backend,
                architecture cloud et virtualisation. J'aime concevoir des systèmes robustes,
                automatisés et sécurisés, avec une approche orientée infrastructure moderne, haute
                disponibilité et bonnes pratiques DevSecOps.
              </p>

              <p>
                Mon expérience couvre la mise en place d'environnements cloud privés, l'automatisation
                d'infrastructures (Infrastructure as Code), le développement backend et l'intégration
                de mécanismes de sécurité dès la conception. Je privilégie l'observabilité, la
                scalabilité et la qualité technique pour construire des solutions fiables et
                évolutives.
              </p>
            </div>

            <div className="mt-6">
              <Button variant="outline" size="sm" asChild>
                <a href="/cv.pdf" download className="inline-flex items-center gap-2">
                  <Download className="h-3.5 w-3.5" />
                  Télécharger mon CV
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* Skills */}
        <section>
          <SectionHeader
            label="Compétences"
            title="Stack technique"
            description="Technologies et outils que j'utilise régulièrement dans mes projets backend, cloud et sécurité."
            className="mb-8"
          />
          <SkillsList />
        </section>

        <Separator />

        {/* Timeline */}
        <section>
          <SectionHeader label="Parcours" title="Formation & expérience" className="mb-10" />

          <div className="relative space-y-0">
            {timeline.map((item, index) => (
              <div key={item.period + item.title} className="flex gap-5 relative">
                {/* Timeline indicator */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="mt-1 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/15 shrink-0" />
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 mt-1.5 mb-0 min-h-[48px] bg-gradient-to-b from-primary/30 to-border/60" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10 min-w-0">
                  {/* Period badge */}
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary mb-2">
                    {item.period}
                  </span>
                  <p className="text-sm font-semibold leading-snug mb-0.5">{item.title}</p>
                  <p className="text-xs text-muted-foreground mb-2">{item.organization}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
