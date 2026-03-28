import { Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PdfActionsProps {
  pdfPath: string;
  label?: string;
  className?: string;
}

export function PdfActions({ pdfPath, label = "PDF", className }: PdfActionsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {/* Ouvre le PDF directement dans un nouvel onglet */}
      <Button variant="outline" size="sm" asChild>
        <a href={pdfPath} target="_blank" rel="noopener noreferrer">
          <Eye className="h-3.5 w-3.5" />
          Voir {label}
        </a>
      </Button>

      {/* Téléchargement direct */}
      <Button variant="ghost" size="sm" asChild>
        <a href={pdfPath} download>
          <Download className="h-3.5 w-3.5" />
          Télécharger
        </a>
      </Button>
    </div>
  );
}
