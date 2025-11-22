import prisma from "../config/db.js";


export async function findAll() {
    return prisma.reservations.findMany();
}

export async function create(reservation) {
  const newReservation = await prisma.reservation.create({
    data: reservation,
  });
  return newReservation;
}

export async function update(id) {
  try{
  const updateReservation = await prisma.reservation.update({
    where: { id },
    status: 'CANCELED',
  });
  return updateReservation;
  }
  catch(error){
    if(error.code === 'P2025' ) return null;
    throw error;
  }
  
}

export async function remove(id) {
  try {
    const deletedReservation = await prisma.reservation.delete({
      where: { id },
    });
    return deletedReservation;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function findById(id) {
  const post = await prisma.reservation.findUnique({
    where: { id },
  });
  return post;
}