import express from 'express';

export const router = express.Router();

router.use('/', (req, res, next) => {
	res.send(`
		<h1>Hello from Express!</h1>
	`);
});
