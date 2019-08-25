let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
	res.render('index');
});

app.get('/contact',function(req,res){
	res.render('contact');
});

app.get('/profile/:name', function(req,res){
	let data = {age:31,job:'Genius',hobbies:['Things','and','Stuff']}
	res.render('profile', {person:req.params.name, data:data});
});


// Serves css file
app.use(express.static(__dirname+'/public'));
app.use('/images', express.static(__dirname+'/images'));






app.listen(3000);

