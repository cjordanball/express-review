import { Product } from '../models/product.js';

export const getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop/product-list', {
			products: products,
			title: 'All Products',
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
