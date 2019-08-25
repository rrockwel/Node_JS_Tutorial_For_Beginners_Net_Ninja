const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

// Connect to MongoDB (cloud) database
mongoose.connect("mongodb+srv://test:test@todo-59hjt.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});

// Create a schema (blueprint) for data storage
let todoSchema = new mongoose.Schema({
	item: String
});
// Create model for data
let Todo = mongoose.model('Todo', todoSchema);


//let data = [{item: 'get milk'},{item: 'walk dog'},{item: 'coding'}]
let urlencodedParser = bodyParser.urlencoded({extended:false});


module.exports = function(app){

app.get('/todo', function(req,res){
	// get data from MongoDB and pass it to the view
	Todo.find({}, function(err,data){
		if(err) throw err;
		res.render('todo', {todos: data});
	});
	
});

app.post('/todo', urlencodedParser, function(req,res){
	// get data from the view and add it to MongoDB
	let newTodo = Todo(req.body).save(function(err,data){
		if(err) throw err;
		res.json(data);
	});
});

app.delete('/todo/:item', function(req,res){
	// delete requested item from MongoDB
	Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove(function(err,data){
		if(err) throw err;
		res.json(data);
	});
});

};