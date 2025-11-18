import prisma from '../config/db.js';

export async function findAllRestaurants() {
    return await prisma.restaurant.findMany();
}

export async function findRestaurantById(id) {
    return await prisma.restaurant.findUnique({ where: { id }});
}