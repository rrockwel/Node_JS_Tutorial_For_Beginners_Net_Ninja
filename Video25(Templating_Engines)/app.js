let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

app.get('/contact',function(req,res){
	res.sendFile(__dirname+'/contact.html')
});

app.get('/profile/:name', function(req,res){
	let data = {age:29,job:'ninja',hobbie:['eating','fighting','fishing']}
	res.render('profile', {person:req.params.name, data:data});
});


// Serves css file
app.use(express.static(__dirname+'/public'));





app.listen(3000);

