import {body, param} from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateCreateReservation = [
    body('userId')
    .notEmpty().withMessage('userId is required')
    .bail()
    .isInt({min:1})
    .withMessage('userId must be an int'),

    body('restaurantId')
    .notEmpty().withMessage('restaurantId is required')
    .bail()
    .isInt({min:1})
    .withMessage('restaurantId must be an int'),

    body('reservationTime')
    .notEmpty()
    .withMessage('reservation time is required')
    .bail()
    .isISO8601().withMessage('Reservation time must be a string')
    
    // Validate actual date
    .custom((value) => {
        const date = new Date(value);
            if (isNaN(date.getTime())) {
                throw new Error("Invalid date or time");
            }
        return true;
    })

    //Future
    .custom((value) => {
        const date = new Date(value);
        const now = new Date();

        if (date <= now) {
            throw new Error("Reservation must be in the future");
        }

        return true;
    })
    .customSanitizer((value) => {
        return new Date(value);
    }),

    body('partySize')
    .notEmpty().withMessage('party size is required')
    .bail()
    .isInt({min:1, max:20})
    .withMessage('party size must be an int'),

    
    handleValidationErrors,

];

export const validateUpdateReservation = [
    param('id')
    .isInt({ min:1 })
    .withMessage('Menu ID must be a positive integer'),

    handleValidationErrors,
];

export const validateReservationId = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Reservation id must be a positive integer'),
  handleValidationErrors,
];

