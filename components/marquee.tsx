import { marqueeData } from "@/lib/data";

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Technologies" tabIndex={0}>
      <div className="marquee__track">
        {marqueeData.map((t) => (
          <span key={t}>{t}</span>
        ))}
        {marqueeData.map((t) => (
          <span key={`${t}-copy`} aria-hidden="true">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
