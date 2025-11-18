import express from 'express';
import {
    getAllRestaurantsHandler,
    getRestaurantByIdHandler,
} from '../controllers/restaurantController.js';

import { authenticate } from '../middleware/authenticate.js';
import { validateId } from '../middleware/restaurantValidators.js';

const router = express.Router();

router.get('/', authenticate, getAllRestaurantsHandler);
router.get('/:id', validateId, authenticate, getRestaurantByIdHandler);

export default router;