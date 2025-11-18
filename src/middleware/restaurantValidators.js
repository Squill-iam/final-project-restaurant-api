import { param } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateId = [
    param('id')
    .isInt({ gt: 0 }).withMessage('ID must be a positive integer'),
    handleValidationErrors,
];