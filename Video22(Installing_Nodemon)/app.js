let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req,res){
	console.log('request was made: '+req.url);
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/index.html').pipe(res);
	}else if(req.url === '/contact-us'){
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/contact.html').pipe(res);
	}else if(req.url === '/api/ninjas'){
		let ninjas = [{name: 'ryu', age:29},{name:'richard',age:31}];
		res.writeHead(200, {'Content-Type':'application/json'});
		res.end(JSON.stringify(ninjas));
	}else{
		res.writeHead(404, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/404.html').pipe(res);
	}

})

server.listen(3000);
console.log('server listening on port 3000');

