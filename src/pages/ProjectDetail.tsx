import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PdfActions } from "@/components/PdfActions";
import { getProjectBySlug } from "@/data/projects";
import NotFound from "@/pages/NotFound";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2.5">
        <span className="h-px w-4 bg-primary/50 rounded-full shrink-0" />
        <h2 className="text-sm font-semibold tracking-tight uppercase text-primary/80 text-[11px] tracking-widest">
          {title}
        </h2>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed pl-6.5">
        {children}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (!slug) return <NotFound />;

  const project = getProjectBySlug(slug);

  if (!project) return <NotFound />;

  return (
    <div className="py-16">
      <Container className="space-y-10 max-w-3xl">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <button
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-3 w-3" />
            Retour
          </button>
          <span className="opacity-40">/</span>
          <Link to="/projects" className="hover:text-foreground transition-colors">
            Projets
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-foreground font-medium truncate max-w-[200px]">
            {project.title}
          </span>
        </nav>

        {/* Hero */}
        <header className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl leading-tight">
            {project.title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="rounded-xl">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button variant="outline" size="sm" asChild className="rounded-xl">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Demo
                </a>
              </Button>
            )}
            {project.reportPdf && (
              <PdfActions pdfPath={project.reportPdf} label="Rapport" />
            )}
          </div>
        </header>

        <Separator />

        {/* Main content */}
        <div className="space-y-8">
          <SectionBlock title="Problème">
            <p>{project.problem}</p>
          </SectionBlock>

          <SectionBlock title="Solution">
            <p>{project.solution}</p>
          </SectionBlock>

          {/* Architecture image */}
          {project.architecture && (
            <SectionBlock title="Architecture">
              <img
                src={project.architecture}
                alt="Schéma d'architecture"
                className="rounded-xl border border-border w-full object-contain max-h-96 mt-1"
                loading="lazy"
              />
            </SectionBlock>
          )}

          <SectionBlock title="Mon rôle">
            <p>{project.myRole}</p>
          </SectionBlock>

          {/* Stack */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-4 bg-primary/50 rounded-full shrink-0" />
              <h2 className="text-[11px] font-semibold tracking-widest uppercase text-primary/80">
                Stack technique
              </h2>
            </div>
            <div className="flex flex-wrap gap-1.5 pl-6">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline" className="rounded-full text-[11px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <SectionBlock title="Points clés">
            <ul className="space-y-2 mt-1">
              {project.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Résultats">
            <p>{project.results}</p>
          </SectionBlock>
        </div>

        <Separator />

        {/* Bottom PDF actions */}
        {project.reportPdf && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Documentation</p>
            <PdfActions pdfPath={project.reportPdf} label="Rapport complet" />
          </div>
        )}

        {/* Back nav */}
        <div>
          <Button variant="ghost" size="sm" asChild className="rounded-xl">
            <Link to="/projects">
              <ArrowLeft className="h-3.5 w-3.5" />
              Tous les projets
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
