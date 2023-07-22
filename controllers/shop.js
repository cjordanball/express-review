// import { json } from 'body-parser';
import { Product } from '../models/product.js';
// import bodyParser from 'body-parser';

export const getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/product-list', {
			products: products,
			title: 'All Products',
			path: '/products',
		});
	});
};

export const getProduct = (req, res, next) => {
	const prodId = req.params.productId;
	Product.findById(prodId, (product) => {
		res.render('shop/product-detail', {
			product: product,
			title: product.title,
			path: '/products',
		});
	});
};

export const getIndex = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/index', {
			products: products,
			title: 'The Shoppe',
			path: '/',
		});
	});
};

export const postCart = (req, res, next) => {
	const prodId = req.body.productId;
	console.log('prodId: ', prodId);
	res.redirect('/cart');
};

export const getCart = (req, res, next) => {
	res.render('shop/cart', {
		path: '/cart',
		title: 'Your Cart',
	});
};

export const getOrders = (req, res, next) => {
	res.render('shop/orders', {
		path: '/orders',
		title: 'Your Orders',
	});
};

export const getCheckout = (req, res, next) => {
	res.render('shop/checkout', {
		path: 'checkout',
		title: 'Check This Out!',
	});
};
