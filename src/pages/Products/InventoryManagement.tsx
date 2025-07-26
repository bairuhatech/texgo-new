import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { Package, BarChart3, Truck, AlertTriangle } from 'lucide-react';

const InventoryManagement: React.FC = () => {
  const features = [
    "Real-time inventory tracking across multiple locations",
    "Automated reorder points and purchase order generation",
    "Barcode scanning and QR code support",
    "Lot tracking and expiration date management",
    "Supplier management and vendor performance analytics",
    "Advanced reporting with profit margin analysis",
    "Integration with sales channels and accounting systems",
    "Warehouse management with pick, pack, and ship workflows",
    "Demand forecasting using AI algorithms",
    "Mobile app for on-the-go inventory management"
  ];

  const stats = [
    { label: 'Items Tracked', value: '2M+', icon: Package },
    { label: 'Accuracy Improved', value: '95%', icon: BarChart3 },
    { label: 'Shipping Speed', value: '3x Faster', icon: Truck },
    { label: 'Stockouts Reduced', value: '80%', icon: AlertTriangle }
  ];

  return (
    <PageTemplate
      title="Inventory Management"
      subtitle="Smart Stock Control & Warehouse Optimization"
      description="Optimize your inventory operations with intelligent stock management, predictive analytics, and seamless integration across all your sales channels."
      features={features}
      stats={stats}
      ctaText="Request Demo"
      ctaLink="/demo"
      backgroundGradient="from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
      accentColor="indigo"
    />
  );
};

export default InventoryManagement;