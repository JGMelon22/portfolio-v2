export interface Project {
  name: string;
  description: string;
  tags: string[];
  repo: string;
}

/** Edit this list to manage the projects in the "Work" section. */
export const projects: Project[] = [
  {
    name: "MinIOFileProcessor",
    description:
      "File upload service that talks to MinIO, simulating an S3 storage workflow with a clean, testable .NET pipeline.",
    tags: ["C#", "ASP.NET Core", "MinIO", "S3"],
    repo: "https://github.com/JGMelon22/MinIOFileProcessor",
  },
  {
    name: "CustomMetricsPOC",
    description:
      "Dockerized API exposing a /metrics endpoint, scraped by Prometheus and visualised in Grafana dashboards.",
    tags: ["C#", "Prometheus", "Grafana", "Docker"],
    repo: "https://github.com/JGMelon22/CustomMetricsPOC",
  },
  {
    name: "HelloSQS",
    description:
      "ASP.NET Core sample that publishes and consumes messages from an SQS queue using ElasticMQ for local development.",
    tags: ["C#", "AWS SQS", "ElasticMQ", "Messaging"],
    repo: "https://github.com/JGMelon22/HelloSQS",
  },
  {
    name: "AutomaticMailSenderPOC",
    description:
      "Batch e-mail sender built with MailKit on ASP.NET Core, designed for reliable, scheduled bulk delivery.",
    tags: ["C#", "MailKit", "Background Jobs"],
    repo: "https://github.com/JGMelon22/AutomaticMailSenderPOC",
  },
  {
    name: "Weindrachen",
    description:
      'Web API to manage a wine catalogue ("Pipa de Vinho") — a focused CRUD service with a clean layered design.',
    tags: ["C#", "Web API", "REST"],
    repo: "https://github.com/JGMelon22/Weindrachen",
  },
  {
    name: "StudentsNHibernateDemo",
    description:
      "A demo project exploring Domain-Driven Design with NHibernate as the persistence layer over a students domain.",
    tags: ["C#", "DDD", "NHibernate"],
    repo: "https://github.com/JGMelon22/StudentsNHibernateDemo",
  },
];

/** Personal links — edit in one place. Leave email as "" to hide the e-mail button. */
export const links = {
  github: "https://github.com/JGMelon22",
  linkedin: "https://www.linkedin.com/in/jgvasconcellosmelao/",
  email: "",
};

/** Job-search status. Flip `profile.status` when things change. */
export const Availability = {
  Working: "working",
  OpenToWork: "open",
  Freelance: "freelance",
} as const;
export type Availability = (typeof Availability)[keyof typeof Availability];

export const profile: { company: string; status: Availability } = {
  company: "Fortes Tecnologia",
  // 👇 the only line to change when you start (or stop) looking for roles.
  status: Availability.Working,
};

/** How each status is displayed. `highlight` paints it in the accent colour. */
export const availabilityMeta: Record<Availability, { label: string; highlight: boolean }> = {
  [Availability.Working]: { label: `working @ ${profile.company}`, highlight: false },
  [Availability.OpenToWork]: { label: "open to opportunities", highlight: true },
  [Availability.Freelance]: { label: "available for freelance", highlight: true },
};
