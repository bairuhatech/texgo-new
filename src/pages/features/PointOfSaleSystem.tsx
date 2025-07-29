import React from "react";
import { CreditCard, BarChart3, Shield } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const PointOfSaleSystem: React.FC = () => {
  const features = [
    "Multi-payment processing (card, cash, digital wallets)",
    "Real-time inventory updates with each transaction",
    "Customer loyalty program integration",
    "Offline mode for uninterrupted operations",
    "Multi-location management and reporting",
    "Advanced receipt customization and branding",
    "Employee management and performance tracking",
    "Integration with accounting and inventory systems",
    "Comprehensive sales analytics and reporting",
    "Mobile POS capabilities for flexible operations",
  ];

  const stats = [
    { label: "Transaction Speed", value: "3x Faster", icon: Shield },
    { label: "Payment Success", value: "99.9%", icon: CreditCard },
    { label: "Customer Satisfaction", value: "4.9/5", icon: Shield },
    { label: "Revenue Growth", value: "28%", icon: BarChart3 },
  ];

  return (
    <PageTemplate
      title="Point of Sale System"
      subtitle="Smart POS for Modern Businesses"
      description="Transform your retail operations with our intelligent point of sale system. From lightning-fast transactions to comprehensive inventory management, provide exceptional customer experiences while gaining valuable insights into your business performance with our cloud-based POS solution."
      features={features}
      stats={stats}
      ctaText="Try POS System"
      ctaLink="/demo"
      backgroundGradient="from-indigo-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-indigo-900 dark:to-blue-900"
      accentColor="indigo"
    />
  );
};

export default PointOfSaleSystem;
