import React from "react";
import { TrendingUp, BarChart3, Clock } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const PurchaseSalesManagement: React.FC = () => {
  const features = [
    "Automated purchase order creation and approval workflows",
    "Supplier management with performance tracking",
    "Sales pipeline management and opportunity tracking",
    "Customer relationship management integration",
    "Inventory synchronization with sales and purchases",
    "Advanced pricing strategies and discount management",
    "Multi-channel sales tracking and reporting",
    "Procurement analytics and cost optimization",
    "Contract management and vendor negotiations",
    "Real-time sales and purchase performance dashboards",
  ];

  const stats = [
    { label: "Order Processing", value: "5x Faster", icon: TrendingUp },
    { label: "Cost Savings", value: "30%", icon: Clock },
    { label: "Sales Growth", value: "45%", icon: BarChart3 },
    { label: "Customer Retention", value: "92%", icon: Clock },
  ];

  return (
    <PageTemplate
      title="Purchase & Sales Management"
      subtitle="Complete Procurement & Sales Solution"
      description="Optimize your entire purchase-to-pay and order-to-cash processes with our integrated sales and procurement management system. Streamline supplier relationships, accelerate sales cycles, and gain complete visibility into your business transactions with intelligent automation and analytics."
      features={features}
      stats={stats}
      ctaText="Boost Sales"
      ctaLink="/demo"
      backgroundGradient="from-red-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-red-900 dark:to-pink-900"
      accentColor="red"
    />
  );
};

export default PurchaseSalesManagement;
