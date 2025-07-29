import React from "react";
import { ShoppingBag, TrendingUp } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const CompleteMarketplaceSoftware: React.FC = () => {
  const features = [
    "Multi-vendor marketplace with seller onboarding",
    "Centralized inventory management across channels",
    "Commission and fee management system",
    "Advanced seller analytics and performance tracking",
    "Dispute resolution and customer support tools",
    "Multi-channel selling (online, mobile, social)",
    "Automated order routing and fulfillment",
    "Review and rating system for quality control",
    "Marketing tools and promotional campaigns",
    "Comprehensive admin dashboard and controls",
  ];

  const stats = [
    { label: "Vendor Growth", value: "300% Faster", icon: ShoppingBag },
    { label: "Revenue Increase", value: "150%", icon: TrendingUp },
    { label: "Order Processing", value: "80% Automated", icon: ShoppingBag },
    { label: "Platform Efficiency", value: "95%", icon: TrendingUp },
  ];

  return (
    <PageTemplate
      title="Complete Marketplace Software"
      subtitle="Multi-Vendor Commerce Platform"
      description="Build and scale your marketplace with our comprehensive multi-vendor platform. From vendor management to order fulfillment, create a thriving ecosystem where sellers can grow their business while you manage everything from a centralized dashboard with advanced analytics and automation."
      features={features}
      stats={stats}
      ctaText="Build Marketplace"
      ctaLink="/demo"
      backgroundGradient="from-violet-50 via-purple-50 to-fuchsia-50 dark:from-gray-900 dark:via-violet-900 dark:to-purple-900"
      accentColor="violet"
    />
  );
};

export default CompleteMarketplaceSoftware;
