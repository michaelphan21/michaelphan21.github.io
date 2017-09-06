$(document).ready(function(){
	
	//fade in text in intro and end
	$("#overlay, #overlay h1, #overlay_2, #overlay_2 h1").each(function(i) {
		$(this).delay(i*2000).fadeIn(2000);
	});

	//fade in nav bar
	$(".navbar").hide().fadeIn(3000);

});