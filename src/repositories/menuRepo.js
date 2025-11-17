import prisma from '../config/db.js';

export async function findAll() {
    return prisma.menu.findMany();
}

export async function findById(id) {
    return prisma.menu.findUnique({ where: { id }});
}

export async function create(data) {
    return prisma.menu.create({ data });
}

export async function update(id, data) {
    return prisma.menu.update({
        where: { id }, data
    });
}

export async function remove(id) {
    return prisma.menu.delete({ where: { id }});
}