import {
    findAll,
    findById,
    create,
    update,
    remove,
} from '../repositories/restaurantRepo.js';

export async function getAllRestaurants() {
    return await findAll();
}

export async function getRestaurantById(id) {
    let result = await findById(id);
    if (result) return result;
    else {
        const error = new Error(`Cannot find restaurant with id: ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function createRestaurant(data) {
    return await create(data);
}

export async function updateRestaurant(id, data) {
    let result = await update(id, data);
    if (result) return result;
    else {
        const error = new Error(`Cannot find restaurant with id: ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function deleteRestaurant(id) {
    let result = await remove(id);
    if (result) return result;
    else {
        const error = new Error(`Cannot find restaurant with id: ${id}`);
        error.status = 404;
        throw error;
    }
}