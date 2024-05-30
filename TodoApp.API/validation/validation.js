const { body } = require('express-validator');

const todoValidation = [
    body('Title').trim().notEmpty().withMessage('Title is required.').isLength({ max: 500 }).withMessage('Title must not exceed 500 characters.'),
    body('Description').optional().trim().isLength({ max: 1000 }).withMessage('Description must not exceed 1000 characters.'),
    body('Status').notEmpty().withMessage('Status is required.').isInt({ min: 0, max: 3 }).withMessage('Status must be an integer between 0 and 3.'),
    body('DueDate').optional().toDate().custom((value, { req }) => value > new Date()).withMessage('Due date must be a future date.'),
];

const loginValidation = [
    body('Email').trim().notEmpty().withMessage('Email is required.').isEmail().withMessage('The input must be email format').normalizeEmail(),
    body('Password').trim().notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password length must be at least 6')
];

const registerValidation = [
    body('FirstName').trim().notEmpty().withMessage('First name is required.').isAlpha().withMessage('First name must contain only alphabetic characters.').isLength({ max: 50 }).withMessage('First name must not exceed 50 characters.'),
    body('LastName').trim().notEmpty().withMessage('Last name is required.').isAlpha().withMessage('Last name must contain only alphabetic characters.').isLength({ max: 50 }).withMessage('Last name must not exceed 50 characters.'),
    body('Email').trim().notEmpty().withMessage('Email is required.').isEmail().withMessage('Must be a valid email address.').normalizeEmail(),
    body('Password').trim().notEmpty().withMessage('Password is required.').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
];

module.exports = { todoValidation, loginValidation, registerValidation };
