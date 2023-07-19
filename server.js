import http from 'http';
import path from 'path';
import { getDirName } from './utilities/navUtilties.js';
import express from 'express';
import bodyParser from 'body-parser';
import { router as shopRoutes } from './routes/shop.js';
import { router as adminRoutes } from './routes/admin.js';
import { get404 } from './controllers/errors.js';

// Create express app
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// this middleware will trigger for all incoming requests
// it will parse the body of the request and add it to the request object
// it will also automatically call the next() function
// bodyParser only works for POST requests
// extended: true allows us to parse extended bodies with rich data in it
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(getDirName(import.meta.url), 'public')));
// app.use(
// 	express.static('/Users/cjb3/Desktop/Learning/NodeJS/express-app/public')
// );

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(get404);

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
