import React from "react";
import { BarChart3, TrendingUp, Users } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const ExecutiveReportingApp: React.FC = () => {
  const features = [
    "Real-time interactive dashboards with customizable widgets",
    "AI-powered business insights and trend analysis",
    "Automated report generation and scheduling",
    "Multi-dimensional data visualization and charts",
    "Executive KPI tracking and performance metrics",
    "Cross-departmental data integration and correlation",
    "Mobile-responsive design for on-the-go access",
    "Advanced filtering and drill-down capabilities",
    "Secure sharing and collaboration features",
    "Export capabilities in multiple formats (PDF, Excel, etc.)",
  ];

  const stats = [
    { label: "Reporting Speed", value: "10x Faster", icon: TrendingUp },
    { label: "Data Accuracy", value: "99.9%", icon: BarChart3 },
    { label: "Decision Time", value: "50% Reduced", icon: Users },
    { label: "Executive Adoption", value: "95%", icon: Users },
  ];

  return (
    <PageTemplate
      title="Executive Reporting App"
      subtitle="Real-Time Business Intelligence"
      description="Transform your decision-making with powerful executive reporting and analytics. Our intelligent reporting app provides real-time insights, customizable dashboards, and automated analysis to help executives make data-driven decisions quickly and confidently with comprehensive business intelligence."
      features={features}
      stats={stats}
      ctaText="View Reports"
      ctaLink="/demo"
      backgroundGradient="from-slate-50 via-gray-50 to-zinc-50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-900"
      accentColor="slate"
    />
  );
};

export default ExecutiveReportingApp;
