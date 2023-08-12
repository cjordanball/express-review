import fs from 'fs';
import path from 'path';
import { getDirName } from '../utilities/navUtilties.js';

// const p = path.join(getDirName(import.meta.url), '..', 'data', 'cart.json');
const p = path.join(process.cwd(), 'data', 'cart.json');

export class Cart {
	static addProduct(id, productPrice) {
		// Fetch the previous cart
		fs.readFile(p, (err, fileContent) => {
			let cart = { products: [], totalPrice: 0 };
			if (!err) {
				try {
					cart = JSON.parse(fileContent);
				} catch (error) {
					console.log('error: ', error);
				}
			}
			// Analyze the cart => Find existing product
			const existingProductIndex = cart.products?.findIndex(
				(product) => product.id === id
			);
			const existingProduct = cart.products[existingProductIndex];
			let updatedProduct;
			// Add new product / increase quantity
			if (existingProduct) {
				updatedProduct = { ...existingProduct };
				updatedProduct.qty = updatedProduct.qty + 1;
				cart.products = cart.products.toSpliced(
					existingProductIndex,
					1,
					updatedProduct
				);
			} else {
				updatedProduct = { id, qty: 1 };
				cart.products = [...cart.products, updatedProduct];
			}
			cart.totalPrice = Number(cart.totalPrice) + Number(productPrice);
			fs.writeFile(p, JSON.stringify(cart), (err) => {
				console.log('ERR: ', err);
			});
		});
	}

	static deleteProduct(id, productPrice) {
		console.log('DELETING: ', id, productPrice);
		// fetch the cart
		fs.readFile(p, (err, fileContent) => {
			if (err) {
				return;
			}
			const { products, totalPrice } = JSON.parse(
				fileContent.toString('utf-8')
			);
			const hotProduct = products.find((prod) => prod.id === id);
			if (!hotProduct) {
				return;
			}
			const hotProductCost = productPrice * hotProduct.qty;

			const updatedTotalPrice = totalPrice - hotProductCost;
			const updatedProducts = products.filter(
				(prod) => prod.id !== hotProduct.id
			);
			const newCart = {
				products: updatedProducts,
				totalPrice: updatedTotalPrice,
			};
			console.log('newCart:', newCart);

			fs.writeFile(p, JSON.stringify(newCart), (err) => {
				console.log('ERR: ', err);
			});
		});
	}

	static getCart(cb) {
		fs.readFile(p, (err, fileContent) => {
			const cart = JSON.parse(fileContent);
			if (err) {
				cb(null);
			} else {
				console.log('cart: ', cart);
				cb(cart);
			}
		});
	}
}
