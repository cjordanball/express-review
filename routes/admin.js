import path from 'path';
import express from 'express';
import {
	getEditProduct,
	getAddProduct,
	postAddProduct,
	getProducts,
	postDeleteProduct,
	postEditProduct,
} from '../controllers/admin.js';

const router = express.Router();

// /admin/add-product and GET
router.get('/add-product', getAddProduct);

// /admin/add-product and POST
router.post('/add-product', postAddProduct);

// /admin/edit-product and POST
router.post('/edit-product', postEditProduct);

// /admin/products and GET
router.get('/products', getProducts);

// /admin/delete-produc and POST
router.post('/delete-product', postDeleteProduct);

router.get('/edit-product/:productId', getEditProduct);

export { router };
