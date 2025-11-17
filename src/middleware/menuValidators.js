import {body, param} from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateCreateMenu = [
    body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .bail()
    .isString().withMessage('Name must be a string'),

    body('price')
    .notEmpty().withMessage('Price is required')
    .bail()
    .isFloat({ gt: 0 }).withMessage('Price must be a positive number'),

    body('restaurantId')
    .notEmpty().withMessage('Restaurant ID is required')
    .bail()
    .isInt({ gt: 0 }).withMessage('Restaurant ID must be a positive integer'),
    handleValidationErrors,
];

export const validateUpdateMenu = [
    param('id')
    .isInt({ gt: 0 }).withMessage('Menu ID must be a positive integer'),

    body('name')
    .optional()
    .trim()
    .isString().withMessage('Name must be a string'),

    body('price')
    .optional()
    .isFloat({ gt: 0 }).withMessage('Price must be a positive number'),

    body('restaurantId')
    .optional()
    .isInt({ gt: 0 }).withMessage('Restaurant ID must be a positive integer'),
    handleValidationErrors,
];

export const validateId = [
    param('id')
    .isInt({ gt: 0 }).withMessage('ID must be a positive integer'),
    handleValidationErrors,
];

