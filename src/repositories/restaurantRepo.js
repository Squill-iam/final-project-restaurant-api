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

export async function update(id, data) {
    return await prisma.restaurant.update({
        where: { id },
        data,
    });
}

export async function phoneExists(phone) {
  const result = await prisma.restaurant.count({where: {phone}});
  return result > 0;
}