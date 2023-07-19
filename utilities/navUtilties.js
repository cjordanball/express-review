import { fileURLToPath } from 'url';
import path from 'path';

export const getDirName = (moduleUrl) => {
	const fileName = fileURLToPath(moduleUrl);
	return path.dirname(fileName);
};
