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
router.get('/me', authenticate, getCurrentUserHandler);
router.put('/me', authenticate, validateUserUpdate, updateCurrentUserHandler);
router.delete('/me', authenticate, deleteCurrentUserHandler);
router.get('/:id/reservations', authenticate, authorizeRoles('ADMIN'), getUserReservationsHandler);

export default router;