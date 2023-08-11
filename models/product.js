import fs from 'fs';
import path from 'path';
import { getDirName } from '../utilities/navUtilties.js';
import { Cart } from './cart.js';

const p = path.join(getDirName(import.meta.url), '..', 'data', 'products.json');

const getProductsFromFile = (cb) => {
	fs.readFile(p, (err, data) => {
		if (err) {
			console.log('err: ', err);
			cb([]);
		}
		cb(JSON.parse(data));
	});
};

export class Product {
	constructor(id = null, title, imageURL, description, price) {
		this.id = id;
		this.title = title;
		this.imageURL = imageURL;
		this.description = description;
		this.price = price;
	}

	save() {
		getProductsFromFile((products) => {
			if (this.id) {
				const existingProductIndex = products.findIndex(
					(product) => product.id === this.id
				);
				const updatedProducts = products.toSpliced(
					existingProductIndex,
					1,
					this
				);
				fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
					console.log(err);
				});
			} else {
				this.id = `${Date.now().toString()}-${Math.random().toString()}`;
				products.push(this);
				fs.writeFile(p, JSON.stringify(products), (err) => {
					console.log(err);
				});
			}
		});
	}

	static deleteById(id) {
		getProductsFromFile((products) => {
			const hotProduct = products.find((prod) => id === prod.id);
			const updatedProducts = products.filter((product) => product.id !== id);
			fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
				if (!err) {
					Cart.deleteProduct(id, hotProduct.price);
				}
				console.log(err);
			});
		});
	}

	static fetchAll(cb) {
		getProductsFromFile(cb);
	}

	static findById(id, cb) {
		getProductsFromFile((products) => {
			const hotItem = products.find((product) => product.id === id);
			cb(hotItem);
		});
	}
}
