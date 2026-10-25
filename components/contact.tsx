"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState("");

  const copy = () => {
    if (!navigator.clipboard) return setStatus(profile.email);
    navigator.clipboard.writeText(profile.email).then(
      () => setStatus("Email copied"),
      () => setStatus(profile.email)
    );
  };

  return (
    <section className="section cta" id="contact">
      <div className="wrap cta__inner">
        <p className="eyebrow">Contact</p>
        <h2 className="rv">Hiring an engineer in Germany? Let's talk.</h2>
        <p>I'm looking for full-stack, platform or AI engineering roles. Email is the fastest way to reach me.</p>
        <a className="mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="btn-row">
          <button type="button" className="btn btn--primary" onClick={copy}>
            Copy email
          </button>
          <a className="btn btn--light" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <span className="copied" role="status">
          {status}
        </span>
      </div>
    </section>
  );
}
