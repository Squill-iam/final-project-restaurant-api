import express from 'express';
import * as menuController from '../controllers/menuController.js';

const router = express.Router();

import { authenticate } from '../middleware/authenticate.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';
import {
    validateCreateMenu,
    validateUpdateMenu,
    validateId
} from '../middleware/menuValidators.js';

router.get('/', menuController.getAllMenusHandler);
router.get('/:id', validateId, menuController.getMenuByIdHandler);
router.post('/', authenticate, authorizeRoles('ADMIN'), validateCreateMenu, menuController.createMenuHandler);
router.put('/:id', authenticate, authorizeRoles('ADMIN'), validateUpdateMenu, menuController.updateMenuHandler);
router.delete('/:id', authenticate, authorizeRoles('ADMIN'), validateId, menuController.deleteMenuHandler);

export default router;