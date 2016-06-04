var app = require('express')();
var server = require('http').Server(app);
// var Twit = require('twit');
// var T = new Twit(require('./config.js'));
// var stream = T.stream('statuses/filter', { track: ['nyc'] })

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/views/index.html");

})
// stream.on('tweet', function (tweet) {
//   eval(require('locus'))
// })
server.listen(3000);