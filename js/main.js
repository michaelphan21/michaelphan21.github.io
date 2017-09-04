$(document).ready(function(){
	$("#overlay, #overlay h1").each(function(i) {
		$(this).delay(i*2000).fadeIn(2000);
	});
	$(".navbar").hide().fadeIn(4000);
});