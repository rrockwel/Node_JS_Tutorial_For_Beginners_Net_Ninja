let express = require('express');
let app = express();

app.set('view engine', 'ejs');

// serves static directory 'assets' which contains stylesheet
	//     v    Tells browser which route to follow. Matches stylesheet link href
app.use('/main', express.static('main'));
							//    ^   Tells express server which route to follow (i.e. which directory to use)

app.get('/',function(req,res){
	res.render('index');
});

app.get('/contact',function(req,res){
	res.render('contact', {qs:req.query});
});

app.get('/profile/:name', function(req,res){
	let data = {age:31,job:'Genius',hobbies:['Things','and','Stuff']}
	res.render('profile', {person:req.params.name, data:data});
});


// Serves css file
app.use(express.static(__dirname+'/public'));

app.listen(3000);

