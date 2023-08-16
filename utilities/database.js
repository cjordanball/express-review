import pkg from 'pg';
const { Pool } = pkg;

const config = {
	user: 'cjb3',
	database: 'node_complete',
	password: '314mollemon',
	port: 5432,
	host: 'localhost',
	max: 10,
	idleTimeoutMillis: 5_000,
};

export const pool = new Pool(config);
