import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import logo from '../assets/txgo-logo.png';
import { useApp } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { translations } = useApp();
  
  const footerSections = [
    {
      title: translations.footer.sections.products.title,
      links: [
        { name: translations.footer.sections.products.links[0], href: "/products/accounting-suite" },
        { name: translations.footer.sections.products.links[1], href: "/products/inventory-management" },
        { name: translations.footer.sections.products.links[2], href: "/products/payroll-hr" },
        { name: translations.footer.sections.products.links[3], href: "/products/ecommerce-platform" },
        { name: translations.footer.sections.products.links[4], href: "/products/point-of-sale" },
        { name: translations.footer.sections.products.links[5], href: "/products/enterprise-solutions" }
      ]
    },
    {
      title: translations.footer.sections.industries.title,
      links: [
        { name: translations.footer.sections.industries.links[0], href: "/industries/healthcare" },
        { name: translations.footer.sections.industries.links[1], href: "/industries/education" },
        { name: translations.footer.sections.industries.links[2], href: "/industries/retail-commerce" },
        { name: translations.footer.sections.industries.links[3], href: "/industries/restaurants" },
        { name: translations.footer.sections.industries.links[4], href: "/industries/manufacturing" },
        { name: translations.footer.sections.industries.links[5], href: "/industries/professional-services" }
      ]
    },
    {
      title: translations.footer.sections.resources.title,
      links: [
        { name: translations.footer.sections.resources.links[0], href: "/resources/documentation" },
        { name: translations.footer.sections.resources.links[1], href: "/resources/api-reference" },
        { name: translations.footer.sections.resources.links[2], href: "/resources/help-center" },
        { name: translations.footer.sections.resources.links[3], href: "/resources/video-tutorials" },
        { name: translations.footer.sections.resources.links[4], href: "/resources/webinars" },
        { name: translations.footer.sections.resources.links[5], href: "/resources/case-studies" }
      ]
    },
    {
      title: translations.footer.sections.company.title,
      links: [
        { name: translations.footer.sections.company.links[0], href: "/about" },
        { name: translations.footer.sections.company.links[1], href: "/careers" },
        { name: translations.footer.sections.company.links[2], href: "/press-kit" },
        { name: translations.footer.sections.company.links[3], href: "/partners" },
        { name: translations.footer.sections.company.links[4], href: "/security" },
        { name: translations.footer.sections.company.links[5], href: "/privacy-policy" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-black dark:bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-yellow rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <img src={logo} alt="TaxGo Global" className="h-10 w-auto" />
                  <span className="text-2xl font-bold">TaxGo Global</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {translations.footer.description}
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4 text-primary-yellow" />
                    <span>hello@taxgoglobal.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4 text-primary-yellow" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-primary-yellow" />
                    <span>123 Business Ave, Tech City</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="lg:col-span-1"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary-yellow">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link: any) => (
                    <li key={link.name}>
                      <Link to={link.href}>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                        >
                          <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{link.name}</span>
                        </motion.div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">{translations.footer.stayUpdated}</h3>
              <p className="text-gray-400">
                {translations.footer.newsletterText}
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder={translations.footer.emailPlaceholder}
                className="flex-1 px-4 py-3 bg-gray-800 dark:bg-gray-700 border border-gray-700 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-yellow text-white placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-yellow text-deep-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300"
              >
{translations.footer.subscribe}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-yellow hover:text-deep-black transition-all duration-300 group"
                >
                  {React.createElement(social.icon, { 
                    className: "w-5 h-5" 
                  })}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                {translations.footer.copyright} | 
                <Link to="/terms" className="hover:text-primary-yellow transition-colors ml-1">{translations.footer.terms}</Link> | 
                <Link to="/privacy" className="hover:text-primary-yellow transition-colors ml-1">{translations.footer.privacy}</Link>
              </p>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-primary-yellow text-deep-black rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
            {translations.footer.trustBadges.map((badge: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success-green rounded-full"></div>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;