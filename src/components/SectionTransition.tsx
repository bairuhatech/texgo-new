import React from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  variant?: 'wave' | 'diagonal' | 'curve' | 'zigzag';
  color?: string;
  height?: number;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  variant = 'wave', 
  color = 'white',
  height = 100 
}) => {
  const renderPath = () => {
    switch (variant) {
      case 'wave':
        return (
          <motion.path
            d="M0,50 Q150,0 300,50 T600,50 T900,50 T1200,50 T1500,50 V100 H0 V50"
            fill={color}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        );
      case 'diagonal':
        return (
          <motion.path
            d="M0,100 L100,0 L1200,0 L1200,100 Z"
            fill={color}
            initial={{ x: -1200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        );
      case 'curve':
        return (
          <motion.path
            d="M0,100 Q600,0 1200,100 L1200,100 L0,100 Z"
            fill={color}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "center" }}
          />
        );
      case 'zigzag':
        return (
          <motion.path
            d="M0,50 L200,0 L400,50 L600,0 L800,50 L1000,0 L1200,50 L1200,100 L0,100 Z"
            fill={color}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        {renderPath()}
      </svg>
      
      {/* Floating particles during transition */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-yellow rounded-full opacity-60"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: height,
            opacity: 0 
          }}
          whileInView={{ 
            y: -20,
            opacity: [0, 1, 0] 
          }}
          viewport={{ once: true }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default SectionTransition;