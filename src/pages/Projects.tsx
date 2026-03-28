import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, getAllTags } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  const allTags = getAllTags();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered =
    activeTag === null
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="py-16">
      <Container className="space-y-10">
        <SectionHeader
          label="Projets"
          title="Réalisations"
          description="Projets backend, cloud et sécurité — chacun conçu pour répondre à un problème technique réel."
        />

        {/* Tag filter pills */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
          <button
            onClick={() => setActiveTag(null)}
            className={cn(
              "inline-flex items-center rounded-full px-3.5 py-1 text-xs font-medium transition-all duration-150",
              activeTag === null
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground border border-border/60",
            )}
          >
            Tous
            <span className={cn(
              "ml-1.5 text-[10px] tabular-nums",
              activeTag === null ? "opacity-80" : "opacity-60",
            )}>
              {projects.length}
            </span>
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={cn(
                "inline-flex items-center rounded-full px-3.5 py-1 text-xs font-medium transition-all duration-150",
                activeTag === tag
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground border border-border/60",
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground py-12 text-center">
            Aucun projet pour cette catégorie.
          </p>
        )}

        {/* Summary */}
        <p className="text-xs text-muted-foreground text-right">
          {filtered.length} projet{filtered.length > 1 ? "s" : ""}
          {activeTag ? ` · ${activeTag}` : ""}
        </p>
      </Container>
    </div>
  );
}
