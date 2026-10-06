import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No external images needed for Phase 1
  // Will add domains when Phase 3 CMS is added

  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/work/pipeline-projection-engine", destination: "/work/sales-pipeline-forecasting", permanent: true },
      { source: "/work/demand-generation-potential-model", destination: "/work/pipeline-potential-forecasting", permanent: true },
      { source: "/work/walk-in-pipeline-projection", destination: "/work/inbound-pipeline-forecasting", permanent: true },
      { source: "/work/account-propensity-x-month", destination: "/work/multi-horizon-account-propensity", permanent: true },
      { source: "/work/time-decay-forecast-adjustment", destination: "/work/time-decay-forecast-smoothing", permanent: true },
      { source: "/work/average-index-forecast-adjustment", destination: "/work/seasonal-index-forecast-adjustment", permanent: true },
      { source: "/work/forecast-explainability-shap", destination: "/work/model-explainability-shap", permanent: true },
      { source: "/work/configurable-multi-model-framework", destination: "/work/multi-model-ml-framework", permanent: true },
      { source: "/work/pyspark-revenue-metrics-pipeline", destination: "/work/pyspark-data-pipeline-migration", permanent: true },
      { source: "/work/smart-filter-parser", destination: "/work/dynamic-sql-generation", permanent: true },
      { source: "/work/generic-regressor-framework", destination: "/work/ml-regression-framework", permanent: true },
      { source: "/work/record-level-likelihood-win-rate", destination: "/work/deal-win-probability-model", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "akashlabs.dev" }],
        destination: "https://www.akashlabs.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
