import React from "react";
import { ClipboardList, Users, CheckCircle2, Clock } from "lucide-react";
import PageTemplate from "../../components/PageTemplate";

const OrderTakingApp: React.FC = () => {
  const features = [
    "Intuitive touch-friendly interface for fast order entry",
    "Real-time menu updates and item availability",
    "Customer information management and order history",
    "Multiple payment options and split billing",
    "Integration with kitchen display systems",
    "Order modification and cancellation capabilities",
    "Offline mode for continuous operations",
    "Advanced order tracking and status updates",
    "Customer notification system via SMS/email",
    "Comprehensive reporting and analytics",
  ];

  const stats = [
    { label: "Order Speed", value: "60% Faster", icon: ClipboardList },
    { label: "Order Accuracy", value: "99.5%", icon: CheckCircle2 },
    { label: "Customer Satisfaction", value: "4.8/5", icon: Users },
    { label: "Staff Efficiency", value: "40% Improved", icon: Clock },
  ];

  return (
    <PageTemplate
      title="Order Taking App"
      subtitle="Streamlined Customer Order Processing"
      description="Revolutionize your order management with our intuitive order taking application. Designed for speed and accuracy, our app streamlines the entire ordering process from customer interaction to kitchen delivery, ensuring seamless operations and enhanced customer satisfaction."
      features={features}
      stats={stats}
      ctaText="Take Orders"
      ctaLink="/demo"
      backgroundGradient="from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-teal-900 dark:to-cyan-900"
      accentColor="teal"
    />
  );
};

export default OrderTakingApp;
