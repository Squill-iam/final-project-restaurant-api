import express from 'express';
import * as menuController from '../controllers/menuController.js';

const router = express.Router();

router.get('/', menuController.getAllMenusHandler);
router.get('/:id', menuController.getMenuByIdHandler);
router.post('/', menuController.createMenuHandler);
router.put('/:id', menuController.updateMenuHandler);
router.delete('/:id', menuController.deleteMenuHandler);

export default router;