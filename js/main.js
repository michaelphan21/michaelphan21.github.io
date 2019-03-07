$(document).ready(function(){

	//fade in text in intro and end
	$("#overlay, #welcome, .navbar, #end").each(function(i) {
		$(this).delay(i).fadeIn(2000);
	}); 	
	
	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
	});
});