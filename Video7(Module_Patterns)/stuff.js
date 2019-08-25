let counter = function(arr){
	return "There are "+arr.length+" elements in this array";
};

let adder = function(a,b){
	return `The sum of these two numbers is ${a+b}`;
};

let pi = 3.142;

module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
};

