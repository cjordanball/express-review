import path from 'path';
import express from 'express';
import {
	getAddProduct,
	postAddProduct,
	getProducts,
} from '../controllers/admin.js';

const router = express.Router();

// /admin/add-product and GET
router.get('/add-product', getAddProduct);

// /admin/add-product and POST
router.post('/add-product', postAddProduct);

// /admin/products and GET
router.get('/products', getProducts);

export { router };
