import { Product } from '../models/product.js';

export const getAddProduct = (req, res, next) => {
	res.render('add-product', {
		title: 'Please Add Product',
		path: 'add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true,
	});
};

export const postAddProduct = (req, res, next) => {
	const product = new Product(req.body.title);
	product.save();
	res.status(302).redirect('/');
};

export const getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop', {
			products: products,
			title: 'The Shoppe',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
		});
	});
};
