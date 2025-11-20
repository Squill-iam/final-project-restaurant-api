import { param, body } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';
import { phoneExists } from '../repositories/restaurantRepo.js';

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
    .isString().withMessage('Phone number must be a string')
    .bail()
    .custom(async(value) => {
      if (value && (await phoneExists(value))) {
        throw new Error(`Phone number ${value} already in use`);
      }
      return true;
    }),

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

export const validateUpdateRestaurant = [
    body('name')
    .optional()
    .trim()
    .isString().withMessage('Name must be a string'),

    body('address')
    .optional()
    .trim()
    .isString().withMessage('Address must be a string'),

    body('phone')
    .optional()
    .trim()
    .isString().withMessage('Phone number must be a string')
    .bail()
    .custom(async(value) => {
      if (value && (await phoneExists(value))) {
        throw new Error(`Phone number ${value} already in use`);
      }
      return true;
    }),

    body('openingTime')
    .optional()
    .trim()
    .isISO8601().withMessage('Opening time must be a string'),

    body('closingTime')
    .optional()
    .trim()
    .isISO8601().withMessage('Closing time must be a string'),

    handleValidationErrors,
];