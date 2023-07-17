import express from 'express';
import path from 'path';
import { getDirname } from '../utilities/navUtilties.js';

const __dirname = getDirname(import.meta.url);

export const router = express.Router();

export const products = [];

router.get('/add-product', (req, res, next) => {
	res.render('add-product', {
		products: products,
		title: 'Please Add Product',
		perth: 'topper',
		formsCSS: true,
		activeAddProduct: true,
	});
});

router.post('/add-product', (req, res, next) => {
	// this middleware will only trigger for POST request
	products.push(req.body);
	console.log(req.body.title);
	res.status(302).redirect('/');
});
