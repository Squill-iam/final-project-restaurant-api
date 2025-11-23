import {
    getAllRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
} from '../services/restaurantService.js';

export async function getAllRestaurantsHandler(req, res) {
    const restaurants = await getAllRestaurants();
    res.status(200).json(restaurants);
}

export async function getRestaurantByIdHandler(req, res) {
    const restaurant = await getRestaurantById(Number(req.params.id));
    res.status(200).json(restaurant);
}

export async function createRestaurantHandler(req, res) {
    const restaurant = await createRestaurant(req.body);
    res.status(201).json(restaurant);
}

export async function updateRestaurantHandler(req, res) {
    const restaurant = await updateRestaurant(Number(req.params.id), req.body);
    res.status(200).json(restaurant);
}

export async function deleteRestaurantHandler(req, res) {
    await deleteRestaurant(Number(req.params.id));
    res.status(204).send();
}