import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
  stats?: { label: string; value: string; icon: React.ComponentType<any> }[];
  ctaText?: string;
  ctaLink?: string;
  backgroundGradient?: string;
  accentColor?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  description,
  features = [],
  stats = [],
  ctaText = "Get Started",
  ctaLink = "/contact",
  backgroundGradient = "from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900",
  accentColor = "blue"
}) => {

  const defaultStats = [
    { label: 'Active Users', value: '10,000+', icon: Users },
    { label: 'Success Rate', value: '99.9%', icon: CheckCircle },
    { label: 'Customer Rating', value: '4.9/5', icon: Star },
    { label: 'Awards Won', value: '25+', icon: Award }
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10 dark:opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0 
            }}
            animate={{ 
              y: [0, -50, 0],
              rotate: 360,
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Zap className={`w-8 h-8 text-${accentColor}-500 dark:text-${accentColor}-400`} />
          </motion.div>
        ))}
        
        {/* Gradient Waves */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r from-${accentColor}-200/20 to-${accentColor}-300/20 dark:from-${accentColor}-800/20 dark:to-${accentColor}-900/20`}
          animate={{
            background: [
              `linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))`,
              `linear-gradient(180deg, rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.1))`,
              `linear-gradient(270deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))`,
              `linear-gradient(360deg, rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.1))`
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-yellow transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-deep-black dark:text-white mb-6">
            <span className="gradient-text">{title}</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Stats Section */}
        {displayStats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {displayStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center group hover:bg-primary-yellow/10 dark:hover:bg-primary-yellow/20 transition-all duration-300 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-primary-yellow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {React.createElement(stat.icon, { className: "w-6 h-6 text-deep-black" })}
                </div>
                <div className="text-2xl font-bold text-primary-yellow mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Features Section */}
        {features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div>
              <h2 className="text-3xl font-bold text-deep-black dark:text-white mb-6">
                Key Features
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-success-green rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-primary-yellow mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join thousands of satisfied customers who have transformed their business operations with our solution.
              </p>
              <Link to={ctaLink}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-primary-yellow text-deep-black font-bold text-lg rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg"
                >
                  {ctaText}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-yellow/10 to-success-green/10 dark:from-primary-yellow/20 dark:to-success-green/20 p-8 rounded-3xl border border-primary-yellow/20">
            <h2 className="text-3xl font-bold text-deep-black dark:text-white mb-4">
              Experience the Difference
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business operations with cutting-edge technology and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary-yellow text-deep-black font-bold text-lg rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg"
                >
                  Schedule Demo
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-deep-black dark:border-white text-deep-black dark:text-white font-bold text-lg rounded-full hover:bg-deep-black hover:text-white dark:hover:bg-white dark:hover:text-deep-black transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageTemplate;