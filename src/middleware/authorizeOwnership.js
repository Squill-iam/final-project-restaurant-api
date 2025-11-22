import { getReservationById } from "../services/reservationService.js";

export async function authorizeOwnership(req,res,next){
    const reservationId = parseInt( req.params.id);               
    const reservation = await getReservationById(id)

  const isOwner = reservation.userId === req.user.id;
  const isAdmin = user.role === 'ADMIN';


    if(!isOwner && !isAdmin) {
        const error = new Error('Forbidden: insuffucient permission');
        error.status = 403;
        return next(error);
    }

    return next();
}