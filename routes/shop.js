import express from 'express';
import {
	getProducts,
	getIndex,
	getCheckout,
	getCart,
	postCart,
	getOrders,
	getProduct,
	postCartDeleteItem,
} from '../controllers/shop.js';

export const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProduct);

router.get('/orders', getOrders);

router.get('/cart', getCart);

router.post('/cart', postCart);

router.post('/cart-delete-item', postCartDeleteItem);

router.get('/checkout', getCheckout);
