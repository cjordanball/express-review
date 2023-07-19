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
	constructor(title) {
		this.title = title;
	}

	save() {
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
}
