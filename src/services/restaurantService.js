import {
    findAllRestaurants,
    findRestaurantById
} from '../repositories/restaurantRepo.js';

export async function getAllRestaurants() {
    return await findAllRestaurants();
}

export async function getRestaurantById(id) {
    return await findRestaurantById(id);
}