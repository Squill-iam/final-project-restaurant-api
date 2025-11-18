import express from 'express';
import {
    getAllRestaurantsHandler,
    getRestaurantByIdHandler,
    createRestaurantHandler,
} from '../controllers/restaurantController.js';

import { authenticate } from '../middleware/authenticate.js';
import { validateId, validateCreateRestaurant } from '../middleware/restaurantValidators.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';

const router = express.Router();

router.get('/', authenticate, getAllRestaurantsHandler);
router.get('/:id', validateId, authenticate, getRestaurantByIdHandler);
router.post('/', authenticate, authorizeRoles('ADMIN'), validateCreateRestaurant, createRestaurantHandler);

export default router;