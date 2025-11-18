import { param, body } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateId = [
    param('id')
    .isInt({ gt: 0 }).withMessage('ID must be a positive integer'),
    handleValidationErrors,
];

export const validateCreateRestaurant = [
    body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .bail()
    .isString().withMessage('Name must be a string'),

    body('address')
    .trim()
    .notEmpty().withMessage('Address is required')
    .bail()
    .isString().withMessage('Address must be a string'),

    body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .bail()
    .isString().withMessage('Phone number must be a string'),

    body('openingTime')
    .trim()
    .notEmpty().withMessage('Opening time is required')
    .bail()
    .isISO8601().withMessage('Opening time must be a string'),

    body('closingTime')
    .trim()
    .notEmpty().withMessage('Closing time is required')
    .bail()
    .isISO8601().withMessage('Closing time must be a string'),

    handleValidationErrors,
];