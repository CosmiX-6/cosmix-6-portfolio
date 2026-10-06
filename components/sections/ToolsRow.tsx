import {
  Code,
  Database,
  Zap,
  GitMerge,
  Workflow,
  TreeDeciduous,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";

const tools: { label: string; icon: LucideIcon }[] = [
  { label: "Python", icon: Code },
  { label: "SQL", icon: Database },
  { label: "PySpark", icon: Zap },
  { label: "BigQuery", icon: Database },
  { label: "Airflow", icon: GitMerge },
  { label: "scikit-learn", icon: Workflow },
  { label: "XGBoost", icon: TreeDeciduous },
  { label: "SHAP", icon: ScanSearch },
];

export function ToolsRow() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
          <div>
            <div className="eyebrow-badge mb-4">Tools &amp; Technologies</div>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight"
              style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
            >
              Tools I work with.
            </h2>
          </div>
          <p className="text-xs md:text-sm" style={{ color: "var(--color-muted)" }}>
            Core technologies and frameworks across data, ML, and production.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {tools.map(({ label, icon: Icon }) => (
            <li key={label} className="card-soft flex flex-col items-center gap-2.5 py-5 px-2">
              <span
                className="flex items-center justify-center w-11 h-11 rounded-full"
                style={{ background: "var(--color-accent-dim)", color: "var(--color-accent)" }}
              >
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <span className="text-xs font-semibold" style={{ color: "var(--color-headline)" }}>
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
