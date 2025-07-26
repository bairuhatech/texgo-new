import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/txgo-logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { useApp } from '../contexts/AppContext';

const Header: React.FC = () => {
  const { translations } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: translations.nav.products, href: '#products' },
    { name: translations.nav.solutions, href: '#solutions' },
    { name: translations.nav.pricing, href: '#pricing' },
    { name: translations.nav.about, href: '#about' },
    { name: translations.nav.contact, href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src={logo} 
              alt="TaxGo Global" 
              className="h-8 w-auto lg:h-10"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-deep-black dark:text-white hover:text-primary-yellow font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Theme and Language Switchers + CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-deep-black dark:text-white hover:text-primary-yellow font-medium transition-colors duration-200"
            >
              {translations.nav.signIn}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 188, 73, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary-yellow text-deep-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-200 shadow-lg"
            >
              {translations.nav.startTrial}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-deep-black dark:text-white hover:text-primary-yellow transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-lg mt-2"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-deep-black dark:text-white hover:text-primary-yellow font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between mb-4">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
              <button className="block w-full text-left text-deep-black dark:text-white hover:text-primary-yellow font-medium transition-colors duration-200">
                {translations.nav.signIn}
              </button>
              <button className="block w-full px-6 py-3 bg-primary-yellow text-deep-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-200 text-center">
                {translations.nav.startTrial}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;