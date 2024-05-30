const express = require('express');
const router = express.Router();
const { createTodo,getAllTodos,getTodoById,updateTodo,deleteTodo } = require('../controllers/todoController');
const authenticate = require('../middlewares/authMiddleware');
const { todoValidation } = require('../validation/validation');

router.post('/',authenticate,todoValidation, createTodo);
router.get('/',authenticate ,getAllTodos);
router.get('/:id',authenticate, getTodoById);
router.put('/:id',authenticate,todoValidation, updateTodo);
router.delete('/:id',authenticate, deleteTodo);

module.exports = router;
