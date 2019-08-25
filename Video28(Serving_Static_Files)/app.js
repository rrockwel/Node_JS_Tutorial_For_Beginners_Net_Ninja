let express = require('express');
let app = express();

app.set('view engine', 'ejs');

// serves static directory 'assets' which contains stylesheet
	//    vvv Tells browser what route to use (e.g. .com/main) which will match stylesheet link href
app.use('/blah', express.static('main'));
							//   ^^^ Tells express server which folder to look into for static files
	


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


app.listen(3000);

