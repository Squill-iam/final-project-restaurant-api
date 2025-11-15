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
