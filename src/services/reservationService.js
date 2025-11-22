import {findAll,create,update,remove,findById}from '../repositories/reservationRepo.js';

export async function getAllReservations() {
  return await findAll();
}

export async function createReservation(reservation){
    return await create(reservation);
}

export async function updateReservation(id) {
  const updatedReservation = await update(id);
  if (updatedReservation) return updatedReservation;
  else {
    const error = new Error(`Cannot find reservation with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function deleteReservation(id) {
  const result = await remove(id);
  if (result) return;
  else {
    const error = new Error(`Cannot find reservation with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function getReservationById(id) {
  let result = await findById(id);
  if (result) return result;
  else {
    const error = new Error(`Cannot find reservation with id ${id}`);
    error.status = 404;
    throw error;
  }
}