import {
    findAllRestaurants,
    findRestaurantById,
    createRestaurant,
} from '../repositories/restaurantRepo.js';

export async function getAllRestaurants() {
    return await findAllRestaurants();
}

export async function getRestaurantById(id) {
    return await findRestaurantById(id);
}

export async function CreateRestaurant(data) {
    return await createRestaurant(data);
}