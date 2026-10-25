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


// Isometric box for the massing drawing: x, y of the top-front corner, half width, half depth, height
function Box({ x, y, a, b, h, hot }: { x: number; y: number; a: number; b: number; h: number; hot?: boolean }) {
  const t = hot ? "i-acc" : "i-cob-t";
  return (
    <g>
      <polygon className={hot ? "i-acc-l" : "i-cob-l"} points={`${x - a},${y - b} ${x},${y} ${x},${y + h} ${x - a},${y - b + h}`} />
      <polygon className={hot ? "i-acc-r" : "i-cob-r"} points={`${x},${y} ${x + a},${y - b} ${x + a},${y - b + h} ${x},${y + h}`} />
      <polygon className={t} points={`${x},${y - 2 * b} ${x + a},${y - b} ${x},${y} ${x - a},${y - b}`} />
    </g>
  );
}

function Studio() {
  return (
    <svg className="ill" viewBox="0 0 600 400" role="img" aria-label="Design studio turning a written brief into a 3D building massing with area and carbon figures">
      <rect className="i-bg" width="600" height="400" />
      <rect className="i-card" x="28" y="32" width="200" height="336" />
      <text className="i-fg" x="46" y="66" fontSize="15" fontWeight="700">Describe the building</text>
      <rect className="i-line" x="46" y="80" width="164" height="118" />
      <text className="i-fg" fontSize="12">
        <tspan x="56" y="104">4-storey office with a</tspan>
        <tspan x="56" y="122">south-facing atrium,</tspan>
        <tspan x="56" y="140">timber frame, about</tspan>
        <tspan x="56" y="158">2,400 m² floor area.</tspan>
      </text>
      <rect className="i-acc" x="46" y="214" width="104" height="36" />
      <text x="62" y="237" fontSize="13" fontWeight="700" fill="#fff">Generate</text>
      <text className="i-mute" x="46" y="284" fontSize="11">Floor area</text>
      <text className="i-fg" x="46" y="302" fontSize="16" fontWeight="700">2,412 m²</text>
      <text className="i-mute" x="46" y="330" fontSize="11">Embodied carbon</text>
      <text className="i-fg" x="46" y="348" fontSize="16" fontWeight="700">312 kgCO₂e/m²</text>
      <rect className="i-card" x="244" y="32" width="328" height="336" />
      <g className="i-grid">
        {[0, 1, 2, 3, 4, 5, 6].map((k) => (
          <g key={k}>
            <line x1={268 + k * 48} y1="330" x2={268 + k * 48 + 96} y2="275" />
            <line x1={268 + k * 48} y1="275" x2={268 + k * 48 + 96} y2="330" />
          </g>
        ))}
      </g>
      <g className="i-pop">
        <Box x={380} y={300} a={70} b={40} h={34} />
        <Box x={380} y={266} a={70} b={40} h={34} />
        <Box x={380} y={232} a={70} b={40} h={34} />
        <Box x={380} y={198} a={70} b={40} h={34} hot />
      </g>
      <g className="i-pop d2">
        <Box x={480} y={320} a={42} b={24} h={30} />
        <Box x={480} y={290} a={42} b={24} h={30} />
      </g>
      <text className="i-mute" x="262" y="60" fontSize="11">Massing, level 4 selected</text>
    </svg>
  );
}

function Energy() {
  const nodes = [[468, 112], [512, 138], [512, 190], [468, 216], [424, 190], [424, 138]];
  return (
    <svg className="ill" viewBox="0 0 600 400" role="img" aria-label="ETL pipeline moving 30 terabytes of EnergyPlus results into a Cassandra cluster that answers building energy queries instantly">
      <rect className="i-bg" width="600" height="400" />
      <g>
        {[0, 1, 2].map((k) => (
          <rect key={k} className="i-card" x={40 + k * 8} y={60 + k * 8} width="120" height="150" />
        ))}
        <text className="i-fg" x="64" y="104" fontSize="14" fontWeight="700">EnergyPlus</text>
        <text className="i-mute" x="64" y="124" fontSize="12">simulation results</text>
        <text className="i-fg" x="64" y="168" fontSize="28" fontWeight="800">30 TB</text>
        <text className="i-mute" x="64" y="190" fontSize="12">every city</text>
      </g>
      <g fontSize="12" fontWeight="700">
        {["Extract", "Transform", "Load"].map((step, k) => (
          <g key={step} className={`i-pop${k ? " d" + (k + 1) : ""}`}>
            <rect className={k === 2 ? "i-acc" : "i-cob-l"} x="210" y={78 + k * 46} width="132" height="34" />
            <text x="226" y={100 + k * 46} fill="#fff">{step}</text>
          </g>
        ))}
      </g>
      <polyline className="i-stroke i-draw" points="180,140 200,140" />
      <polyline className="i-stroke i-draw" points="350,164 404,164" />
      <circle className="i-line" cx="468" cy="164" r="64" />
      <circle className="i-bg" cx="468" cy="164" r="60" />
      {nodes.map(([x, y], k) => (
        <circle key={k} className={k === 0 ? "i-acc" : "i-cob-t"} cx={x} cy={y} r="13" />
      ))}
      <text className="i-fg" x="468" y="168" fontSize="12" fontWeight="700" textAnchor="middle">Cassandra</text>
      <g className="i-pop d3">
        <rect className="i-card" x="40" y="262" width="524" height="100" />
        <text className="i-mute" x="64" y="292" fontSize="12">Office, Munich, 2,400 m²</text>
        <text className="i-fg" x="64" y="326" fontSize="24" fontWeight="800">118 kWh/m² a year</text>
        <text className="i-mute" x="64" y="346" fontSize="12">Annual energy use</text>
        <text className="i-fg" x="420" y="326" fontSize="24" fontWeight="800">Instant</text>
        <text className="i-mute" x="420" y="346" fontSize="12">no new simulation run</text>
      </g>
    </svg>
  );
}

const ART = { studio: Studio, energy: Energy, benchmark: Benchmark, survey: Survey, stocks: Stocks };

export default function ProjectArt({ art }: { art: keyof typeof ART }) {
  const Art = ART[art];
  return <Art />;
}
