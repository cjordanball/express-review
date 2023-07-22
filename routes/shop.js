import express from 'express';
import {
	getProducts,
	getIndex,
	getCheckout,
	getCart,
	getOrders,
	getProduct,
} from '../controllers/shop.js';

export const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProduct);

router.get('/orders', getOrders);

router.get('/cart', getCart);

router.get('/checkout', getCheckout);
