// init Express server 

var express = require('express')
var app = express();
console.log('Hello NodeJS')
// we are initializing the project
// match the url, get request body and send response 
app.get('/', (req, res) => {
	res.send(req.query);
});
// using the app we are configuring the route of "GET" and the path is "/getUsers"
/**
 * GET POST PUT PATCH DELETE
 */
app.get('/user/:id/:name', (req, res) => {
	console.log(req.params)
	res.send(req.params)
})
app.get('/user/:id', (req, res) => {
	console.log(req.params)
	res.send(req.params)
})
app.get('/user', (req, res) => {
	console.log('req.query', req.query)
	res.send({
		name: 'Santoshi Gogo',
		age: 20,
		male: true
	})
})

app.post('/user', (req, res) => {
	res.send('Request success');
})
app.get('/getTraining', (req, res) => {
	var trainingObj = {
		id: 123,
		name: 'Express Course',
		active: true
	}
	res.send(trainingObj)
})
app.get('/getUsers', (req, res) => {
	res.send('All users')
})
/**
 * Create static resources server
 */
app.use(express.static('public'))

// watch on the specific port
// -> http.createServer
app.listen(3000, () => {
	console.log('Express Server is running on http://localhost:3000/')
})