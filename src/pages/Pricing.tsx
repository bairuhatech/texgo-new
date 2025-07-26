import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, Zap, Crown, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small businesses getting started",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Up to 5 users",
        "Basic accounting features",
        "Inventory tracking (100 items)",
        "Email support",
        "Mobile app access",
        "Basic reporting",
        "Bank integration"
      ],
      limitations: [
        "No advanced analytics",
        "No API access",
        "No custom integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Ideal for growing businesses with advanced needs",
      monthlyPrice: 79,
      annualPrice: 65,
      features: [
        "Up to 25 users",
        "Full accounting suite",
        "Unlimited inventory tracking",
        "Priority support",
        "Advanced reporting & analytics",
        "API access",
        "Multi-currency support",
        "Automated workflows",
        "Custom integrations",
        "Payroll management"
      ],
      limitations: [
        "No white-label options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Rocket,
      description: "Comprehensive solution for large organizations",
      monthlyPrice: 199,
      annualPrice: 165,
      features: [
        "Unlimited users",
        "Complete business suite",
        "Unlimited everything",
        "24/7 dedicated support",
        "Custom development",
        "White-label options",
        "Advanced security features",
        "Compliance tools",
        "Custom training",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
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
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Crown className="w-8 h-8 text-purple-500 dark:text-purple-400" />
          </motion.div>
        ))}
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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-deep-black dark:text-white mb-6">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 30-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg font-medium ${!isAnnual ? 'text-deep-black dark:text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${
                isAnnual ? 'bg-primary-yellow' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-deep-black dark:text-white' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-success-green text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                Save 20%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary-yellow shadow-2xl transform lg:scale-105' 
                  : 'border-gray-100 dark:border-gray-700 hover:border-primary-yellow/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-yellow text-deep-black px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {React.createElement(plan.icon, { className: "w-8 h-8 text-deep-black" })}
                  </div>
                  <h3 className="text-2xl font-bold text-deep-black dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-deep-black dark:text-white">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-gray-500 mt-2">
                        Billed annually (${plan.annualPrice * 12}/year)
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-success-green flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-center space-x-3 opacity-60">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-500 line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link to={plan.cta === "Contact Sales" ? "/contact" : "/trial"}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary-yellow text-deep-black hover:bg-yellow-400 shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-deep-black dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a free trial?",
                a: "All plans come with a 30-day free trial. No credit card required to start."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-deep-black dark:text-white mb-3">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;