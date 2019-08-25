let http = require('http');
let fs = require ('fs');



let server = http.createServer(function(req,res){
	console.log('request was made: ',+req.url);
	res.writeHead(200, {'Content-Type':'text/plain'});
	let myRead = fs.createReadStream(__dirname+'/readMe.txt', 'utf8');
	myRead.pipe(res);
});

server.listen(3000);
console.log('Now listening on port 3000');
