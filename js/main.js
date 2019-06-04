$(document).ready(function(){
	
	$("body").css("display", "none");
	$("body").fadeIn(2000);
	
	//jQuery AJAX load data from another web page.
	$("button").click(function() {
		$(".content").load("partials/"+ this.id+".html " + ".content");
		
		$("button.active").removeClass("active");
		$(this).closest("button").addClass("active");
		
		$(".content").css("display", "none");		
		$(".content").fadeIn(1000);
	});
	
});

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
