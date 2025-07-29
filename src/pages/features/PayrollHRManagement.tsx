import React from "react";
import { Clock, Shield, TrendingUp } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const PayrollHRManagement: React.FC = () => {
  const features = [
    "Automated salary calculation with tax deductions and benefits",
    "Comprehensive employee database and profile management",
    "Time and attendance tracking with biometric integration",
    "Leave management system with approval workflows",
    "Performance evaluation and goal tracking tools",
    "Compliance with local labor laws and regulations",
    "Employee self-service portal for payslips and requests",
    "Advanced HR analytics and workforce reporting",
    "Onboarding and offboarding process automation",
    "Integration with banking systems for direct deposits",
  ];

  const stats = [
    { label: "Processing Time", value: "75% Faster", icon: Clock },
    { label: "Accuracy Rate", value: "99.8%", icon: Shield },
    { label: "Employee Satisfaction", value: "4.8/5", icon: TrendingUp },
    { label: "Compliance Rate", value: "100%", icon: Shield },
  ];

  return (
    <PageTemplate
      title="Payroll & HR Management"
      subtitle="Complete Human Resource Solution"
      description="Streamline your human resources operations with our comprehensive payroll and HR management system. From automated salary processing to employee lifecycle management, ensure compliance, improve efficiency, and enhance employee satisfaction with our all-in-one HR platform."
      features={features}
      stats={stats}
      ctaText="Manage HR Better"
      ctaLink="/demo"
      backgroundGradient="from-purple-50 via-violet-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900"
      accentColor="purple"
    />
  );
};

export default PayrollHRManagement;
