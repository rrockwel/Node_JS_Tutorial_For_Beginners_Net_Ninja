let time = 0;
let timer = setInterval(function(){
	time+=2;
	console.log(`${time} seconds have passed`);
	console.log(__dirname);
	console.log(__filename);
	if(time > 6){
		clearInterval(timer);
	}
},2000);

