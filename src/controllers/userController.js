import bcrypt from 'bcrypt';
import {
  createUser,
  getAllUsers,
  getCurrentUser,
  updateUser,
  deleteUser,
  getUserReservations,
} from '../services/userService.js';

export async function registerUserHandler(req, res) {
  const {name, email, password, phone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const users = await createUser({name, email, password: hashedPassword, phone });
  res.status(201).json(users);
}

export async function getAllUsersHandler(req, res) {
  const users = await getAllUsers();
  res.status(200).json(users);
}

export async function getCurrentUserHandler(req, res) {
  const users = await getCurrentUser(req.user.id);
  res.status(200).json(users);
}

export async function updateCurrentUserHandler(req, res) {
  const { email, password, phone } = req.body;
  if (!email && !password && !phone) {
    return res
      .status(400)
      .json({ message:'An email, password or phone number must be provided to update'});
  }
  const updatedUser = await updateUser(req.user.id, {email, password, phone});
  res.status(200).json(updatedUser);
}

export async function deleteCurrentUserHandler(req, res) {
  const users = await deleteUser(req.user.id);
  res.status(204).json(users);
}

export async function getUserReservationsHandler(req, res) {
const userId = parseInt(req.params.id);
const reservations = await getUserReservations(userId);
res.status(200).json(reservations);
}
