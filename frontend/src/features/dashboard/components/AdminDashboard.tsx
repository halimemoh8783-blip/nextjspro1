import type { DashboardStats } from "../types/index";

export function AdminDashboard({ data }: { data: DashboardStats }) {
  return (
    <section className="dashboard-role">
      <h2>{data.title}</h2>
      <p className="muted">{data.summary}</p>
      <div className="metrics">
        {data.metrics.map((m) => (
          <div key={m.label} className="metric">
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
