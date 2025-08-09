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
  title: "Software Engineer Intern",
  location: "Bengaluru Urban, India",
  description:
    "Worked on a feedback form application for collecting course feedback and developed a course scholar application with login functionality. Contributed to UI design, backend integration, and user authentication features.",
  icon: React.createElement(LuGraduationCap),
  date: "2023",
},
{
  title: "AWS Data Engineer Intern",
  location: "Chennai, India",
  description:
    "Completed a 6-month internship as an AWS Data Engineer, working on ETL processes using AWS Glue to extract, transform, and load sales data. Gained hands-on experience in data pipeline development and AWS ecosystem tools.",
  icon: React.createElement(CgWorkAlt),
  date: "Feb 2023 - Sep 2023",
},
{
  title: "Full-Stack Developer",
  location:  "Bengaluru Urban, India",
  description:
    "Working at Finfolab Technologies as a Full-Stack Developer on the Algomojo product, an algorithmic trading application integrated with top Indian brokers. Developed features for creating trading strategies, executing trades, and enhancing user experience. Tech stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB.",
  icon: React.createElement(FaReact),
  date: "2023 - present",
},
] as const;

export const projectsData = [
  {
    title: "jaxwallet",
    description:
      "A decentralized app with Ethereum smart contracts using Google Ethereum tokenization. Enables secure transactions and public feedback for companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Solidity"],
    imageUrl: jaxwalletImg,
  },
  {
    title: "Algomojo",
    description:
      "A web platform for algo traders to create, test, and execute strategies. Built with Angular and Node.js, hosted on AWS, optimized for SEO, and powered by MySQL.",
    tags: ["Angular", "Node.js", "AWS", "SEO", "MySQL"],
    imageUrl: algositeImg,
  },
  {
    title: "Strategy Builder",
    description:
      "An Angular app for algo traders to create strategies, convert them into tradable signals, and place orders via top Indian brokers' APIs (Zerodha, Grow, TopBrokers).",
    tags: ["Angular", "TypeScript", "Broker APIs", "Zerodha", "Grow"],
    imageUrl: dashboardImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Aws Ec2",
  "Docker",
  "Devops",
  "CI/CD",
] as const;
