// Our Twitter library
var Twit = require('twit');
// We need to include our configuration file
var T = new Twit(require('./config.js'));

var stream = T.stream('statuses/filter', { track: ['nyc'] })
stream.on('tweet', function (tweet) {
  eval(require('locus'))
})