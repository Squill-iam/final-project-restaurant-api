import {
    findAll,
    findById,
    create,
    update,
} from '../repositories/restaurantRepo.js';

export async function getAllRestaurants() {
    return await findAll();
}

export async function getRestaurantById(id) {
    return await findById(id);
}

export async function createRestaurant(data) {
    return await create(data);
}

export async function updateRestaurant(id, data) {
    return await update(id, data);
}