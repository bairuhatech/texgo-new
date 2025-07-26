import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Target, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize business management through innovative AI-powered solutions that simplify complex operations."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of experts in technology, finance, and business operations dedicated to your success."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Innovation, integrity, and customer-centricity drive everything we do as we build the future of business."
    },
    {
      icon: Globe,
      title: "Our Reach",
      description: "Serving businesses globally with localized solutions and 24/7 support in multiple languages."
    }
  ];

  const timeline = [
    { year: "2018", event: "Founded with a vision to transform business operations" },
    { year: "2019", event: "Launched our first AI-powered accounting solution" },
    { year: "2020", event: "Expanded to serve 1,000+ businesses worldwide" },
    { year: "2021", event: "Introduced multi-language support and global expansion" },
    { year: "2022", event: "Achieved 10,000+ active users milestone" },
    { year: "2023", event: "Launched comprehensive business suite with 50+ features" },
    { year: "2024", event: "Serving 25+ countries with enterprise-grade solutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-deep-black dark:text-white mb-6">
            <span className="gradient-text">About TaxGo Global</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            Empowering businesses worldwide with intelligent solutions that transform operations and drive growth.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h2 className="text-4xl font-bold text-deep-black dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Founded in 2018, TaxGo Global emerged from a simple observation: businesses worldwide were struggling with fragmented, outdated systems that hindered their growth potential. Our founders, a team of technology veterans and business experts, set out to create a unified platform that would revolutionize how companies manage their operations.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Today, we serve over 15,000 businesses across 25+ countries, providing comprehensive solutions that include accounting, inventory management, payroll, ecommerce, and enterprise-grade tools. Our AI-powered platform has processed millions of transactions and helped businesses save countless hours while improving accuracy and efficiency.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We continue to innovate, driven by our commitment to making business management accessible, intelligent, and effective for organizations of all sizes.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-primary-yellow mb-6">By the Numbers</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-black dark:text-white mb-2">15,000+</div>
                <div className="text-gray-600 dark:text-gray-300">Active Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-black dark:text-white mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-black dark:text-white mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-black dark:text-white mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-deep-black dark:text-white mb-12">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {React.createElement(value.icon, { className: "w-8 h-8 text-deep-black" })}
                </div>
                <h3 className="text-xl font-bold text-deep-black dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-deep-black dark:text-white mb-12">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="text-2xl font-bold text-primary-yellow mb-2">{item.year}</div>
                  <p className="text-gray-700 dark:text-gray-300">{item.event}</p>
                </div>
                <div className="w-4 h-4 bg-primary-yellow rounded-full relative z-10"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-yellow/10 to-success-green/10 dark:from-primary-yellow/20 dark:to-success-green/20 p-12 rounded-3xl border border-primary-yellow/20">
            <h2 className="text-4xl font-bold text-deep-black dark:text-white mb-6">
              Ready to Join Our Story?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Become part of the thousands of businesses that have transformed their operations with TaxGo Global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/trial">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary-yellow text-deep-black font-bold text-lg rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg"
                >
                  Start Free Trial
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-deep-black dark:border-white text-deep-black dark:text-white font-bold text-lg rounded-full hover:bg-deep-black hover:text-white dark:hover:bg-white dark:hover:text-deep-black transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;