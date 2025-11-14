import React from 'react';
import { motion } from 'framer-motion';
import { Edit2, Trash2, Calendar, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

const priorityColors = {
  low: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
  medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
  high: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300',
  urgent: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
};

const statusColors = {
  pending: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300',
  'in-progress': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
  completed: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
  cancelled: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
};

const statusIcons = {
  pending: Clock,
  'in-progress': AlertCircle,
  completed: CheckCircle2,
  cancelled: Trash2,
};

const TaskCard = ({ task, onEdit, onDelete }) => {
  const StatusIcon = statusIcons[task.status];

  const formatDate = (date) => {
    if (!date) return null;
    try {
      const d = new Date(date);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = months[d.getMonth()];
      const day = d.getDate();
      const year = d.getFullYear();
      return `${month} ${day}, ${year}`;
    } catch {
      return null;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      className="card-hover group relative overflow-hidden"
    >
      {/* priority indicator */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${
          task.priority === 'urgent'
            ? 'bg-red-500'
            : task.priority === 'high'
            ? 'bg-orange-500'
            : task.priority === 'medium'
            ? 'bg-yellow-500'
            : 'bg-blue-500'
        }`}
      />

      <div className="space-y-4">
        {/* task header */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 flex-1">
            {task.title}
          </h3>
          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(task)}
              className="p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 transition-colors"
              title="Edit task"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(task._id)}
              className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 transition-colors"
              title="Delete task"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* task description */}
        {task.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {task.description}
          </p>
        )}

        {/* tags */}
        {task.tags && task.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {task.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                #{tag}
              </span>
            ))}
            {task.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                +{task.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* footer info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            {/* Status Badge */}
            <span className={`badge ${statusColors[task.status]} flex items-center space-x-1`}>
              <StatusIcon className="w-3 h-3" />
              <span className="capitalize">{task.status.replace('-', ' ')}</span>
            </span>

            {/* Priority Badge */}
            <span className={`badge ${priorityColors[task.priority]}`}>
              <span className="capitalize">{task.priority}</span>
            </span>
          </div>

          {/* due date */}
          {task.dueDate && (
            <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(task.dueDate)}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;
