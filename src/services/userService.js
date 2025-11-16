import bcrypt from 'bcrypt';
import { Prisma } from '../generated/prisma/index.js';
import {
  findAllUsers,
  findCurrentUser,
  updatedCurrentUser,
  deleteCurrentUser,
  findCurrentUserReservations,
} from '../repositories/userRepo.js';

export async function getAllUsers() {
  return await findAllUsers();
}

export async function getCurrentUser(id) {
  return await findCurrentUser(id);
}

export async function updateUser(id, { email, password, phone }) {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const updatedUser = await updatedCurrentUser(id, {
      email,
      password: hashedPassword,
      phone,
    });
    return updatedUser;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      if (error.code === 'P2002') {
        const error = new Error('Email has already been used');
        error.status = 409;
        throw error;
      }
  }
}

export async function deleteUser(id) {
  return await deleteCurrentUser(id);
}

export async function getUserReservations(id) {
  return await findCurrentUserReservations(id);
}

