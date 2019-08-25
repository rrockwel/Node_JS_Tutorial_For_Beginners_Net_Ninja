const http = require('http')
const fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

myReadStream.on('data', function(chunk){
	console.log('new chunk received:');
	console.log(chunk);

});


/*
// create server
const server = http.createServer(function(req,res){
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('hey');
});

// tell server which port to listen on
server.listen(3000);
// log that the server is started on port: ____
console.log('Server started on port 3000');

*/