$(document).ready(function(){
<<<<<<< HEAD
	
	$("body").css("display", "none");
	$("body").fadeIn(2000);
	
	//jQuery AJAX load data from another web page.
	$("button").click(function() {
		$(".content").load(this.id+".html " + ".content");
		
		$("button.active").removeClass("active");
		$(this).closest("button").addClass("active");
		
		$(".content").css("display", "none");		
		$(".content").fadeIn(1000);
	});
	
	
	
=======
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

>>>>>>> 855e4b2fdf0ed96d6fda1a23e697ddafd779aab9
});