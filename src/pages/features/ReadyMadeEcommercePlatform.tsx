import React from "react";
import { ShoppingBag, CreditCard, BarChart3, Globe } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const ReadyMadeEcommercePlatform: React.FC = () => {
  const features = [
    "Fully customizable online store with modern templates",
    "Integrated payment gateway with multiple options",
    "Advanced product catalog management",
    "SEO optimization and marketing tools",
    "Mobile-responsive design and PWA capabilities",
    "Inventory synchronization with physical stores",
    "Customer account management and loyalty programs",
    "Order tracking and shipping integration",
    "Analytics dashboard and sales reporting",
    "Multi-currency and multi-language support",
  ];

  const stats = [
    { label: "Sales Growth", value: "250%", icon: BarChart3 },
    { label: "Customer Satisfaction", value: "4.9/5", icon: ShoppingBag },
    { label: "Platform Uptime", value: "99.9%", icon: Globe },
    { label: "Conversion Rate", value: "8.5%", icon: CreditCard },
  ];

  return (
    <PageTemplate
      title="Ready-Made Ecommerce Platform"
      subtitle="Complete Online Store Solution"
      description="Launch your online business instantly with our comprehensive ecommerce platform. From beautiful storefronts to secure payments and logistics management, everything you need to sell online successfully is included in our feature-rich, scalable ecommerce solution."
      features={features}
      stats={stats}
      ctaText="Launch Store"
      ctaLink="/demo"
      backgroundGradient="from-rose-50 via-pink-50 to-fuchsia-50 dark:from-gray-900 dark:via-rose-900 dark:to-pink-900"
      accentColor="rose"
    />
  );
};

export default ReadyMadeEcommercePlatform;
