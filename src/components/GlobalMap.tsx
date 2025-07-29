import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Building, Globe } from "lucide-react";
import { useApp } from "../contexts/AppContext";

const GlobalMap: React.FC = () => {
  const { translations } = useApp();

  const locations = [
    {
      name: "North America",
      x: 25,
      y: 35,
      clients: "200+",
      color: "bg-blue-500",
    },
    { name: "Europe", x: 50, y: 25, clients: "150+", color: "bg-green-500" },
    {
      name: "Asia Pacific",
      x: 75,
      y: 40,
      clients: "180+",
      color: "bg-purple-500",
    },
    {
      name: "Middle East",
      x: 60,
      y: 45,
      clients: "80+",
      color: "bg-yellow-500",
    },
    { name: "Africa", x: 55, y: 60, clients: "50+", color: "bg-red-500" },
    {
      name: "South America",
      x: 35,
      y: 70,
      clients: "60+",
      color: "bg-pink-500",
    },
  ];

  const stats = [
    { icon: Users, label: "Active Users", value: "50,000+" },
    { icon: Building, label: "Enterprise Clients", value: "500+" },
    { icon: Globe, label: "Countries", value: "25+" },
    { icon: MapPin, label: "Cities", value: "100+" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Global Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-400 dark:text-cyan-400"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Floating Globe Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5 dark:opacity-10"
            initial={{
              scale: 0.5,
              rotate: 0,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              rotate: 360,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Globe className="w-10 h-10 text-blue-500 dark:text-cyan-400" />
          </motion.div>
        ))}

        {/* Ripple Effects */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute border border-blue-300/40 dark:border-cyan-400/40 rounded-full"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              left: "50%",
              top: "50%",
              marginLeft: `-${150 + i * 75}px`,
              marginTop: `-${150 + i * 75}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.1, 0.4],
            }}
            transition={{
              duration: 6 + i * 2,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-black dark:text-white">
            <span className="gradient-text">
              {translations.globalMap.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {translations.globalMap.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive World Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Simplified World Map Background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Simplified continent shapes */}
                  <path
                    d="M50 60 L100 50 L140 70 L120 100 L70 90 Z"
                    fill="currentColor"
                    className="text-[#ff9800]"
                  />
                  <path
                    d="M180 40 L250 45 L240 80 L200 85 L170 70 Z"
                    fill="currentColor"
                    className="text-[#ff9800]"
                  />
                  <path
                    d="M280 60 L350 70 L340 120 L290 110 Z"
                    fill="currentColor"
                    className="text-[#ff9800]"
                  />
                </svg>
              </div>

              {/* Location Markers */}
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="absolute"
                  style={{ left: `${location.x}%`, top: `${location.y}%` }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 ${location.color} rounded-full relative cursor-pointer group`}
                  >
                    {/* Pulsing Effect */}
                    <motion.div
                      animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 ${location.color} rounded-full`}
                    />

                    {/* Tooltip */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-deep-black/90 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                      <div className="font-semibold">{location.name}</div>
                      <div className="text-[#ff9800]">
                        {location.clients} clients
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Connecting Lines Animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {locations.map((location, index) => (
                  <motion.line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`${location.x}%`}
                    y2={`${location.y}%`}
                    stroke="rgba(255, 188, 73, 0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 1 }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center group hover:bg-primary-yellow/10 dark:hover:bg-primary-yellow/20 transition-all duration-300 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-[#ff9800] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {React.createElement(stat.icon, {
                      className: "w-6 h-6 text-deep-black",
                    })}
                  </div>
                  <div className="text-2xl font-bold text-[#18a762] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4 text-[#ff9800]">
                {translations.globalMap.whyChoose}
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {translations.globalMap.features.map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#18a762] rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;
