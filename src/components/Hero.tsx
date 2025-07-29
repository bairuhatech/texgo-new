import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Brain, Zap, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { FloatingElement } from "./ScrollAnimations";

const Hero: React.FC = () => {
  const { translations } = useApp();
  const [currentText, setCurrentText] = useState(0);
  const heroTexts = translations.hero.mainTexts;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  const floatingElements = [
    { icon: Brain, delay: 0, x: 100, y: 50 },
    { icon: Zap, delay: 1, x: -80, y: 80 },
    { icon: Globe, delay: 2, x: 120, y: -60 },
    { icon: TrendingUp, delay: 0.5, x: -100, y: -40 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-yellow/10 via-success-green/10 to-blue-200/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(255, 188, 73, 0.08), rgba(53, 181, 41, 0.08), rgba(59, 130, 246, 0.08))",
              "linear-gradient(135deg, rgba(53, 181, 41, 0.08), rgba(59, 130, 246, 0.08), rgba(255, 188, 73, 0.08))",
              "linear-gradient(225deg, rgba(59, 130, 246, 0.08), rgba(255, 188, 73, 0.08), rgba(53, 181, 41, 0.08))",
              "linear-gradient(315deg, rgba(255, 188, 73, 0.08), rgba(53, 181, 41, 0.08), rgba(59, 130, 246, 0.08))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0
                ? "bg-primary-yellow"
                : i % 3 === 1
                ? "bg-success-green"
                : "bg-blue-400"
            }`}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [null, -100],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute border rounded-full ${
              i % 2 === 0
                ? "border-primary-yellow/30"
                : "border-success-green/30"
            }`}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 10}%`,
              top: `${10 + i * 8}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </div>

      {/* Floating Dashboard Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute hidden lg:block"
          style={{
            left: `${50 + element.x}px`,
            top: `${50 + element.y}%`,
          }}
        >
          <FloatingElement
            amplitude={15}
            frequency={4 + index}
            delay={element.delay}
          >
            <div className="glass-effect p-4 rounded-xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm">
              {React.createElement(element.icon, {
                className: "w-8 h-8 text-primary-yellow",
              })}
            </div>
          </FloatingElement>
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-deep-black dark:text-white mb-4 font-medium"
          >
            {translations.hero.preHeadline}
          </motion.p>

          {/* Main Headline with Typewriter Effect */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-deep-black dark:text-white">
              {translations.hero.revolutionizeYour}
            </span>
            <br />
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="gradient-text block"
            >
              {heroTexts[currentText]}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {translations.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link to="/trial">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 188, 73, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#ff9800] text-deep-black font-bold text-lg rounded-full hover:bg-[#18a762] transition-all duration-300 shadow-xl pulse-glow flex items-center group"
              >
                {translations.hero.ctaPrimary}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-deep-black dark:border-white text-deep-black dark:text-white font-bold text-lg rounded-full hover:bg-deep-black hover:text-white dark:hover:bg-white dark:hover:text-deep-black transition-all duration-300"
              >
                {translations.hero.ctaSecondary}
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
              <span className="font-medium">
                {translations.hero.trustIndicators.clients}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
              <span className="font-medium">
                {translations.hero.trustIndicators.uptime}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
              <span className="font-medium">
                {translations.hero.trustIndicators.security}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
