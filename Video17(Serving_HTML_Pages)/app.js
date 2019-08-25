let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req,res){
	console.log("request made: "+req.url);
	res.writeHead(200,{'Content-Type':'text/html'});
	let myRead = fs.createReadStream(__dirname+'/index.html', 'utf8');
	myRead.pipe(res);
});

server.listen(3000);
console.log('Server listening on port 3000');
