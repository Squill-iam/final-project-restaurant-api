import prisma from '../config/db.js';
import bcrypt from 'bcrypt';

export async function registerUser(data) {
  return await prisma.user.create({ data: data, omit: { password: true } });
}

export async function findAllUsers() {
  return await prisma.user.findMany({ omit: { password: true } });
}

export async function findUserByEmail(email) {
  return await prisma.user.findUnique({ where: { email },
  select: {
      id: true,
      email: true,
      role: true,
      password: true, // required for login of a created user through post endpoint
      name: true,
      phone: true
    }});
}

export async function findCurrentUser(id) {
  return await prisma.user.findUnique({
    where: { id },
    omit: { password: true },
  });
}

export async function updatedCurrentUser(id, data) {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  return await prisma.user.update({
    where: { id },
    data,
    omit: { password: true },
  });
}

export async function deleteCurrentUser(id) {
  return await prisma.user.delete({ where: { id } });
}

export async function findCurrentUserReservations(id) {
  const userReservation = await prisma.user.findUnique({
    where: { id },
    include: { reservations: true },
    omit: {password: true},
  });
  return userReservation.reservations;
}
