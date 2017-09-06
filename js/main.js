$(document).ready(function(){
	//hide navbar first
	$(".navbar").hide()
	//fade in text in intro and end
	$("#overlay, #welcome, .navbar, #overlay_2, #end").each(function(i) {
		$(this).delay(i*2000).fadeIn(2000);
	}); 	
});