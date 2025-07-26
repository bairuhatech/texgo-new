import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { Calculator, TrendingUp, PieChart, FileText } from 'lucide-react';

const AccountingSuite: React.FC = () => {
  const features = [
    "Automated bookkeeping with AI-powered transaction categorization",
    "Real-time financial reporting and dashboard analytics",
    "Multi-currency support for global businesses",
    "Integrated tax preparation and compliance tools",
    "Bank reconciliation with automatic matching",
    "Expense tracking and receipt management",
    "Financial forecasting and budget planning",
    "Audit trail and compliance reporting",
    "Integration with payment processors and banks",
    "Custom chart of accounts and reporting"
  ];

  const stats = [
    { label: 'Businesses Using', value: '15,000+', icon: TrendingUp },
    { label: 'Time Saved', value: '40%', icon: Calculator },
    { label: 'Accuracy Rate', value: '99.8%', icon: PieChart },
    { label: 'Reports Generated', value: '1M+', icon: FileText }
  ];

  return (
    <PageTemplate
      title="Accounting Suite"
      subtitle="Complete AI-Powered Financial Management"
      description="Transform your accounting operations with our comprehensive suite of AI-powered tools. From automated bookkeeping to advanced financial analytics, manage your finances with precision and ease."
      features={features}
      stats={stats}
      ctaText="Start Free Trial"
      ctaLink="/trial"
      backgroundGradient="from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900"
      accentColor="emerald"
    />
  );
};

export default AccountingSuite;