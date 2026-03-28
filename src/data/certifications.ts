export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  certPdf?: string; // ex: /certs/aws-saa.pdf
  verifyUrl?: string;
  status: "obtained" | "in_progress";
  description?: string;
  badgeUrl?: string; // URL image du badge numérique
}

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Certification JAVA",
    issuer: "IBRAHIMA LY",
    year: "2025",
    certPdf: "/certs/java.pdf",
    verifyUrl: undefined,
    status: "obtained",
    description: "Java",
    badgeUrl: undefined,
  },
  {
    id: "2",
    name: "Certification docker ",
    issuer: "IBRAHIMA LY",
    year: "2025",
    certPdf: "/certs/docker.pdf",
    verifyUrl: undefined,
    status: "obtained",
    description: "Docker",
    badgeUrl: undefined,
  },
  {
    id: "3",
    name: "TODO_CERT_3_NAMEfh dejj ",
    issuer: "TODO_CERT_3_ISSUER",
    year: "TODO_YEAR",
    certPdf: undefined,
    verifyUrl: undefined,
    status: "in_progress",
    description: "TODO_CERT_3_DESCRIPTION",
    badgeUrl: undefined,
  },
  {
    id: "4",
    name: "TODO_CERT_4_NAME",
    issuer: "TODO_CERT_4_ISSUER",
    year: "TODO_YEAR",
    certPdf: undefined,
    verifyUrl: undefined,
    status: "in_progress",
    description: "TODO_CERT_4_DESCRIPTION",
    badgeUrl: undefined,
  },
];

export function getObtainedCerts(): Certification[] {
  return certifications.filter((c) => c.status === "obtained");
}

export function getInProgressCerts(): Certification[] {
  return certifications.filter((c) => c.status === "in_progress");
}
