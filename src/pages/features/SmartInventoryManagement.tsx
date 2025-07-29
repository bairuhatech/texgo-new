import React from "react";
import { Package, TrendingUp, Eye, Clock } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const SmartInventoryManagement: React.FC = () => {
  const features = [
    "Real-time inventory tracking across multiple locations",
    "AI-powered demand forecasting and predictive analytics",
    "Automated reorder points and purchase order generation",
    "Advanced ABC analysis and inventory optimization",
    "Multi-warehouse management with transfer capabilities",
    "Barcode and QR code scanning for quick updates",
    "Integration with suppliers and procurement systems",
    "Lot tracking and expiration date management",
    "Comprehensive reporting and inventory valuation",
    "Mobile app for on-the-go inventory management",
  ];

  const stats = [
    { label: "Stock Accuracy", value: "99.5%", icon: Eye },
    { label: "Cost Savings", value: "40%", icon: TrendingUp },
    { label: "Order Fulfillment", value: "25% Faster", icon: Clock },
    { label: "Waste Reduction", value: "60%", icon: Package },
  ];

  return (
    <PageTemplate
      title="Smart Inventory Management"
      subtitle="Intelligent Stock Control & Optimization"
      description="Revolutionize your inventory operations with AI-driven insights and real-time tracking. Our smart inventory management system provides predictive analytics, automated reordering, and comprehensive visibility across all your stock levels, helping you reduce costs while maintaining optimal inventory levels."
      features={features}
      stats={stats}
      ctaText="Optimize Inventory"
      ctaLink="/demo"
      backgroundGradient="from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900 dark:to-emerald-900"
      accentColor="emerald"
    />
  );
};

export default SmartInventoryManagement;
