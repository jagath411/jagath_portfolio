"use client";

import { useEffect, useRef, useState } from "react";
import { links } from "@/lib/data";

export default function FloatingNav() {
  const [active, setActive] = useState<string>(links[0].hash);
  const [scrolled, setScrolled] = useState(false);
  const pillRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const lastClick = useRef(0);

  // Slide the highlight under the active link
  useEffect(() => {
    const moveBlob = () => {
      const a = pillRef.current?.querySelector<HTMLAnchorElement>(`a[href="${active}"]`);
      const blob = blobRef.current;
      if (!a || !blob) return;
      blob.style.width = `${a.offsetWidth}px`;
      blob.style.height = `${a.offsetHeight}px`;
      blob.style.transform = `translate(${a.offsetLeft}px, ${a.offsetTop}px)`;
    };
    moveBlob();
    document.fonts?.ready.then(moveBlob);
    window.addEventListener("resize", moveBlob);
    return () => window.removeEventListener("resize", moveBlob);
  }, [active]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      progressRef.current?.style.setProperty("--p", String(max > 0 ? y / max : 0));
      if (Date.now() - lastClick.current < 900) return;
      let current = "#top";
      document.querySelectorAll<HTMLElement>("main section[id]").forEach((s) => {
        if (s.getBoundingClientRect().top < window.innerHeight * 0.35) current = `#${s.id}`;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fnav ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="fnav__pill" ref={pillRef} aria-label="Main">
          <span className="fnav__blob" ref={blobRef} aria-hidden="true" />
          {links.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className={active === link.hash ? "is-active" : ""}
              aria-current={active === link.hash ? "true" : undefined}
              onClick={() => {
                lastClick.current = Date.now();
                setActive(link.hash);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>
      <div className="progress" ref={progressRef} />
    </>
  );
}
