import { Product } from '../models/product.js';

export const getAddProduct = (req, res, next) => {
	res.render('admin/edit-product', {
		title: 'Please Add Product',
		editing: false,
		path: '/admin/add-product',
	});
};

export const postAddProduct = (req, res, next) => {
	const newProduct = new Product(
		null,
		req.body.title,
		req.body.imageURL,
		req.body.description,
		req.body.price
	);
	newProduct.save();
	res.status(302).redirect('/');
};

export const getEditProduct = (req, res, next) => {
	const editMode = req.query.edit;
	if (!(editMode === 'true')) {
		return res.redirect('/');
	}
	const prodId = req.params.productId;

	Product.findById(prodId, (product) => {
		if (!product) {
			return res.redirect('/');
		}
		res.render('admin/edit-product', {
			title: 'Edit Product Info',
			path: '/admin/edit-product',
			editing: editMode === 'true',
			product: product,
		});
	});
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

export const postDeleteProduct = (req, res, next) => {
	const prodId = req.body.productId;
	Product.deleteById(prodId);
	res.redirect('/admin/products');
};

export const postEditProduct = (req, res, next) => {
	const prodId = req.body.productId;
	const updatedTitle = req.body.title;
	const updatedURL = req.body.imageURL;
	const updatedPrice = req.body.price;
	const updatedDescription = req.body.description;

	const updatedProduct = new Product(
		prodId,
		updatedTitle,
		updatedURL,
		updatedDescription,
		updatedPrice
	);
	updatedProduct.save();
	res.status(302).redirect('/admin/products');
};
