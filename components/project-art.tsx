// Illustrations for each project, drawn in SVG so they follow the light and dark palette.
// Bars, lines and cards animate in on scroll through the .i-bar, .i-draw and .i-pop classes.

function Benchmark() {
  const rows = [
    { name: "GPT", w: 276, y: 152, accent: false, v: "92%" },
    { name: "Claude", w: 282, y: 186, accent: true, v: "94%" },
    { name: "LLaMA", w: 243, y: 220, accent: false, v: "81%" },
    { name: "DeepSeek", w: 261, y: 254, accent: false, v: "87%" },
  ];
  return (
    <svg className="ill" viewBox="0 0 600 400" role="img" aria-label="Dashboard comparing four language models on accuracy and latency">
      <rect className="i-bg" width="600" height="400" />
      <rect className="i-card" x="36" y="32" width="528" height="336" />
      <rect className="i-line" x="36" y="32" width="528" height="34" />
      <circle className="i-mute" cx="56" cy="49" r="5" />
      <circle className="i-mute" cx="74" cy="49" r="5" />
      <circle className="i-mute" cx="92" cy="49" r="5" />
      <text className="i-fg" x="64" y="104" fontSize="18" fontWeight="700">Model benchmark</text>
      <text className="i-mute" x="64" y="126" fontSize="12">Accuracy on 500 eval prompts</text>
      <g fontSize="13">
        {rows.map((r) => (
          <g key={r.name}>
            <text className="i-fg" x="64" y={r.y + 12}>{r.name}</text>
            <rect className="i-line" x="150" y={r.y} width="300" height="16" />
            <rect className={`${r.accent ? "i-acc" : "i-fg"} i-bar`} x="150" y={r.y} width={r.w} height="16" />
            <text className="i-fg" x="462" y={r.y + 13} fontWeight="700">{r.v}</text>
          </g>
        ))}
      </g>
      <text className="i-mute" x="64" y="306" fontSize="12">p95 latency, last 24 h</text>
      <line className="i-grid" x1="64" y1="346" x2="536" y2="346" />
      <polyline className="i-stroke i-draw" points="64,336 110,330 156,334 202,322 248,326 294,312 340,318 386,308 432,314 478,302 536,306" />
    </svg>
  );
}

function Survey() {
  const scale = [308, 332, 356, 380, 404, 428, 452, 500, 524];
  return (
    <svg className="ill" viewBox="0 0 600 400" role="img" aria-label="Survey builder generating a form from a written prompt">
      <rect className="i-bg" width="600" height="400" />
      <rect className="i-card" x="36" y="40" width="230" height="320" />
      <text className="i-fg" x="56" y="78" fontSize="16" fontWeight="700">Describe your survey</text>
      <rect className="i-line" x="56" y="94" width="190" height="110" />
      <text className="i-fg" fontSize="13">
        <tspan x="68" y="120">Onboarding feedback</tspan>
        <tspan x="68" y="140">for a SaaS product,</tspan>
        <tspan x="68" y="160">5 questions, include</tspan>
        <tspan x="68" y="180">an NPS rating.</tspan>
      </text>
      <rect className="i-acc" x="56" y="222" width="110" height="38" />
      <text x="74" y="246" fontSize="14" fontWeight="700" fill="#fff">Generate</text>
      <rect className="i-line" x="56" y="284" width="190" height="8" />
      <rect className="i-acc i-bar" x="56" y="284" width="150" height="8" />
      <text className="i-mute" x="56" y="314" fontSize="12">Drafting question 4 of 5</text>
      <g className="i-pop">
        <rect className="i-card" x="290" y="40" width="274" height="96" />
        <text className="i-fg" x="308" y="70" fontSize="13" fontWeight="700">How likely are you to recommend us?</text>
        <g className="i-line">
          {scale.map((x) => (
            <rect key={x} x={x} y="88" width="20" height="28" />
          ))}
        </g>
        <rect className="i-acc" x="476" y="88" width="20" height="28" />
      </g>
      <g className="i-pop d2">
        <rect className="i-card" x="290" y="150" width="274" height="104" />
        <text className="i-fg" x="308" y="180" fontSize="13" fontWeight="700">Which step took longest?</text>
        <circle className="i-acc" cx="316" cy="202" r="6" />
        <text className="i-fg" x="330" y="207" fontSize="12">Connecting data</text>
        <circle className="i-line" cx="316" cy="228" r="6" />
        <text className="i-mute" x="330" y="233" fontSize="12">Inviting the team</text>
      </g>
      <g className="i-pop d3">
        <rect className="i-card" x="290" y="268" width="274" height="92" />
        <text className="i-fg" x="308" y="298" fontSize="13" fontWeight="700">What should we improve?</text>
        <rect className="i-line" x="308" y="312" width="238" height="30" />
      </g>
    </svg>
  );
}

function Stocks() {
  const pts = "58,180 102,172 146,176 190,160 234,166 278,148 322,152 366,130 410,138 454,116 498,122 542,98";
  return (
    <svg className="ill" viewBox="0 0 600 400" role="img" aria-label="Stock chart with an assistant answering a question about quarterly results">
      <rect className="i-bg" width="600" height="400" />
      <rect className="i-card" x="36" y="36" width="528" height="186" />
      <text className="i-fg" x="58" y="68" fontSize="16" fontWeight="700">ACME Corp</text>
      <text className="i-mute" x="150" y="68" fontSize="13">Last 12 months</text>
      <text className="i-acc" x="470" y="68" fontSize="16" fontWeight="700">+18.4%</text>
      <line className="i-grid" x1="58" y1="110" x2="542" y2="110" />
      <line className="i-grid" x1="58" y1="150" x2="542" y2="150" />
      <line className="i-grid" x1="58" y1="190" x2="542" y2="190" />
      <path className="i-area" d={`M${pts.split(" ").join(" L")} L542 200 L58 200 Z`} />
      <polyline className="i-stroke i-draw" points={pts} />
      <circle className="i-acc" cx="542" cy="98" r="6" />
      <g className="i-pop">
        <rect className="i-fg" x="250" y="240" width="314" height="40" />
        <text x="266" y="265" fontSize="13" fontWeight="600" className="i-card">What drove revenue growth in Q3?</text>
      </g>
      <g className="i-pop d2">
        <rect className="i-card" x="36" y="294" width="390" height="76" />
        <rect className="i-acc" x="36" y="294" width="4" height="76" />
        <text className="i-fg" fontSize="13">
          <tspan x="54" y="320">Cloud subscriptions grew 31% year on year and</tspan>
          <tspan x="54" y="340">made up most of the quarter's increase.</tspan>
        </text>
        <text className="i-mute" x="54" y="360" fontSize="11">Source: Q3 filing, page 12</text>
      </g>
    </svg>
  );
}

const ART = { benchmark: Benchmark, survey: Survey, stocks: Stocks };

export default function ProjectArt({ art }: { art: keyof typeof ART }) {
  const Art = ART[art];
  return <Art />;
}
