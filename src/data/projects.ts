export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  architecture?: string;
  myRole: string;
  stack: string[];
  tags: string[];
  results: string;
  highlights: string[];
  github?: string;
  demo?: string;
  reportPdf?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "virtualisation-cloud-computing",
    title: "VIRTUALISATION ET CLOUD COMPUTING",
    shortDescription:
      "Infrastructure cloud privée : cluster Proxmox HA, stockage distribué Ceph, sauvegarde PBS et automatisation Terraform.",
    description:
      "Conception et mise en place d’une infrastructure virtualisée et cloud : cluster Proxmox VE à 3 nœuds, haute disponibilité, stockage distribué Ceph, sauvegarde centralisée via Proxmox Backup Server, et déploiements automatisés avec Terraform. Déploiement d’un cloud privé OpenStack (MicroStack/DevStack), configuration réseau (privé/externe), routeur, Floating IP et accès SSH.",
    problem:
      "Gestion manuelle des VMs/CT, risque de panne, sauvegardes non centralisées et difficulté à standardiser les déploiements et l’exploitation de l’infrastructure.",
    solution:
      "Mise en place d’un cluster Proxmox VE (gestion centralisée + haute disponibilité), stockage distribué Ceph, sauvegardes planifiées via Proxmox Backup Server, et automatisation des déploiements avec Terraform (IaC).",
    myRole:
      "Conception de l’architecture, installation et configuration du cluster, mise en place des jobs de backup, automatisation Terraform, suivi des logs/tasks et documentation des procédures.",
    stack: [
      "Proxmox VE",
      "Ceph",
      "Proxmox Backup Server",
      "Terraform",
      "OpenStack (MicroStack/DevStack)",
      "Linux",
      "KVM/LXC",
    ],
    tags: ["Cloud", "Virtualisation", "Infrastructure"],
    results:
      "Mise en place d’un environnement virtualisation + cloud opérationnel avec haute disponibilité, sauvegardes centralisées et déploiements plus reproductibles grâce à Terraform.",
    highlights: [
      "Cluster Proxmox VE à 3 nœuds avec objectifs HA et gestion centralisée.",
      "Sauvegardes planifiées + datastore dédié sur Proxmox Backup Server.",
      "Provisioning automatisé d’instances/CT via Terraform (Infrastructure as Code).",
    ],
    reportPdf: "/reports/Virtualisation et Cloud computing.pdf",
    featured: true ,
  },
  {
    id: "2",
    slug: "web-security-protocols-audit",
    title: "Sécurisation des Protocoles Web & Audit de Sécurité Applicative",
    shortDescription:
      "Sécurisation HTTP/HTTPS, mitigation DoS/DDoS/Slowloris, audit OWASP ZAP (DVWA) et durcissement via WAF ModSecurity.",
    description:
      "Étude et mise en œuvre complète de la sécurisation des communications Web : analyse des protocoles HTTP/HTTPS, implémentation SSL/TLS et HSTS, protection contre les attaques DoS/DDoS/Slowloris, audit de vulnérabilités avec DVWA et OWASP ZAP, puis déploiement d’un WAF ModSecurity pour renforcer la sécurité applicative.",
    problem:
      "Les services web exposés via HTTP ou mal configurés restent vulnérables (interception réseau, XSS/SQLi, DoS/DDoS, attaques lentes), entraînant des risques sur la confidentialité, l’intégrité et la disponibilité.",
    solution:
      "Approche progressive : passage HTTP→HTTPS (SSL/TLS) + HSTS, mitigation DoS/DDoS via mod_evasive et mod_qos, audit et correction via OWASP ZAP (sur DVWA), puis durcissement avec ModSecurity2 + OWASP CRS et analyse des logs.",
    myRole:
      "Configuration Apache et mécanismes de sécurité web, réalisation des tests d’attaque et d’audit, analyse des journaux de sécurité, application de correctifs et renforcement selon les recommandations OWASP.",
    stack: [
      "HTTP/HTTPS",
      "SSL/TLS",
      "HSTS",
      "Apache2",
      "mod_evasive",
      "mod_qos",
      "OWASP ZAP",
      "DVWA",
      "ModSecurity2",
      "OWASP CRS",
      "Wireshark",
      "Linux",
    ],
    tags: ["Security", "Web", "Blue Team"],
    results:
      "Communications chiffrées et durcies, meilleure résistance aux attaques DoS/Slowloris, détection/correction de vulnérabilités web et blocage d’attaques via WAF avec exploitation des logs.",
    highlights: [
      "Activation HTTPS + implémentation HSTS pour forcer le chiffrement côté navigateur.",
      "Tests et mitigation DoS/DDoS/Slowloris avec mod_evasive (limites) puis mod_qos.",
      "Audit OWASP ZAP (DVWA) + durcissement WAF ModSecurity2 avec Core Rule Set (CRS).",
    ],
    // ✅ Le PDF 2 :
    reportPdf: "/reports/Sécurité des protocoles de communication du Web.pdf",
    featured: true,
  },
  {
    id: "3",
    slug: "cloud-monitoring-stack",
    title: "Intelligence Artificiel Appliqués",
    shortDescription: "Intelligence Artificiel Appliqués",
    description:
      "TODO_DESCRIPTION — Déploiement d'une plateforme d'observabilité centralisée couvrant métriques, logs et traces distribués pour une infrastructure cloud multi-services.",
    problem:
      "TODO_PROBLEM — Absence de visibilité sur l'état de l'infrastructure, détection tardive des incidents et diagnostics longs.",
    solution:
      "TODO_SOLUTION — Stack Prometheus/Grafana pour les métriques, ELK pour les logs, Alertmanager pour les notifications, avec dashboards opérationnels par service.",
    myRole:
      "TODO_ROLE — Conception de la stack, déploiement sur Kubernetes, création des dashboards Grafana et des règles d'alerting.",
    stack: ["RAG", "MCP", "FIN TUNNING", "", "Logstash", "Kibana", "Kubernetes"],
    tags: ["Monitoring", "Cloud", "DevOps"],
    results: "TODO_RESULTS",
    highlights: ["TODO_HIGHLIGHT_1", "TODO_HIGHLIGHT_2", "TODO_HIGHLIGHT_3"],
    reportPdf: "/reports/Rapport_Ibrahima_Ly_IA.pdf",
    featured: true,
  },
  {
    id: "4",
    slug: "security-audit-tool",
    title: "PPP",
    shortDescription: "Projets Professionnels Personnels ",
    description:
      "TODO_DESCRIPTION — Développement d'un outil d'audit de sécurité automatisant la collecte de vulnérabilités, leur classification CVSS et la génération de rapports.",
    problem:
      "TODO_PROBLEM — Les audits manuels étaient longs, peu reproductibles et les rapports difficiles à prioriser.",
    solution:
      "TODO_SOLUTION — Agrégation des résultats multi-outils (Nmap, OWASP, Trivy), scoring automatique et génération de rapport PDF structuré.",
    myRole:
      "TODO_ROLE — Conception et développement complet de l'outil, intégration des scanners, définition du format de rapport.",
    stack: ["Python", "OWASP", "Nmap", "Trivy", "Docker", "Jinja2"],
    tags: ["Security", "Pentest", "Audit"],
    results: "TODO_RESULTS",
    highlights: ["TODO_HIGHLIGHT_1", "TODO_HIGHLIGHT_2", "TODO_HIGHLIGHT_3"],
    reportPdf: "/reports/ppm.pdf",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}