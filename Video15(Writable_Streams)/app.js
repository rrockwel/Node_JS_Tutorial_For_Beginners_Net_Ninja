let http = require('http');
let fs = require('fs');


let myRead = fs.createReadStream(__dirname+'/readme.txt', 'utf8');
let myWrite = fs.createWriteStream(__dirname+'/writeMe.txt');

myRead.on('data', function(chunk){
	console.log('new chunk received');
	myWrite.write(chunk);
});





/*
let server = http.createServer((req,res)=>{
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type':"text/plain'});
	res.end('hello');
	});

	server.listen(3000);
	console.log('now listening on port 3000);
*/