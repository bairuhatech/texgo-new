import React from "react";
import { Users, Clock, CheckCircle2, ChefHat } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const CustomerChefDisplaySystems: React.FC = () => {
  const features = [
    "Dual-screen solution for kitchen and customer areas",
    "Real-time order status updates and notifications",
    "Color-coded priority system for order management",
    "Estimated completion time display for customers",
    "Kitchen workflow optimization and queue management",
    "Customizable display layouts and branding",
    "Audio and visual alerts for order readiness",
    "Integration with POS and order management systems",
    "Multi-location support with centralized control",
    "Historical data and performance analytics",
  ];

  const stats = [
    { label: "Order Efficiency", value: "45% Faster", icon: Clock },
    { label: "Customer Wait Time", value: "30% Reduced", icon: Users },
    { label: "Kitchen Accuracy", value: "98%", icon: CheckCircle2 },
    { label: "Staff Satisfaction", value: "4.7/5", icon: ChefHat },
  ];

  return (
    <PageTemplate
      title="Customer & Chef Display Systems"
      subtitle="Seamless Kitchen & Service Coordination"
      description="Bridge the gap between kitchen and customer service with our intelligent display systems. Enhance operational efficiency, reduce wait times, and improve customer experience through real-time order tracking, visual cues, and seamless communication between front and back of house operations."
      features={features}
      stats={stats}
      ctaText="Coordinate Better"
      ctaLink="/demo"
      backgroundGradient="from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-orange-900 dark:to-amber-900"
      accentColor="amber"
    />
  );
};

export default CustomerChefDisplaySystems;
