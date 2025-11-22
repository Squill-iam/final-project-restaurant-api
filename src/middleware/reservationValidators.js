import {body, param} from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateCreateReservation = [
    body('user_id')
    .trim()
    .notEmpty().withMessage('user_id is required')
    .bail()
    .isInt({min:1})
    .withMessage('user_id must be an int'),

    body('restaurantId')
    .trim()
    .notEmpty().withMessage('restaurantId is required')
    .bail()
    .isInt({min:1})
    .withMessage('restaurantId must be an int'),

    body('reservationTime')
    .notEmpty()
    .withMessage('reservation time is required')
    .bail()
    .matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
    .withMessage("DateTime must be in YYYY-MM-DD HH:MM:SS format")
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
    }),

    body('partySize')
    .trim()
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

