const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');

// @route   POST /api/tasks
// @desc    Create a new task
// @access  Private
router.post('/', [
  auth,
  body('title')
    .trim()
    .notEmpty().withMessage('Task title is required')
    .isLength({ max: 200 }).withMessage('Title cannot exceed 200 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage('Description cannot exceed 2000 characters'),
  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'completed', 'cancelled'])
    .withMessage('Invalid status value'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high', 'urgent'])
    .withMessage('Invalid priority value'),
  body('dueDate')
    .optional()
    .isISO8601().withMessage('Invalid date format'),
  body('tags')
    .optional()
    .isArray().withMessage('Tags must be an array')
], taskController.createTask);

// @route   GET /api/tasks
// @desc    Get all tasks with filtering, sorting, and pagination
// @access  Private
router.get('/', auth, taskController.getTasks);

// @route   GET /api/tasks/stats
// @desc    Get task statistics
// @access  Private
router.get('/stats', auth, taskController.getTaskStats);

// @route   GET /api/tasks/:id
// @desc    Get single task by ID
// @access  Private
router.get('/:id', auth, taskController.getTaskById);

// @route   PUT /api/tasks/:id
// @desc    Update task
// @access  Private
router.put('/:id', [
  auth,
  body('title')
    .optional()
    .trim()
    .notEmpty().withMessage('Task title cannot be empty')
    .isLength({ max: 200 }).withMessage('Title cannot exceed 200 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 2000 }).withMessage('Description cannot exceed 2000 characters'),
  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'completed', 'cancelled'])
    .withMessage('Invalid status value'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high', 'urgent'])
    .withMessage('Invalid priority value'),
  body('dueDate')
    .optional()
    .isISO8601().withMessage('Invalid date format'),
  body('tags')
    .optional()
    .isArray().withMessage('Tags must be an array')
], taskController.updateTask);

// @route   DELETE /api/tasks/:id
// @desc    Delete task
// @access  Private
router.delete('/:id', auth, taskController.deleteTask);

module.exports = router;
