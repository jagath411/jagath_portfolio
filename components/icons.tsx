export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowBack() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M20 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

// Small building that assembles floor by floor (CSS animates .b-floor and .b-win)
export function BuildingIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 40 44" aria-hidden="true" style={style}>
      <rect className="b-floor" x="8" y="32" width="24" height="10" fill="currentColor" />
      <rect className="b-floor" x="8" y="21" width="24" height="10" fill="currentColor" />
      <rect className="b-floor" x="10" y="10" width="20" height="10" fill="currentColor" />
      <path className="b-floor" d="M10 9 L20 2 L30 9 Z" fill="var(--accent)" />
      <g fill="var(--accent)">
        <rect className="b-win" x="12" y="24" width="4" height="4" />
        <rect className="b-win" x="18" y="24" width="4" height="4" />
        <rect className="b-win" x="24" y="24" width="4" height="4" />
        <rect className="b-win" x="14" y="13" width="4" height="4" />
        <rect className="b-win" x="22" y="13" width="4" height="4" />
        <rect x="17" y="35" width="6" height="7" />
      </g>
    </svg>
  );
}
