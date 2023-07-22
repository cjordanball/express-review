import fs from 'fs';
import path from 'path';
import { getDirName } from '../utilities/navUtilties.js';

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
	constructor(title, imageURL, description, price) {
		this.title = title;
		this.imageURL = imageURL;
		this.description = description;
		this.price = price;
	}

	save() {
		this.id = `${Date.now().toString()}-${Math.random().toString()}`;
		getProductsFromFile((products) => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (err) => {
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
