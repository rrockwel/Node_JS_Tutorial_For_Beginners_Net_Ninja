const fs = require('fs');


// delete files through file system
/*
fs.unlink('writeMe.txt', function (err){
	if(err) throw err;
	console.log('file was deleted');
});
*/

// Synchronously create a directory called 'stuff'
/*
fs.mkdirSync('stuff');
*/
// Synchronously delete a directory called 'stuff'
/*
fs.rmdirSync('stuff');

// Asynchronously Create a directory called 'stuff' and then write a file 'writeMe.txt' into it from 'readMe.txt'
/*
fs.mkdir('stuff', function(){
	fs.readFile('readMe.txt', 'utf8', function(err, data){
		fs.writeFile('./stuff/writeMe.txt', data, function(err){
			if(err){
				console.log("err: ", err);
			}
		});
	});
});
*/

// Asynchronously remove file 'writeMe.txt' from 'stuff' directory before removing 'stuff' directory
fs.unlink('./stuff/writeMe.txt', function(){
	fs.rmdir('stuff', function(err){
		if(err){
			console.log("err: ",err);
		};
	});
});


