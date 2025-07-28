import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m TaxGo AI Assistant. How can I help you today? I can answer questions about our products, pricing, features, or schedule a demo for you.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'Hi there! Welcome to TaxGo Global. I\'m here to help you learn about our AI-powered business solutions. What would you like to know?';
    }
    
    // Pricing inquiries
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return 'We offer three flexible pricing plans:\n\n• **Starter** - $29/month (or $24/month annually)\n• **Professional** - $79/month (or $65/month annually) - Most Popular!\n• **Enterprise** - $199/month (or $165/month annually)\n\nAll plans include a 30-day free trial. Would you like me to explain the features of each plan?';
    }
    
    // Product inquiries
    if (lowerMessage.includes('product') || lowerMessage.includes('feature') || lowerMessage.includes('accounting') || lowerMessage.includes('inventory')) {
      return 'TaxGo Global offers a comprehensive suite of AI-powered business solutions:\n\n• **Accounting Suite** - Automated bookkeeping & financial reporting\n• **Inventory Management** - Smart stock control & analytics\n• **Payroll & HR** - Employee management & automated payroll\n• **Ecommerce Platform** - Complete online store solution\n• **Point of Sale** - Integrated payment processing\n\nWhich solution interests you most?';
    }
    
    // Demo requests
    if (lowerMessage.includes('demo') || lowerMessage.includes('trial') || lowerMessage.includes('test')) {
      return 'I\'d be happy to help you schedule a personalized demo! Our live demos are:\n\n✅ **45-minute sessions** with product experts\n✅ **Tailored to your industry** and specific needs\n✅ **Interactive walkthrough** of relevant features\n✅ **Q&A time** for all your questions\n\nWould you like me to direct you to our demo booking page?';
    }
    
    // Support inquiries
    if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('contact')) {
      return 'We provide comprehensive support:\n\n• **24/7 Customer Support** for all plans\n• **Live Chat & Email** support\n• **Phone Support** for Professional & Enterprise\n• **Dedicated Account Manager** for Enterprise\n• **Help Center** with tutorials and guides\n\nHow can I assist you specifically?';
    }
    
    // Integration questions
    if (lowerMessage.includes('integration') || lowerMessage.includes('api') || lowerMessage.includes('connect')) {
      return 'TaxGo Global integrates seamlessly with 100+ popular business tools:\n\n• **Banks & Payment Processors** (Stripe, PayPal, etc.)\n• **Ecommerce Platforms** (Shopify, WooCommerce, etc.)\n• **CRM Systems** (Salesforce, HubSpot, etc.)\n• **Productivity Tools** (Google Workspace, Microsoft 365)\n• **Custom Integrations** via our robust API\n\nWhat specific integration are you looking for?';
    }
    
    // Security questions
    if (lowerMessage.includes('security') || lowerMessage.includes('safe') || lowerMessage.includes('privacy')) {
      return 'Security is our top priority! TaxGo Global features:\n\n🔒 **Enterprise-grade encryption** (256-bit SSL)\n🔒 **SOC 2 Type II certified** infrastructure\n🔒 **GDPR compliant** data handling\n🔒 **ISO 27001** security standards\n🔒 **Regular security audits** & penetration testing\n🔒 **Role-based access** controls\n\nYour data is always protected with us!';
    }
    
    // Industries
    if (lowerMessage.includes('industry') || lowerMessage.includes('healthcare') || lowerMessage.includes('education') || lowerMessage.includes('restaurant')) {
      return 'We serve businesses across multiple industries with specialized solutions:\n\n🏥 **Healthcare** - Hospital & clinic management\n🎓 **Education** - School & university administration\n🍽️ **Restaurants** - Complete restaurant management\n🏭 **Manufacturing** - Production & supply chain\n🏪 **Retail** - Multi-channel commerce solutions\n💼 **Professional Services** - Service business management\n\nWhich industry are you in?';
    }
    
    // General questions
    if (lowerMessage.includes('what') || lowerMessage.includes('how') || lowerMessage.includes('why')) {
      return 'Great question! TaxGo Global is an AI-powered business management platform that helps companies:\n\n• **Automate** repetitive tasks and workflows\n• **Streamline** operations across all departments\n• **Gain insights** with real-time analytics\n• **Scale efficiently** as your business grows\n• **Stay compliant** with automated reporting\n\nIs there a specific aspect you\'d like to know more about?';
    }
    
    // Thank you
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return 'You\'re very welcome! I\'m here whenever you need assistance. Is there anything else you\'d like to know about TaxGo Global\'s solutions?';
    }
    
    // Default response
    return 'I understand you\'re interested in learning more about TaxGo Global. I can help you with:\n\n• **Product Information** - Features and capabilities\n• **Pricing Details** - Plans and pricing options\n• **Demo Scheduling** - Live product demonstrations\n• **Integration Questions** - Connecting with your tools\n• **Industry Solutions** - Specialized offerings\n\nWhat would you like to explore first?';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('• **') && line.includes('**')) {
        const parts = line.split('**');
        return (
          <div key={index} className="flex items-start space-x-2 mb-1">
            <span className="text-primary-yellow">•</span>
            <span>
              <strong className="text-primary-yellow">{parts[1]}</strong>
              {parts[2]}
            </span>
          </div>
        );
      }
      if (line.startsWith('🔒') || line.startsWith('✅') || line.startsWith('🏥') || line.startsWith('🎓') || line.startsWith('🍽️') || line.startsWith('🏭') || line.startsWith('🏪') || line.startsWith('💼')) {
        return <div key={index} className="mb-1">{line}</div>;
      }
      return line ? <div key={index} className="mb-1">{line}</div> : <br key={index} />;
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-primary-yellow to-yellow-400 rounded-full shadow-2xl flex items-center justify-center text-deep-black hover:from-yellow-400 hover:to-primary-yellow transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: isMinimized ? 0.8 : 1, 
              y: 0,
              height: isMinimized ? 60 : 500
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-40 overflow-hidden"
          >
            {/* Chat Header */}
            <motion.div 
              className="bg-gradient-to-r from-primary-yellow to-yellow-400 p-4 flex items-center justify-between cursor-pointer"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-deep-black">TaxGo AI Assistant</h3>
                  <p className="text-sm text-gray-700">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMinimized(!isMinimized);
                  }}
                  className="p-1 hover:bg-white/20 rounded"
                >
                  <Minimize2 className="w-4 h-4 text-deep-black" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="p-1 hover:bg-white/20 rounded"
                >
                  <X className="w-4 h-4 text-deep-black" />
                </motion.button>
              </div>
            </motion.div>

            {/* Chat Messages */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col h-96"
                >
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.sender === 'user' 
                              ? 'bg-primary-yellow' 
                              : 'bg-success-green'
                          }`}>
                            {message.sender === 'user' ? (
                              <User className="w-4 h-4 text-deep-black" />
                            ) : (
                              <Bot className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div className={`rounded-2xl px-4 py-2 ${
                            message.sender === 'user'
                              ? 'bg-primary-yellow text-deep-black'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                          }`}>
                            <div className="text-sm">
                              {message.sender === 'bot' ? formatMessage(message.text) : message.text}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-4 py-2">
                            <div className="flex space-x-1">
                              <motion.div
                                className="w-2 h-2 bg-gray-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                              />
                              <motion.div
                                className="w-2 h-2 bg-gray-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                              />
                              <motion.div
                                className="w-2 h-2 bg-gray-400 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Chat Input */}
                  <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                    <div className="flex space-x-2">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-yellow bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        disabled={isTyping}
                      />
                      <motion.button
                        onClick={handleSendMessage}
                        disabled={!inputText.trim() || isTyping}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-primary-yellow rounded-full flex items-center justify-center text-deep-black hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;