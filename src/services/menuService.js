import * as menuRepo from '../repositories/menuRepo.js';

export async function getAll() {
    return menuRepo.findAll();
}

export async function getById(id) {
    return menuRepo.findById(id);
}

export async function createMenu(data) {
    return menuRepo.create(data);
}

export async function updateMenu(id, data) {
    return menuRepo.update(id, data);
}

export async function deleteMenu(id) {
    return menuRepo.remove(id);
}