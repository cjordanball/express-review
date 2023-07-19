import express from 'express';
import { getProducts } from '../controllers/products.js';

export const router = express.Router();

router.get('/', getProducts);
