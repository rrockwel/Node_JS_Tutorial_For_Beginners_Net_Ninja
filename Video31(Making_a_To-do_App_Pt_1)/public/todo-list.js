$(document).ready(function(){
	$(form).on('submit', function(){

		let item = $('form input');
		let todo = {item: item.val()};

		$.ajax({
			type: 'POST',
			url: '/todo',
			data: todo,
			success: function(data){
				// do something with the data via front-end framework
				location.reload();
			}
		});
	});
});