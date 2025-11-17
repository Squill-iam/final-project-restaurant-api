import {body, param} from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateUser = [
    body('email')
    .exists({values: 'false'})
    .withMessage('Email is required')
    .bail()
    .isEmail()
    .withMessage('email is not valid'),

    body('password')
    .exists({values: 'false'})
    .withMessage('Password is required')
    .isLength({min: 8})
    .withMessage('Password must be at least 8 characters long'),

    handleValidationErrors,
];

export const validateUserUpdate = [
    body('email')
    .bail()
    .optional()
    .isEmail()
    .withMessage('email is not valid')
    .normalizeEmail(),

    body('password')
    .optional()
    .isLength({min: 8})
    .withMessage('Password must be at least 8 characters long'),

    body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Phone number is not valid')
    .bail()
    .isLength({min: 10, max: 12})
    .withMessage('Phone number must be 12 characters long'),

    handleValidationErrors,
];