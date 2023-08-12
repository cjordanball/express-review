import { Cart } from '../models/cart.js';
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
	Product.findById(prodId, (product) => {
		Cart.addProduct(prodId, product.price);
	});
	res.redirect('/cart');
};

export const getCart = (req, res, next) => {
	Cart.getCart((cart) => {
		Product.fetchAll((products) => {
			const cartProducts = [];
			for (let product of products) {
				const cartProductData = cart.products.find(
					(prod) => product.id === prod.id
				);
				if (cartProductData) {
					cartProducts.push({ productData: product, qty: cartProductData.qty });
				}
			}
			res.render('shop/cart', {
				path: '/cart',
				title: 'Your Cart',
				products: cartProducts,
			});
		});
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

export const postCartDeleteItem = (req, res, next) => {
	const prodId = req.body.productId;
	Product.findById(prodId, (product) => {
		Cart.deleteProduct(prodId, product.price);
		res.redirect('/cart');
	});
};
