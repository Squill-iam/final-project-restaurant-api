import express from "express";
import{
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

router.get('/', authenticate, authorizeRoles('ADMIN'), getAllUsersHandler);
router.get('/id', authenticate, getCurrentUserHandler);
router.put('/users/id', authenticate, validateUserUpdate, updateCurrentUserHandler);
router.delete('/users/id', authenticate, deleteCurrentUserHandler);
router.get('/users/id/reservations', authenticate, getUserReservationsHandler);

export default router;