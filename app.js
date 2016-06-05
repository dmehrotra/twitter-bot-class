var app = require('express')();
var server = require('http').Server(app);

var io = require('socket.io')(server); 

var Twit = require('twit');
var T = new Twit(require('./config.js'));
var stream = T.stream('statuses/filter', { track: ['nyc'] })

app.get('/', function(req, res) {
	io.on('connection', function (socket) { 
		stream.on('tweet', function (tweet) {
	  		console.log(tweet)
	  		socket.emit('tweet', { tweet: tweet });
		})
	})
	res.sendFile(__dirname + "/views/index.html");

})

server.listen(3000);