import React from "react";
import { TrendingUp, BarChart3, DollarSign, Target } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const ComprehensiveFinanceTools: React.FC = () => {
  const features = [
    "Advanced budgeting and financial planning capabilities",
    "Cash flow forecasting with scenario modeling",
    "Investment tracking and portfolio management",
    "Financial ratio analysis and benchmarking",
    "Risk assessment and management tools",
    "Automated financial reporting and dashboards",
    "Tax planning and optimization strategies",
    "Multi-entity consolidation and reporting",
    "Integration with banking and investment platforms",
    "Regulatory compliance and audit preparation",
  ];

  const stats = [
    { label: "Planning Accuracy", value: "95%", icon: Target },
    { label: "Time Saved", value: "50 Hours/Month", icon: TrendingUp },
    { label: "ROI Improvement", value: "35%", icon: DollarSign },
    { label: "Risk Reduction", value: "70%", icon: BarChart3 },
  ];

  return (
    <PageTemplate
      title="Comprehensive Finance Tools"
      subtitle="Advanced Financial Planning & Analysis"
      description="Empower your financial decision-making with our comprehensive suite of finance tools. From budgeting and forecasting to investment management and risk analysis, gain complete visibility and control over your financial operations with intelligent analytics and automated reporting."
      features={features}
      stats={stats}
      ctaText="Enhance Finance"
      ctaLink="/demo"
      backgroundGradient="from-yellow-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-yellow-900 dark:to-orange-900"
      accentColor="orange"
    />
  );
};

export default ComprehensiveFinanceTools;
