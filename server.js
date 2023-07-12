import http from 'http';
import express from 'express';

// Create express app
const app = express();

// this funcion is a middleware that will be executed for every request to the app
// next is a function that will be called when the middleware is complete
app.use((req, res, next) => {
	console.log('In the middleware!');
	next();
});

app.use((req, res, next) => {
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
