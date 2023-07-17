import { fileURLToPath } from 'url';
import path from 'path';

export const getDirname = (moduleUrl) => {
	const fileName = fileURLToPath(moduleUrl);
	return path.dirname(fileName);
};
