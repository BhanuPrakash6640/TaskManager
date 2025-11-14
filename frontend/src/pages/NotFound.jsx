import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <AlertCircle className="w-24 h-24 text-blue-600 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Page Not Found
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/dashboard" className="btn-primary inline-flex items-center space-x-2">
          <Home className="w-5 h-5" />
          <span>Go to Dashboard</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
