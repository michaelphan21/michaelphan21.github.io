$(document).ready(function(){
	
	//page fade in
  $(".content").load("partials/home.html");
	$("body").css("display", "none");
	$("body").fadeIn(2000);
	
	//toggle divider visibility
	$(".navbar-toggle").click(function() {
		if ($(".collapse").is(":visible")) {
			$(".toggle_divider").css("display", "block");
		} else {
			$(".toggle_divider").css("display", "none");
		}		
	});
	
	//hide navbar after click
	$(window).click(function() {
		$('.navbar-collapse').collapse('hide');
	});
	
	//jQuery AJAX load data from another web page.
	//mobile & desktop
	$(".nav button, .page_divider button").click(function() {
		$(".content").load("partials/"+ this.id+".html");
		
		$('.navbar-collapse').collapse('hide');
		$(".toggle_divider").css("display", "block");

		$("button.active").removeClass("active");
		$(this).closest("button").addClass("active");
		
		$(".content").css("display", "none");		
		$(".content").fadeIn(1000);
		
		
	});
});

/*
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
   document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function */

	//SLIDESHOW
  var slideIndex = 1;
	showDivs(slideIndex);
	
	function plusDivs(n) {
	  showDivs(slideIndex += n);
	}

	function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  if(n > x.length) {
	  	 slideIndex = 1
	 	} 
	  if(n < 1) {
	  	 slideIndex = x.length
	  }
	  for (i = 0; i < x.length; i++) {
	    $(x[i]).css("display", "none");		    
	  }
	  $(x[slideIndex-1]).fadeIn(1000);	
	  
	        	  
	}	
