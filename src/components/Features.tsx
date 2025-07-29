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
} from "lucide-react";
import { useApp } from "../contexts/AppContext";

const Features: React.FC = () => {
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

  const features = translations.features.items.map(
    (item: any, index: number) => ({
      icon: featureIcons[index],
      title: item.title,
      description: item.description,
      color: featureColors[index],
    })
  );

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
              <div className="glass-effect p-6 rounded-2xl h-full transition-all duration-300 group-hover:shadow-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
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
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow/5 to-success-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
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
          <Link to="/products/accounting-suite">
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
