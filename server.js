import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

// Create express app
const app = express();

// this middleware will trigger for all incoming requests
// it will parse the body of the request and add it to the request object
// it will also automatically call the next() function
// bodyParser only works for POST requests
// extended: true allows us to parse extended bodies with rich data in it
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
	console.log('In the second middleware!');
	res.send(`
		<form action="\product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>
	`);
});

app.post('/product', (req, res, next) => {
	// this middleware will only trigger for POST request
	console.log(req.body);
	res.redirect('/');
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
