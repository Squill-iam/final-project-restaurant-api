import express from 'express';
import {
    getAllRestaurantsHandler,
    getRestaurantByIdHandler,
    createRestaurantHandler,
    updateRestaurantHandler,
} from '../controllers/restaurantController.js';

import { authenticate } from '../middleware/authenticate.js';
import { validateId, validateCreateRestaurant, validateUpdateRestaurant } from '../middleware/restaurantValidators.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';

const router = express.Router();

router.get('/', authenticate, getAllRestaurantsHandler);
router.get('/:id', validateId, authenticate, getRestaurantByIdHandler);
router.post('/', authenticate, authorizeRoles('ADMIN'), validateCreateRestaurant, createRestaurantHandler);
router.put('/:id', validateId, authenticate, authorizeRoles('ADMIN'), validateUpdateRestaurant, updateRestaurantHandler);

export default router;