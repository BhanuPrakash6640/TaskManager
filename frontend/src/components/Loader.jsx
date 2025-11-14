import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ fullScreen = false, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const loaderContent = (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-primary flex items-center justify-center z-50">
        <div className="text-center">
          {loaderContent}
          <motion.p
            className="mt-4 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading...
          </motion.p>
        </div>
      </div>
    );
  }

  return loaderContent;
};

export default Loader;
