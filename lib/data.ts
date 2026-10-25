export const profile = {
  name: "Jagath K R",
  email: "jagathramesh30@gmail.com",
  linkedin: "https://www.linkedin.com/in/jagath-k-r-308658214/",
  github: "https://github.com/jagath411",
  cv: "/CV.pdf",
} as const;

export const links = [
  { name: "Home", hash: "#top" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const marqueeData = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Python",
  "Django",
  "GraphQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "Redshift",
  "LangChain",
] as const;

export type JobTag = "Product" | "Fintech" | "Data";

export const experiencesData: {
  short: string;
  role: string;
  location: string;
  date: string;
  pill: string;
  tags: JobTag[];
  description: string;
}[] = [
  {
    short: "NashZero",
    role: "Associate Software Engineer",
    location: "Bengaluru",
    date: "Mar 2026 – now",
    pill: "Current",
    tags: ["Product", "Data"],
    description:
      "Owns the backend and AI integration for a SaaS product in sustainable architecture, including the agent workflows.",
  },
  {
    short: "KESS",
    role: "Software Developer",
    location: "Singapore",
    date: "Nov 2025 – Mar 2026",
    pill: "Contract",
    tags: ["Product"],
    description:
      "React and TypeScript apps on Node.js, Express and NestJS APIs, with data loading into MySQL on Amazon RDS.",
  },
  {
    short: "FinfoLab",
    role: "Software Engineer",
    location: "Bengaluru",
    date: "Dec 2023 – Oct 2025",
    pill: "Fintech",
    tags: ["Fintech", "Product"],
    description:
      "Trading front ends and REST and GraphQL services. Automated delivery on AWS, cutting deployment cycles by 30%.",
  },
  {
    short: "Cognizant",
    role: "Programmer Analyst Trainee",
    location: "Chennai",
    date: "Mar 2023 – Aug 2023",
    pill: "Data",
    tags: ["Data"],
    description:
      "End-to-end ETL pipeline on AWS with Glue, S3, Lambda triggers and CloudFormation.",
  },
];

export const projectsData = [
  {
    art: "benchmark",
    kicker: "AI and LLMOps",
    title: "LLMOps pipeline",
    description:
      "Benchmarks GPT, Claude, LLaMA and DeepSeek side by side, with automated evaluation in LangSmith and TruLens and monitoring in AWS CloudWatch.",
    tags: ["Python", "LangSmith", "AWS"],
  },
  {
    art: "survey",
    kicker: "SaaS",
    title: "AI survey builder",
    description:
      "Generates forms and surveys from a short prompt, then collects and stores the responses. Deployed on AWS EC2.",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    art: "stocks",
    kicker: "Fintech",
    title: "Stock research assistant",
    description:
      "Answers questions about company filings and news using OpenAI embeddings, FAISS retrieval and LangChain.",
    tags: ["LangChain", "FAISS", "Streamlit"],
  },
] as const;

export const skillsData = [
  {
    kicker: "Frontend",
    title: "Interfaces",
    description: "Responsive apps for trading and SaaS products.",
    items: ["React", "Next.js", "TypeScript", "Angular", "Vue.js", "Redux"],
  },
  {
    kicker: "Backend",
    title: "Services and APIs",
    description: "REST and GraphQL services other teams can build on.",
    items: ["Node.js", "NestJS", "Express", "Python", "Django REST", "Java"],
  },
  {
    kicker: "Data",
    title: "Pipelines and storage",
    description: "ETL, data loading and the databases behind it.",
    items: ["AWS Glue", "Redshift", "MySQL", "Amazon RDS", "SQL"],
  },
  {
    kicker: "Cloud",
    title: "AWS and GCP",
    description: "Compute, storage and access for production workloads.",
    items: ["EC2", "S3", "Lambda", "IAM", "Elastic Beanstalk", "GCP"],
  },
  {
    kicker: "DevOps",
    title: "Delivery",
    description: "Infrastructure as code and pipelines that ship safely.",
    items: ["Docker", "Kubernetes", "Terraform", "CloudFormation", "Jenkins", "Ansible"],
  },
  {
    kicker: "AI",
    title: "Agents and ML",
    description: "LLM features, agent workflows and evaluation.",
    items: ["AI agents", "LangChain", "OpenAI", "FAISS", "Machine learning"],
  },
] as const;

export const statsData = [
  { value: 3, suffix: "+", label: "years in software engineering" },
  { value: 4, suffix: "", label: "companies in India and Singapore" },
  { value: 30, suffix: "%", label: "shorter deployment cycles at FinfoLab" },
  { value: 25, suffix: "%", label: "higher application reliability at FinfoLab" },
] as const;

export const regionsData = [
  { city: "Bengaluru", places: ["NashZero", "FinfoLab Technologies"] },
  { city: "Singapore", places: ["KESS"] },
  { city: "Chennai", places: ["Cognizant"] },
  { city: "Germany", places: ["Open to your team"] },
] as const;

// Answers for the on-site assistant. It matches keywords only; everything here comes from the CV.
export const assistantKnowledge: { keys: string[]; answer: string }[] = [
  {
    keys: ["nashzero", "current", "now", "today", "present"],
    answer:
      "Jagath has been an Associate Software Engineer at NashZero in Bengaluru since March 2026. He owns the backend and AI integration for a SaaS product in sustainable architecture, including the agent workflows.",
  },
  {
    keys: ["experience", "career", "work", "job", "companies", "history", "background"],
    answer:
      "Four roles so far:\n• NashZero, Bengaluru (Mar 2026 – now): backend and AI agents\n• KESS, Singapore (Nov 2025 – Mar 2026): React, Node.js, NestJS\n• FinfoLab Technologies, Bengaluru (Dec 2023 – Oct 2025): trading front ends, APIs, AWS DevOps\n• Cognizant, Chennai (Mar – Aug 2023): ETL pipelines on AWS",
  },
  {
    keys: ["fintech", "trading", "finfolab", "finance", "stock"],
    answer:
      "At FinfoLab Technologies (Dec 2023 – Oct 2025) Jagath built trading front ends in React, Angular and Next.js, and REST and GraphQL services in Node.js and Django. He also built a stock research assistant with LangChain and FAISS as a side project.",
  },
  {
    keys: ["aws", "cloud", "devops", "docker", "kubernetes", "terraform", "deploy", "infrastructure"],
    answer:
      "He automated build and deployment with Docker, Kubernetes, Jenkins, Terraform and CloudFormation on AWS (EC2, S3, RDS, Lambda, IAM, Redshift). At FinfoLab that cut deployment cycles by 30% and raised application reliability by 25%.",
  },
  {
    keys: ["ai", "agent", "llm", "gpt", "claude", "ml", "machine"],
    answer:
      "At NashZero he builds AI agent workflows into the product backend. On his own he built an LLMOps pipeline that benchmarks GPT, Claude, LLaMA and DeepSeek, and an AI survey builder.",
  },
  {
    keys: ["skill", "stack", "tech", "language", "frontend", "backend", "react", "node", "python"],
    answer:
      "Frontend: React, Next.js, TypeScript, Angular, Vue.js, Redux\nBackend: Node.js, NestJS, Express, Python, Django REST, Java, GraphQL\nData: AWS Glue, Redshift, MySQL, RDS, SQL\nCloud and DevOps: AWS, GCP, Docker, Kubernetes, Terraform, Jenkins",
  },
  {
    keys: ["project", "built", "portfolio", "side"],
    answer:
      "Three side projects: an LLMOps pipeline for benchmarking language models, an AI survey builder (Next.js, Node.js, MongoDB on EC2), and a stock research assistant (LangChain, OpenAI, FAISS).",
  },
  {
    keys: ["data", "etl", "pipeline", "cognizant", "glue"],
    answer:
      "He started in data engineering at Cognizant, building an end-to-end ETL pipeline with AWS Glue, S3, Lambda triggers and CloudFormation. He later did data loading into MySQL on Amazon RDS at KESS.",
  },
  {
    keys: ["education", "degree", "study", "college", "university"],
    answer:
      "Bachelor of Engineering in Computer Science, Muthayammal Engineering College, 2019 – 2023.",
  },
  {
    keys: ["germany", "german", "relocat", "visa", "move", "europe", "berlin", "munich"],
    answer:
      "Jagath is open to software engineering roles in Germany. For relocation, timing and paperwork, the best next step is to email him directly at jagathramesh30@gmail.com.",
  },
  {
    keys: ["contact", "email", "hire", "reach", "phone", "linkedin", "interview"],
    answer:
      "Email: jagathramesh30@gmail.com\nLinkedIn: linkedin.com/in/jagath-k-r-308658214\nGitHub: github.com/jagath411",
  },
];

export const assistantSuggestions = [
  "Current role",
  "Experience",
  "Skills",
  "Open to Germany?",
  "Contact",
] as const;
