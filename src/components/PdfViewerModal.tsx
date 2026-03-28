import { useEffect, useRef } from "react";
import { X, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PdfViewerModalProps {
  pdfPath: string;
  label?: string;
  onClose: () => void;
}

export function PdfViewerModal({ pdfPath, label = "Document", onClose }: PdfViewerModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Fermer sur Échap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Bloquer le scroll du body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Visualiseur — ${label}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-background border-b border-border shrink-0">
        <p className="text-sm font-medium truncate max-w-[55vw]">{label}</p>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <a href={pdfPath} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Nouvel onglet</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={pdfPath} download>
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Télécharger</span>
            </a>
          </Button>
          <Button
            ref={closeRef}
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* PDF via <embed> — Chrome l'affiche avec son viewer natif,
          IDM n'intercepte pas les tags embed/object */}
      <div className="flex-1 min-h-0">
        <embed
          src={pdfPath}
          type="application/pdf"
          className="w-full h-full"
          title={label}
        />
      </div>
    </div>
  );
}
