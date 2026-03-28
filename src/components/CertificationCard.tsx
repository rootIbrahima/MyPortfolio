import { ExternalLink, CheckCircle2, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PdfActions } from "@/components/PdfActions";
import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
  cert: Certification;
}

export function CertificationCard({ cert }: CertificationCardProps) {
  const isObtained = cert.status === "obtained";

  return (
    <Card className="flex flex-col h-full group rounded-2xl card-shadow border-border/60 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:card-shadow-hover hover:border-primary/25">
      {/* Accent strip — vert si obtenu, ambre si en cours */}
      <div
        className={`h-0.5 shrink-0 ${
          isObtained
            ? "bg-gradient-to-r from-emerald-500/70 via-emerald-400/40 to-transparent"
            : "bg-gradient-to-r from-amber-500/70 via-amber-400/40 to-transparent"
        }`}
      />

      <CardHeader className="pb-3 pt-5">
        <div className="flex items-start justify-between gap-3">
          {/* Icône + titre */}
          <div className="flex items-start gap-3 min-w-0">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                isObtained
                  ? "bg-emerald-50 dark:bg-emerald-950/40"
                  : "bg-amber-50 dark:bg-amber-950/40"
              }`}
            >
              {isObtained ? (
                <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              )}
            </div>

            <div className="min-w-0">
              <CardTitle className="text-sm font-semibold leading-snug">
                {cert.name}
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                {cert.issuer}
                {cert.year && <span className="mx-1">·</span>}
                {cert.year && <span>{cert.year}</span>}
              </p>
            </div>
          </div>

          {/* Badge statut */}
          {!isObtained && (
            <Badge
              variant="secondary"
              className="shrink-0 text-[10px] font-medium bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/60 rounded-full"
            >
              En cours
            </Badge>
          )}
        </div>
      </CardHeader>

      {cert.description && (
        <CardContent className="flex-1 pb-3 pt-0">
          <CardDescription className="text-xs leading-relaxed">
            {cert.description}
          </CardDescription>
        </CardContent>
      )}

      <CardContent className="pt-0 pb-4 flex flex-wrap gap-2">
        {cert.certPdf && (
          <PdfActions pdfPath={cert.certPdf} label="Certificat" />
        )}
        {cert.verifyUrl && (
          <Button variant="ghost" size="sm" asChild className="rounded-lg">
            <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              Vérifier
            </a>
          </Button>
        )}
        {!cert.certPdf && !cert.verifyUrl && isObtained && (
          <p className="text-xs text-muted-foreground/60 italic">
            PDF à ajouter dans <code className="bg-muted px-1 rounded text-[10px]">/public/certs/</code>
          </p>
        )}
      </CardContent>
    </Card>
  );
}
