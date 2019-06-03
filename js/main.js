$(document).ready(function(){
	
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
	
	
	
});