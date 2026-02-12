import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jaxwalletImg from "@/public/jaxwallet.png";
import algositeImg from "@/public/algosite.png";
import dashboardImg from "@/public/dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "Remote, Singapore",
    description:
      "Architected an AI-driven culture and leadership assessment platform with OpenAI APIs, Python, Node.js, and React.js. Led migration from monolith to microservices and event-driven architecture. Managed AWS cloud infrastructure and DevOps.",
    icon: React.createElement(FaReact),
    date: "Nov 2025 - Present",
  },
  {
    title: "Software Engineer",
    location: "Bengaluru, India",
    description:
      "Led end-to-end design of TradeAction options/futures interface. Engineered cron-based pipelines and signal transaction apps. Also served as Technical Team Lead, owning task planning and coordination for critical applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Oct 2025",
  },
  {
    title: "AWS Data AI Intern",
    location: "Chennai, India",
    description:
      "Engineered end-to-end ETL pipelines with AWS Glue, Lambda, and Step Functions. Optimized AWS RDS storage and querying. Implemented scalable AWS data workflows.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2023 - Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "LLMOps Pipeline",
    description:
      "End-to-end LLMOps pipeline benchmarking GPT, Claude, LLaMA, and DeepSeek. Automated evaluation with LangSmith/TruLens and AWS CloudWatch monitoring.",
    tags: ["Python", "LangSmith", "AWS", "LLMs", "Data Analysis"],
    imageUrl: dashboardImg,
  },
  {
    title: "AI Survey Builder",
    description:
      "Custom AI-powered form and survey builder with dynamic generation. Built with Next.js, Node.js, and MongoDB, deployed on AWS EC2.",
    tags: ["Next.js", "Node.js", "MongoDB", "AWS EC2", "AI"],
    imageUrl: algositeImg,
  },
  {
    title: "AI Stock Research Tool",
    description:
      "Financial research platform leveraging LangChain, OpenAI embeddings, and FAISS. Features real-time Q&A and automated processing.",
    tags: ["Python", "Streamlit", "LangChain", "OpenAI", "FAISS"],
    imageUrl: jaxwalletImg,
  },
] as const;

export const skillsData = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Python",
  "Express.js",
  "HTML5",
  "CSS3",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "NoSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "Terraform",
  "GCP",
  "System Design",
  "Microservices",
] as const;
