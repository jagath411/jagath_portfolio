import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <section className="section section--dark" id="skills">
      <div className="wrap">
        <div className="section__head">
          <div>
            <p className="eyebrow">Skills</p>
            <h2>What I work with every day</h2>
          </div>
          <p className="section__lede">Grouped by the part of the system each one lives in.</p>
        </div>
        <div className="services">
          {skillsData.map((group) => (
            <div className="service" key={group.title}>
              <p className="eyebrow">{group.kicker}</p>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
