import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="min-h-[72vh] flex items-center">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-8">
          {/* Code block aesthetic */}
          <div className="inline-block rounded-2xl border border-border bg-muted/60 px-6 py-4 font-mono text-left shadow-sm">
            <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-widest">exit code</p>
            <p className="text-5xl font-bold tracking-tight text-primary">404</p>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">Page introuvable</h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
              La ressource demandée n'existe pas ou a été déplacée.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button asChild className="rounded-xl">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button variant="outline" asChild className="rounded-xl">
              <Link to="/projects">Voir les projets</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
