import { getDirName } from '../utilities/navUtilties.js';

export const get404 = (req, res, next) => {
	// this middleware will trigger for all other incoming requests
	const __dirname = getDirName(import.meta.url);
	res.status(404).render('404', { title: 'Get off of my page!', path: '' });
};
