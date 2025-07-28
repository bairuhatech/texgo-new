import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Globe, ArrowRight, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Solutions: React.FC = () => {
  const { translations } = useApp();

  const aiFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Intelligent Automation',
      description: 'AI-powered workflows that learn from your business patterns and automate repetitive tasks.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'Advanced forecasting and trend analysis to help you make data-driven decisions.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Processing',
      description: 'Lightning-fast data processing and instant insights for immediate business impact.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Smart Security',
      description: 'AI-enhanced security protocols that adapt to threats and protect your data.'
    }
  ];

  const businessSolutions = [
    {
      title: 'Small Business Starter',
      description: 'Perfect for startups and growing businesses',
      features: [
        'Basic Accounting & Bookkeeping',
        'Inventory Management',
        'Customer Management',
        'Basic Reporting',
        'Email Support'
      ],
      suitable: 'Ideal for businesses with 1-10 employees',
      highlight: 'Most Popular'
    },
    {
      title: 'Professional Enterprise',
      description: 'Comprehensive solution for established businesses',
      features: [
        'Advanced Financial Management',
        'Multi-location Support',
        'Advanced Analytics',
        'Custom Integrations',
        'Priority Support'
      ],
      suitable: 'Perfect for businesses with 10-100 employees',
      highlight: 'Recommended'
    },
    {
      title: 'Global Corporation',
      description: 'Full-scale solution for large enterprises',
      features: [
        'Enterprise Resource Planning',
        'Global Multi-currency',
        'Advanced Compliance',
        'Dedicated Account Manager',
        '24/7 Premium Support'
      ],
      suitable: 'Designed for 100+ employee organizations',
      highlight: 'Enterprise'
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Save Time',
      description: 'Automate routine tasks and focus on growing your business'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Increase Efficiency',
      description: 'Streamline operations and improve productivity by up to 60%'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Better Collaboration',
      description: 'Connect teams across departments with unified workflows'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Ensure Compliance',
      description: 'Stay compliant with automated regulatory reporting'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/20">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-deep-black mb-6">
                AI-Powered Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-orange-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your business operations with intelligent solutions that adapt, learn, and grow with your company. Experience the future of business management today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-yellow hover:bg-yellow-500 text-deep-black font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-50 text-deep-black font-semibold py-4 px-8 rounded-lg border border-gray-200 transition-all duration-200"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-black mb-6">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions leverage cutting-edge artificial intelligence to provide unprecedented insights and automation capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-primary-yellow/10 rounded-2xl flex items-center justify-center text-primary-yellow mb-6 group-hover:bg-primary-yellow/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-deep-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-black mb-6">
              Solutions for Every Business Size
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprise corporations, we have the perfect solution tailored to your business needs and growth stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative group"
              >
                {solution.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-yellow text-deep-black px-4 py-2 rounded-full text-sm font-semibold">
                      {solution.highlight}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-deep-black mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <p className="text-sm text-gray-600 text-center">
                    {solution.suitable}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-deep-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 group-hover:bg-primary-yellow group-hover:text-deep-black"
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-black mb-6">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience measurable benefits that drive real business growth and operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-yellow/10 rounded-2xl flex items-center justify-center text-primary-yellow mx-auto mb-6 group-hover:bg-primary-yellow group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-deep-black mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-deep-black to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of businesses that have already revolutionized their operations with our AI-powered solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-yellow hover:bg-yellow-500 text-deep-black font-semibold py-4 px-8 rounded-lg transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-white/10 text-white border border-white font-semibold py-4 px-8 rounded-lg transition-all duration-200"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;