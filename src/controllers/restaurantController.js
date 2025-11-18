import {
    getAllRestaurants,
    getRestaurantById,
} from '../services/restaurantService.js';

export async function getAllRestaurantsHandler(req, res) {
    const restaurants = await getAllRestaurants();
    res.status(200).json(restaurants);
}

export async function getRestaurantByIdHandler(req, res) {
    const restaurant = await getRestaurantById(Number(req.params.id));
    if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
}