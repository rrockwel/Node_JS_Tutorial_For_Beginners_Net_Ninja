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
// create 'itemOne' and save it to the database       v callback function to catch errors
let itemOne = Todo({item: 'buy flowers'}).save(function(err){
	if(err) throw err;
	console.log('item saved');
});

let data = []
let urlencodedParser = bodyParser.urlencoded({extended:false});


module.exports = function(app){

app.get('/todo', function(req,res){
	res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, function(req,res){
	data.push(req.body);
	res.json(data);
});

app.delete('/todo/:item', function(req,res){
	data = data.filter(function(todo){
		return todo.item.replace(/ /g, '-') !== req.params.item;
	})
	res.json(data);
});

};