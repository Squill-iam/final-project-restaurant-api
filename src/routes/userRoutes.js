import express from "express";
import{
    registerUserHandler,
    getAllUsersHandler, 
    getCurrentUserHandler, 
    updateCurrentUserHandler, 
    deleteCurrentUserHandler, 
    getUserReservationsHandler, 
} from '../controllers/userController.js';

import {authenticate} from '../middleware/authenticate.js';
import {authorizeRoles} from '../middleware/authorizeRoles.js';
import {validateUserUpdate} from '../middleware/userValidators.js';

const router = express.Router();

router.post('/', registerUserHandler);
router.get('/', authenticate, authorizeRoles('ADMIN'), getAllUsersHandler);
router.get('/:id', authenticate, getCurrentUserHandler);
router.put('/:id', authenticate, validateUserUpdate, updateCurrentUserHandler);
router.delete('/:id', authenticate, deleteCurrentUserHandler);
router.get('/:id/reservations', authenticate, getUserReservationsHandler);

export default router;