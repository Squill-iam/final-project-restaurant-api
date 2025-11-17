import * as menuService from '../services/menuService.js';

export async function getAllMenusHandler(req, res) {
    const menu = await menuService.getAll();
    res.json(menu);
}

export async function getMenuByIdHandler(req, res) {
    const menuItem = await menuService.getById(Number(req.params.id));
    if(!menuItem) {
        return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
}

export async function createMenuHandler(req, res) {
    const menu = await menuService.createMenu(req.body);
    res.status(201).json(menu);
}

export async function updateMenuHandler(req, res) {
    const menu = await menuService.updateMenu(Number(req.params.id), req.body);
    res.json(menu);
}

export async function deleteMenuHandler(req, res) {
    await menuService.deleteMenu(Number(req.params.id));
    res.status(204).send();
}