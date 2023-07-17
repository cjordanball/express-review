import express from 'express';
import path from 'path';
import { getDirname } from '../utilities/navUtilties.js';
import { products } from './admin.js';

const __dirname = getDirname(import.meta.url);
export const router = express.Router();

router.get('/', (req, res, next) => {
	// use render method instead of this to use template
	// res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
	res.render('shop', {
		products: products,
		title: 'The Shoppe',
		perth: 'copper',
		hasProducts: products.length > 0,
		activeShop: true,
	});
});
