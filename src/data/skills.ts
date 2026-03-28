export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend Engineering",
    icon: "Server",
    description: "Conception d'APIs robustes et d'applications distribuées.",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
    ],
  },
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    icon: "Cloud",
    description: "Déploiement et orchestration d'infrastructures cloud-native.",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Terraform",
      "Ansible",
      "TODO_CLOUD_PROVIDER",
      "CI/CD",
      "Infrastructure as Code",
    ],
  },
  {
    id: "security",
    name: "Cybersécurité",
    icon: "Shield",
    description: "Sécurisation des applications, des pipelines et des infrastructures.",
    skills: [
      "OWASP Top 10",
      "SAST / DAST",
      "Pentest",
      "Trivy",
      "SonarQube",
      "OWASP ZAP",
      "HashiCorp Vault",
      "SSL/TLS",
    ],
  },
  {
    id: "devops",
    name: "DevOps & Monitoring",
    icon: "Activity",
    description: "Observabilité, automatisation et fiabilité des systèmes.",
    skills: [
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "ELK Stack",
      "Git",
    ],
  },
];
