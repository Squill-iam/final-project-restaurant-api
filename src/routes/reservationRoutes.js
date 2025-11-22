import express from "express";
import {authenticate} from '../middleware/authenticate.js';
import {authorizeRoles} from '../middleware/authorizeRoles.js';
import { authorizeOwnership } from "../middleware/authorizeOwnership.js";
import { validateCreateReservation,validateUpdateReservation,validateReservationId } from "../middleware/reservationValidators.js";
import { 
    getAllReservationsHandler,
    createReservationHandler,
    updateReservationHandler,
    deleteReservationHandler,
    getReservationByIdHandler } 
    from "../controllers/reservationController.js";

const router = express.Router();

router.get('/',authenticate,authorizeRoles('ADMIN'),getAllReservationsHandler);
router.get('/:id', validateReservationId, getReservationByIdHandler);
router.post('/',authenticate,validateCreateReservation,createReservationHandler);
router.patch('/:id',validateReservationId,authenticate,authorizeOwnership,validateUpdateReservation,updateReservationHandler);
router.delete('/:id',validateReservationId,authenticate,authorizeOwnership,deleteReservationHandler);

export default router;