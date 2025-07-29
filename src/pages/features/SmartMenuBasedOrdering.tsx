import React from "react";
import { Utensils, TrendingUp, Users, BarChart3 } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const SmartMenuBasedOrdering: React.FC = () => {
  const features = [
    "AI-powered personalized menu recommendations",
    "Dynamic pricing based on demand and availability",
    "Visual menu with high-quality images and descriptions",
    "Dietary restriction and allergy management",
    "Customer preference learning and adaptation",
    "Seasonal menu updates and special promotions",
    "Multi-language support for global customers",
    "Nutritional information and calorie tracking",
    "Social sharing and review integration",
    "Upselling and cross-selling optimization",
  ];

  const stats = [
    { label: "Order Value", value: "35% Higher", icon: TrendingUp },
    { label: "Customer Engagement", value: "2.5x More", icon: Users },
    { label: "Recommendation Accuracy", value: "92%", icon: BarChart3 },
    { label: "Ordering Speed", value: "50% Faster", icon: Utensils },
  ];

  return (
    <PageTemplate
      title="Smart Menu-Based Ordering"
      subtitle="AI-Powered Personalized Dining Experience"
      description="Transform the ordering experience with intelligent menu recommendations and personalization. Our AI-driven system learns customer preferences, suggests optimal choices, and creates engaging digital menus that increase satisfaction and drive revenue through smart recommendations and dynamic content."
      features={features}
      stats={stats}
      ctaText="Smart Ordering"
      ctaLink="/demo"
      backgroundGradient="from-lime-50 via-green-50 to-emerald-50 dark:from-gray-900 dark:via-lime-900 dark:to-green-900"
      accentColor="lime"
    />
  );
};

export default SmartMenuBasedOrdering;
