const events = require('events');
const util = require('util');


/*let myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
	console.log(msg);
});

myEmitter.emit('someEvent','The Event Was Emitted');

*/

let Person = function(name){
	this.name = name;
};

util.inherits(Person,events.EventEmitter);

let james = new Person('James');
let mary = new Person('Mary');
let ryu = new Person('Ryu');

let people = [james, mary, ryu];

people.forEach(function(person){
	person.on('speak', function(msg){
		console.log(person.name + ' said: ' + msg );
	});
});

james.emit('speak','hey dudes');
ryu.emit('speak', 'I want a curry');
