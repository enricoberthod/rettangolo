const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000
const url = 'http://localhost:4000'

const getArea = require('./area').getArea


app.get('/', (req, res) => res.send('Hello World!'))




app.get('/getArea', (req, res) => {
	var v = []
    v[0] = parseInt(req.query.side1,10);
	v[1] = parseInt(req.query.side2,10);
	var x = getArea(v);
    var risultato = {area: x};
    res.send(risultato);
})



var server = app.listen(PORT, () => console.log('Listening on port ' + PORT))


module.exports = app;
module.exports = server;