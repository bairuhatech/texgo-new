import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  Building2,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { useApp } from "../contexts/AppContext";

const IndustrySolutions: React.FC = () => {
  const { translations } = useApp();
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      icon: Heart,
      title: translations.industries.healthcare.title,
      subtitle: translations.industries.healthcare.subtitle,
      description: translations.industries.healthcare.description,
      color: "from-red-500 to-pink-500",
      features: [
        "Patient Management & Medical Records",
        "Appointment Scheduling & Resource Planning",
        "Billing & Insurance Processing",
        "Inventory Management for Medical Supplies",
        "Staff Management & Payroll",
        "Compliance & Reporting Tools",
      ],
      stats: {
        clients: "200+",
        efficiency: "40%",
        savings: "30%",
      },
    },
    {
      icon: GraduationCap,
      title: translations.industries.education.title,
      subtitle: translations.industries.education.subtitle,
      description: translations.industries.education.description,
      color: "from-blue-500 to-indigo-500",
      features: [
        "Student Information Management",
        "Course & Curriculum Planning",
        "Fee Management & Financial Tracking",
        "Faculty & Staff Administration",
        "Online Learning & Assessment Tools",
        "Parent-Teacher Communication Portal",
      ],
      stats: {
        clients: "150+",
        efficiency: "50%",
        savings: "35%",
      },
    },
    {
      icon: Building2,
      title: translations.industries.enterprise.title,
      subtitle: translations.industries.enterprise.subtitle,
      description: translations.industries.enterprise.description,
      color: "from-green-500 to-emerald-500",
      features: [
        "Multi-Location Management",
        "Advanced Analytics & Reporting",
        "Custom Workflow Automation",
        "Enterprise Security & Compliance",
        "API Integrations & Custom Development",
        "24/7 Priority Support",
      ],
      stats: {
        clients: "100+",
        efficiency: "60%",
        savings: "45%",
      },
    },
  ];

  return (
    <section
      id="solutions"
      className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 dark:from-gray-800 dark:via-emerald-900 dark:to-teal-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Medical/Educational Icons */}
        {[Heart, GraduationCap, Building2].map((Icon, i) =>
          [...Array(6)].map((_, j) => (
            <motion.div
              key={`${i}-${j}`}
              className="absolute opacity-5 dark:opacity-10"
              initial={{
                rotate: 0,
                scale: 0.5,
              }}
              animate={{
                rotate: 360,
                scale: [0.5, 1, 0.5],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 20 + j * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${10 + j * 15}%`,
                top: `${20 + i * 20}%`,
              }}
            >
              <Icon className="w-12 h-12 text-emerald-500 dark:text-emerald-400" />
            </motion.div>
          ))
        )}

        {/* Pulsing Circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute border-2 border-emerald-300/30 dark:border-emerald-600/30 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${70 + i * 5}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
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
            <span className="gradient-text">
              {translations.industries.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {translations.industries.subtitle}
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {industries.map((industry, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? "bg-[#ff9800] text-deep-black shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              }`}
            >
              {React.createElement(industry.icon, { className: "w-5 h-5" })}
              <span>{industry.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Industry Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industries[activeTab].color} flex items-center justify-center mb-6`}
              >
                {React.createElement(industries[activeTab].icon, {
                  className: "w-8 h-8 text-white",
                })}
              </div>

              <h3 className="text-3xl font-bold text-deep-black dark:text-white mb-2">
                {industries[activeTab].title}
              </h3>
              <h4 className="text-xl text-[#ff9800] font-semibold mb-4">
                {industries[activeTab].subtitle}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {industries[activeTab].description}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {industries[activeTab].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#18a762] flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-deep-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                <span>{translations.industries.healthcare.learnMore}</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Right Stats */}
            <div
              className={`p-8 lg:p-12 bg-gradient-to-br ${industries[activeTab].color} text-white relative overflow-hidden`}
            >
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-8">
                  {translations.industries.successMetrics}
                </h4>

                <div className="space-y-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold mb-2">
                      {industries[activeTab].stats.clients}
                    </div>
                    <div className="text-white/80">
                      {translations.industries.activeClients}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold mb-2">
                      {industries[activeTab].stats.efficiency}
                    </div>
                    <div className="text-white/80">
                      {translations.industries.efficiencyIncrease}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold mb-2">
                      {industries[activeTab].stats.savings}
                    </div>
                    <div className="text-white/80">
                      {translations.industries.costSavings}
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <h5 className="font-semibold mb-2">
                    {translations.industries.readyToStart}
                  </h5>
                  <p className="text-white/80 text-sm mb-4">
                    {translations.industries.scheduleDemoText}
                  </p>
                  <button className="w-full bg-white text-gray-800 font-semibold py-3 rounded-full hover:bg-gray-100 transition-colors">
                    {translations.industries.scheduleDemo}
                  </button>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-white rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
