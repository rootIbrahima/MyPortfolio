import { Link } from "react-router-dom";
import { ArrowRight, Download, Server, Cloud, Shield, Activity } from "lucide-react";
import { siteConfig } from "@/config";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

const specialties = [
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Conception d'APIs RESTful et d'architectures microservices scalables avec Spring Boot et Java.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Déploiement et orchestration d'infrastructures cloud-native avec Docker, Kubernetes et Terraform.",
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description:
      "Intégration de la sécurité dès la conception : SAST/DAST, analyse de vulnérabilités, hardening.",
  },
  {
    icon: Activity,
    title: "Observabilité",
    description:
      "Mise en place de stacks de monitoring complètes avec Prometheus, Grafana et ELK Stack.",
  },
];

function AvatarPhoto() {
  return (
    <div className="relative flex justify-center md:justify-end shrink-0 animate-fade-in animation-delay-200">
      {/* Blob décoratif derrière la photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-2xl"
      />
      {/* Anneau externe */}
      <div className="relative p-1 rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-transparent ring-1 ring-primary/15">
        {/* Container photo */}
        <div className="h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full overflow-hidden bg-muted ring-4 ring-background">
          <img
            src="/profil.png"
            alt={`Photo de ${siteConfig.name}`}
            className="h-full w-full object-cover object-center"
            loading="eager"
            onError={(e) => {
              // Fallback initiales si pas d'image
              const el = e.currentTarget;
              el.style.display = "none";
              const parent = el.parentElement;
              if (parent && !parent.querySelector("[data-initials]")) {
                const div = document.createElement("div");
                div.setAttribute("data-initials", "true");
                div.className =
                  "h-full w-full flex items-center justify-center bg-primary/10 text-primary font-bold text-5xl select-none";
                div.textContent = siteConfig.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("");
                parent.appendChild(div);
              }
            }}
          />
        </div>

        {/* Badge disponibilité flottant en bas */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 shadow-sm whitespace-nowrap dark:border-emerald-800/60 dark:bg-emerald-950/60 dark:text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Disponible
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div>
      {/* ── Hero ── */}
      <section className="hero-grid relative overflow-hidden min-h-[88vh] flex items-center">
        <Container>
          <div className="py-24 md:py-32 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-16">

            {/* Texte */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 animate-fade-up">
                Backend · Cloud · Security
              </p>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-fade-up animation-delay-100 leading-[1.05]">
                {siteConfig.name}
              </h1>

              <p className="mt-5 text-lg font-medium text-muted-foreground animate-fade-up animation-delay-200">
                {siteConfig.title}
              </p>

              <p className="mt-4 text-base text-muted-foreground leading-relaxed animate-fade-up animation-delay-300">
                Conception et déploiement d'architectures backend robustes, sécurisées et observables.
                Passionné par l'automatisation, la résilience des systèmes et les pratiques DevSecOps.
              </p>

              <div className="mt-9 flex flex-wrap gap-3 animate-fade-up animation-delay-400">
                <Button size="lg" asChild className="rounded-xl shadow-sm">
                  <Link to="/projects">
                    Voir mes projets
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-xl">
                  <a href="/cv.pdf" download>
                    <Download className="h-4 w-4" />
                    Télécharger CV
                  </a>
                </Button>
              </div>
            </div>

            {/* Photo */}
            <AvatarPhoto />
          </div>
        </Container>

        {/* Fondu bas */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ── Expertise ── */}
      <section className="py-24 border-t border-border">
        <Container>
          <SectionHeader
            label="Expertise"
            title="Ce que je fais"
            description="Spécialiste des systèmes backend à fort volume, de la sécurisation des pipelines et de la mise en place d'infrastructures cloud-native."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialties.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="group rounded-2xl card-shadow border-border/60 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:card-shadow-hover hover:border-primary/25"
              >
                <div className="h-0.5 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
                <CardHeader className="pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-3 group-hover:bg-primary/15 transition-colors duration-150">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-semibold">{title}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Projets en vedette ── */}
      <section className="py-24 border-t border-border bg-muted/20">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              label="Projets"
              title="Réalisations récentes"
              description="Une sélection de projets illustrant mon approche backend, cloud et sécurité."
            />
            <Button variant="ghost" size="sm" asChild className="hidden sm:flex shrink-0 ml-6 rounded-xl">
              <Link to="/projects">
                Tous les projets
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-8 flex sm:hidden">
            <Button variant="outline" asChild className="w-full rounded-xl">
              <Link to="/projects">
                Voir tous les projets
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* ── CTA Contact ── */}
      <section className="py-24 border-t border-border">
        <Container>
          <div className="relative mx-auto max-w-xl rounded-3xl border border-border bg-gradient-to-b from-muted/50 to-muted/20 p-10 text-center space-y-5 overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <p className="text-xs font-semibold uppercase tracking-widest text-primary relative">Contact</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl relative">
              Travaillons ensemble
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed relative">
              Disponible pour des missions, collaborations ou échanges techniques.
            </p>
            <div className="flex justify-center gap-3 pt-1 relative">
              <Button asChild className="rounded-xl shadow-sm">
                <Link to="/contact">
                  Me contacter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-xl">
                <Link to="/about">À propos</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
