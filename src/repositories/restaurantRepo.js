import prisma from '../config/db.js';

export async function findAll() {
    return await prisma.restaurant.findMany();
}

export async function findById(id) {
    return await prisma.restaurant.findUnique({ where: { id }});
}

export async function create(data) {
    return await prisma.restaurant.create({ data });
}

export async function update(id, updates) {
    try {
        const updatedRestaurant =  await prisma.restaurant.update({
            where: { id },
            data: updates,
        });
    return updatedRestaurant;
    } catch (error) {
        if ((error.code === 'P2025')) return null;
        throw error;
    }
}

export async function remove(id) {
    try {
        const deletedRestaurant =  await prisma.restaurant.delete({
            where: { id }
        });
    return deletedRestaurant;
    } catch (error) {
        if ((error.code === 'P2025')) return null;
        throw error;
    }
}

export async function phoneExists(phone) {
  const result = await prisma.restaurant.count({where: {phone}});
  return result > 0;
}