$(document).ready(function(){
	//fade in text in text and shade for intro parallax and outro parallax
	$("#overlay, #welcome, #end").each(function(i) {
		$(this).delay(i).fadeIn(4000);
	}); 	
	
	//hamburger menu for mobile
	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse('hide');
	});    
	
	//scrolling animation
	$("a").on('click', function() {
		$("HTML, BODY").animate({ scrollTop: $($(this).attr("href")).offset().top}, 800); 
	}); 

});