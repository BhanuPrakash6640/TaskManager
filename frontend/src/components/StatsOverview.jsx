import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  TrendingUp,
  ListTodo
} from 'lucide-react';

const StatsOverview = ({ stats }) => {
  const totalTasks = stats?.total?.[0]?.count || 0;
  const completedTasks = stats?.completed?.[0]?.count || 0;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const statusData = stats?.byStatus || [];
  const priorityData = stats?.byPriority || [];

  const getStatusCount = (status) => {
    const item = statusData.find(s => s._id === status);
    return item?.count || 0;
  };

  const getPriorityCount = (priority) => {
    const item = priorityData.find(p => p._id === priority);
    return item?.count || 0;
  };

  const statCards = [
    {
      title: 'Total Tasks',
      value: totalTasks,
      icon: ListTodo,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Pending',
      value: getStatusCount('pending'),
      icon: Clock,
      color: 'bg-gray-500',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20',
      textColor: 'text-gray-600 dark:text-gray-400',
    },
    {
      title: 'In Progress',
      value: getStatusCount('in-progress'),
      icon: AlertCircle,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      textColor: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      title: 'Completed',
      value: completedTasks,
      icon: CheckCircle2,
      color: 'bg-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass rounded-xl p-6 hover:shadow-xl transition-shadow ${stat.bgColor}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </p>
                <p className={`text-3xl font-bold ${stat.textColor}`}>
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            {stat.title === 'Completed' && totalTasks > 0 && (
              <div className="mt-4 flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${completionRate}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {completionRate}%
                </span>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsOverview;
