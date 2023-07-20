import { Product } from '../models/product.js';

export const getAddProduct = (req, res, next) => {
	res.render('admin/add-product', {
		title: 'Please Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true,
	});
};

export const postAddProduct = (req, res, next) => {
	const product = new Product(
		req.body.title,
		req.body.imageURL,
		req.body.description,
		req.body.price
	);
	product.save();
	res.status(302).redirect('/');
};

export const getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('admin/products', {
			products: products,
			title: 'Admin Products',
			path: '/admin/products',
		});
	});
};

export const editProduct = (req, res, next) => {
	res.render('admin/edit-product', {
		title: 'Edit Me',
		path: '/admin/edit-product',
	});
};
