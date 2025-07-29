import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  Package,
  Users,
  CreditCard,
  ShoppingCart,
  BarChart3,
  Monitor,
  Smartphone,
  ChefHat,
  Globe,
  Store,
  Database,
  ExternalLink,
} from "lucide-react";
import { useApp } from "../contexts/AppContext";

interface FeatureCardProps {
  title: string;
  description: string;
  url?: string;
  onClick?: () => void;
  openInNewTab?: boolean;
}

interface FeaturesProps {
  // Optional array of custom feature configurations
  customFeatures?: FeatureCardProps[];
  // Optional function to generate URLs dynamically
  urlGenerator?: (title: string, index: number) => string;
  // Optional click handler for all cards
  onFeatureClick?: (feature: any, index: number) => void;
  // Whether cards should be clickable at all
  clickable?: boolean;
  // Whether to open links in new tabs
  openInNewTab?: boolean;
}

const Features: React.FC<FeaturesProps> = ({
  customFeatures,
  urlGenerator,
  onFeatureClick,
  clickable = true,
  openInNewTab = true,
}) => {
  const { translations } = useApp();

  const featureIcons = [
    Calculator,
    Package,
    Users,
    CreditCard,
    ShoppingCart,
    Monitor,
    BarChart3,
    Smartphone,
    ChefHat,
    Globe,
    Store,
    Database,
  ];

  const featureColors = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-purple-500 to-purple-600",
    "from-yellow-500 to-yellow-600",
    "from-red-500 to-red-600",
    "from-indigo-500 to-indigo-600",
    "from-pink-500 to-pink-600",
    "from-teal-500 to-teal-600",
    "from-orange-500 to-orange-600",
    "from-cyan-500 to-cyan-600",
    "from-emerald-500 to-emerald-600",
    "from-violet-500 to-violet-600",
  ];

  // Generate features data
  const features =
    customFeatures ||
    translations.features.items.map((item: any, index: number) => {
      let url = "";

      if (urlGenerator) {
        url = urlGenerator(item.title, index);
      } else {
        // Use enhanced priority system: externalUrl > url > generated
        if (item.externalUrl) {
          url = item.externalUrl;
        } else if (item.url) {
          url = item.url;
        } else {
          url = `/features/${item.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`;
        }
      }

      return {
        icon: featureIcons[index],
        title: item.title,
        description: item.description,
        color: featureColors[index],
        url: url,
        openInNewTab:
          item.openInNewTab !== undefined ? item.openInNewTab : openInNewTab,
        // Pass the full item for the click handler to access enhanced properties
        item: item,
        // Add indicators for UI feedback
        isExternal: !!item.externalUrl,
        hasExternalOption: !!item.externalUrl,
        hasFallback: !!item.url,
      };
    });

  // Handle feature card click
  const handleFeatureClick = (
    feature: any,
    index: number,
    event?: React.MouseEvent
  ) => {
    if (onFeatureClick) {
      event?.preventDefault();
      onFeatureClick(feature, index);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Render feature card content
  const renderCardContent = (feature: any) => (
    <div
      className={`glass-effect p-6 rounded-2xl h-full transition-all duration-300 group-hover:shadow-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 ${
        clickable ? "cursor-pointer" : ""
      }`}
    >
      {/* Icon with Gradient Background */}
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {React.createElement(feature.icon, {
          className: "w-7 h-7 text-white",
        })}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-deep-black dark:text-white mb-3 group-hover:text-[#ff9800] transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {feature.description}
      </p>

      {/* External Link Icon - only show if clickable */}
      {clickable && (
        <div className="flex items-center justify-end">
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#ff9800] transition-colors duration-300" />
        </div>
      )}

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/5 to-success-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Icons */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5 dark:opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: 360,
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {React.createElement(featureIcons[i % featureIcons.length], {
              className: "w-8 h-8 text-blue-500 dark:text-blue-400",
            })}
          </motion.div>
        ))}

        {/* Gradient Waves */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 dark:from-blue-800/20 dark:to-indigo-800/20"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))",
              "linear-gradient(180deg, rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.1))",
              "linear-gradient(270deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))",
              "linear-gradient(360deg, rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.1))",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-black dark:text-white mb-6">
            <span className="gradient-text">{translations.features.title}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {translations.features.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {clickable && feature.url && !onFeatureClick ? (
                // Render as Link if URL is provided and no custom click handler
                <Link
                  to={feature.url}
                  target={feature.openInNewTab ? "_blank" : "_self"}
                  rel={feature.openInNewTab ? "noopener noreferrer" : undefined}
                  className="block h-full"
                  onClick={(e) => handleFeatureClick(feature, index, e)}
                >
                  {renderCardContent(feature)}
                </Link>
              ) : clickable ? (
                // Render as clickable div with custom handler
                <div
                  className="block h-full"
                  onClick={() => handleFeatureClick(feature, index)}
                >
                  {renderCardContent(feature)}
                </div>
              ) : (
                // Render as non-clickable div
                <div className="block h-full">{renderCardContent(feature)}</div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {translations.features.ready}
          </p>
          <Link
            to="/features/complete-accounting-suite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 188, 73, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#ff9800] text-deep-black font-bold text-lg rounded-full hover:bg-[#18a762] transition-all duration-300 shadow-lg"
            >
              {translations.features.cta}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
