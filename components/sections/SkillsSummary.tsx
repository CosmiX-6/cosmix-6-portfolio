const groups = [
  { name: "Modeling", items: ["XGBoost", "scikit-learn", "BayesianRidge", "SHAP", "statsmodels", "SciPy"] },
  { name: "Forecasting", items: ["EOQ forecasting", "Multi-horizon forecasting", "STL", "SARIMAX", "Temporal validation"] },
  { name: "Data systems", items: ["Python", "SQL", "BigQuery", "PySpark", "pandas", "NumPy"] },
  { name: "Production", items: ["Airflow", "GCP", "Dataproc", "Cloud Storage", "APIs", "Monitoring", "Explainability"] },
  { name: "Domain", items: ["Revenue intelligence", "Pipeline forecasting", "Marketing attribution", "Marketing mix modeling", "GTM analytics"] },
];

export function SkillsSummary() {
  return (
    <section id="skills" className="px-6 py-20 scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[11px] tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
          Technical depth
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl"
          style={{ color: "var(--color-headline)", letterSpacing: "-0.02em" }}
        >
          Tools, grouped by what I use them for.
        </h2>
        <p className="text-sm max-w-xl mb-12" style={{ color: "var(--color-body)" }}>
          Depth is shown in the projects above. This is the working toolkit behind them.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {groups.map((g) => (
            <div key={g.name}>
              <h3 className="font-mono text-[11px] tracking-widest uppercase mb-4 pb-3" style={{ color: "var(--color-accent)", borderBottom: "1px solid var(--color-border)" }}>
                {g.name}
              </h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-sm" style={{ color: "var(--color-body)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
