import express from 'express';
import {
	getProducts,
	getIndex,
	getCheckout,
	getCart,
} from '../controllers/shop.js';

export const router = express.Router();

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/cart', getCart);

router.get('/checkout', getCheckout);
