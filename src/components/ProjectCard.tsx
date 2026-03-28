import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full group rounded-2xl card-shadow border-border/60 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:card-shadow-hover hover:border-primary/25">
      {/* Accent strip supérieur */}
      <div className="h-0.5 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent shrink-0" />

      <CardHeader className="pb-3 pt-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default" className="rounded-full px-2.5 text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-[15px] font-semibold leading-snug group-hover:text-primary transition-colors duration-150">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
          {project.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="rounded-md text-xs font-normal bg-muted/50">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 4 && (
            <Badge variant="outline" className="rounded-md text-xs text-muted-foreground font-normal">
              +{project.stack.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2 flex-wrap pt-0 pb-5">
        <Button variant="default" size="sm" asChild className="flex-1 min-w-[110px] rounded-xl">
          <Link to={`/projects/${project.slug}`}>
            Voir le projet
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Button>

        {project.github && (
          <Button variant="ghost" size="icon" asChild className="rounded-xl shrink-0">
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon className="h-4 w-4" />
            </a>
          </Button>
        )}

        {project.demo && (
          <Button variant="ghost" size="icon" asChild className="rounded-xl shrink-0">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
