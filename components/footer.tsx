import { links, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="logo__mark" aria-hidden="true">
              J
            </span>
            <p>
              {profile.name}
              <br />
              Full-stack software engineer
            </p>
          </div>
          <nav className="footer__links" aria-label="Footer">
            {links.slice(1).map((l) => (
              <a href={l.hash} key={l.hash}>
                {l.name}
              </a>
            ))}
            <a href={profile.cv}>CV (PDF)</a>
          </nav>
          <div className="footer__promo">
            <h3>Full CV</h3>
            <p>Roles, dates and the complete skills list in one PDF.</p>
            <a href={profile.cv} className="btn btn--light btn--sm" download>
              Download CV
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="footer__social">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M5 9h3v10H5zM6.5 4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM10 9h3v1.5c.5-.9 1.6-1.8 3.3-1.8 3 0 3.7 2 3.7 4.6V19h-3v-5c0-1.2 0-2.7-1.7-2.7S13 12.6 13 13.9V19h-3z" />
              </svg>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
