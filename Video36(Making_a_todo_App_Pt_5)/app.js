let express = require('express');
let todoController = require('./controllers/todoController');


let app = express();

// set up template engine
app.set('view engine', 'ejs');

// serve static files
app.use(express.static('./public'));

// fire controllers
todoController(app)

//listen to port
app.listen(3000);
console.log('listening on port 3000');


