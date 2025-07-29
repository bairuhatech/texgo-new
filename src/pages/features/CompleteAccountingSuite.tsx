import React from "react";
import { Calculator, TrendingUp, BarChart3, DollarSign } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const CompleteAccountingSuite: React.FC = () => {
  const features = [
    "AI-powered automated bookkeeping and transaction categorization",
    "Real-time financial reporting and analytics dashboard",
    "Multi-currency support with automatic exchange rate updates",
    "Advanced tax calculation and compliance management",
    "Seamless integration with banks and payment processors",
    "Customizable chart of accounts and financial workflows",
    "Automated invoice generation and accounts receivable tracking",
    "Comprehensive audit trails and financial controls",
    "Cloud-based access with enterprise-grade security",
    "Collaborative tools for accounting teams and stakeholders",
  ];

  const stats = [
    { label: "Processing Speed", value: "10x Faster", icon: TrendingUp },
    { label: "Accuracy Rate", value: "99.9%", icon: Calculator },
    { label: "Cost Reduction", value: "60%", icon: DollarSign },
    { label: "Client Satisfaction", value: "4.9/5", icon: BarChart3 },
  ];

  return (
    <PageTemplate
      title="Complete Accounting Suite"
      subtitle="AI-Powered Financial Management Revolution"
      description="Transform your financial operations with our comprehensive AI-driven accounting suite. From automated bookkeeping to advanced analytics, streamline every aspect of your financial management with intelligent automation, real-time insights, and seamless integrations that adapt to your business needs."
      features={features}
      stats={stats}
      ctaText="Start Free Trial"
      ctaLink="/demo"
      backgroundGradient="from-blue-50 via-cyan-50 to-green-50 dark:from-gray-900 dark:via-blue-900 dark:to-cyan-900"
      accentColor="blue"
    />
  );
};

export default CompleteAccountingSuite;
