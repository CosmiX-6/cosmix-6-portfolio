import { CheckCircle2 } from "lucide-react";

const checklist = ["Data Engineering", "Modeling & Validation", "Production Systems", "Business Impact"];
const quarters = ["Q1", "Q2", "Q3", "Q4"];
const bars = [38, 52, 46, 64, 58, 78];

export function HeroDashboard() {
  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0 h-[360px] sm:h-[400px]" aria-hidden>
      {/* Pipeline forecast card */}
      <div className="card-soft absolute left-0 top-0 w-[88%] p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold" style={{ color: "var(--color-headline)" }}>
            Pipeline Forecast
          </p>
          <div className="flex items-center gap-3 text-[10px]" style={{ color: "var(--color-muted)" }}>
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--color-accent)" }} />
              Actual
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ background: "#A9A2F5" }} />
              Predicted
            </span>
          </div>
        </div>
        <svg viewBox="0 0 300 120" className="w-full h-auto" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroForecastFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.28" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,96 C40,84 80,88 120,66 S200,46 300,20 L300,120 L0,120 Z"
            fill="url(#heroForecastFill)"
          />
          <path
            d="M0,96 C40,84 80,88 120,66 S200,46 300,20"
            fill="none"
            stroke="#A9A2F5"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M0,100 L40,88 L80,94 L120,70 L160,74 L200,56"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex justify-between mt-2 text-[10px] font-mono" style={{ color: "var(--color-muted)" }}>
          {quarters.map((q) => (
            <span key={q}>{q}</span>
          ))}
        </div>
      </div>

      {/* Revenue intelligence card */}
      <div className="card-soft absolute right-0 top-4 w-[44%] p-4">
        <p className="text-[10px] font-semibold mb-1" style={{ color: "var(--color-muted)" }}>
          Revenue Intelligence
        </p>
        <p className="text-lg font-bold font-mono mb-3" style={{ color: "var(--color-metric)" }}>
          +15%
        </p>
        <div className="flex items-end gap-1 h-14">
          {bars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === bars.length - 1 ? "var(--color-accent)" : "var(--color-accent-dim)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Checklist card */}
      <div className="card-soft absolute right-0 bottom-14 w-[48%] p-4">
        <p className="text-[11px] font-semibold mb-2.5" style={{ color: "var(--color-headline)" }}>
          From Data to Decisions
        </p>
        <ul className="space-y-2">
          {checklist.map((item, i) => (
            <li key={item} className="flex items-center gap-1.5 text-[10px]" style={{ color: i === 3 ? "var(--color-muted)" : "var(--color-body)" }}>
              <CheckCircle2 size={12} style={{ color: "var(--color-accent)" }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom sliver */}
      <div className="card-soft absolute left-0 bottom-0 w-[60%] h-12 p-3 flex items-end gap-1">
        {bars.map((h, i) => (
          <span key={i} className="flex-1 rounded-sm" style={{ height: `${h / 2}%`, background: "var(--color-accent-dim)" }} />
        ))}
      </div>
    </div>
  );
}
