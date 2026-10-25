import { profile, projectsData } from "@/lib/data";
import ProjectArt from "./project-art";
import { Arrow } from "./icons";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section__head">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Things I've built on my own</h2>
          </div>
          <p className="section__lede">Side projects where I try a new part of the stack end to end.</p>
        </div>
        <div className="tools">
          {projectsData.map((p, i) => (
            <article className={`tool ${i % 2 ? "tool--flip" : ""}`} key={p.title}>
              <div className="tool__visual">
                <ProjectArt art={p.art} />
              </div>
              <div className="tool__copy rv">
                <p className="eyebrow">{p.kicker}</p>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn--dark">
                  View on GitHub <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
