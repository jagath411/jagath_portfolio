"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Senior Software Engineer</span> with over{" "}
        <span className="font-medium">3 years of experience</span> in building
        scalable web applications and cloud-native{" "}
        <span className="font-medium">FinTech solutions</span>. My expertise spans
        across{" "}
        <span className="font-medium">
          Java, JavaScript, Node.js, React, and AWS
        </span>
        . I have a strong background in architecting{" "}
        <span className="italic">AI-driven products</span>, migrating monoliths to
        microservices, and optimizing system performance. Currently, I work at{" "}
        <span className="font-medium">Kess</span>, where I architect AI-driven
        assessment workflows and manage cloud infrastructure.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and exploring my interest in trucking
        content like overlanding and travel videos. I also love listening to
        podcasts and reading books. I am always looking to learn new
        technologies, currently exploring{" "}
        <span className="font-medium">Google Vertex AI</span> and{" "}
        <span className="font-medium">history/philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
