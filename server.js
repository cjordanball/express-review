import http from 'http';
import express from 'express';

// Create express app
const app = express();

// we want to put longer routes first, because express will check from top to bottom
// and if we put '/' first, it will match all the routes
app.use('/dogs', (req, res, next) => {
	console.log('In the second middleware!');
	res.send(`
		<h1>Woof! from Express!</h1>
	`);
});

app.use('/', (req, res, next) => {
	console.log('In the second middleware!');
	res.send(`
		<h1>Hello from Express!</h1>
	`);
});

// Create http server and attach express app to it
// alternatively, we can use app.listen() instead of http.createServer(app)
const server = http.createServer(app);

// or
// app.listen(3000, () => {
// 	console.log('Server is porting on port 3000');
// });

server.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
