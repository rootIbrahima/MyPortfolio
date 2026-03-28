import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { CertificationCard } from "@/components/CertificationCard";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Clock } from "lucide-react";
import { getObtainedCerts, getInProgressCerts } from "@/data/certifications";

export default function Certifications() {
  const obtained = getObtainedCerts();
  const inProgress = getInProgressCerts();

  return (
    <div className="py-16">
      <Container className="space-y-12">
        <SectionHeader
          label="Certifications"
          title="Certifications professionnelles"
          description="Certifications obtenues et en cours de préparation dans les domaines cloud, sécurité et DevOps."
        />

        {/* Obtained */}
        {obtained.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-500/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              </span>
              <h2 className="text-sm font-semibold">Obtenues</h2>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                {obtained.length}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {obtained.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>
          </section>
        )}

        {obtained.length > 0 && inProgress.length > 0 && <Separator />}

        {/* In progress */}
        {inProgress.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-500/10">
                <Clock className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              </span>
              <h2 className="text-sm font-semibold">En cours de préparation</h2>
              <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                {inProgress.length}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {inProgress.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>
          </section>
        )}

        {obtained.length === 0 && inProgress.length === 0 && (
          <p className="text-sm text-muted-foreground py-12 text-center">
            Aucune certification configurée. Remplissez{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md">src/data/certifications.ts</code>.
          </p>
        )}
      </Container>
    </div>
  );
}
