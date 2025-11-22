import { getAllReservations, 
    createReservation,
    updateReservation,
    deleteReservation,
    getReservationById } from "../services/reservationService.js";


export async function getAllReservationsHandler(req, res) {
    let result = await getAllReservations();
    res.status(200).json(result);
}

export async function createReservationHandler(req, res){
    let data = req.body;
    let newReservation = await createReservation(data);
    res.status(201).json(newReservation);
}

export async function updateReservationHandler(req, res) {
    let id = parseInt(req.params.id);
    const updatedReservation = await updateReservation(id);
    res.status(200).json(updatedReservation);
}

export async function deleteReservationHandler(req, res) {
  let id = parseInt(req.params.id);
  await deleteReservation(id);
  res.status(204).send();
}

export async function getReservationByIdHandler(req, res) {
  let id = parseInt(req.params.id);
  let reservation = await getReservationById(id);
  res.status(200).json(reservation);
}