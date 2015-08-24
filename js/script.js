$(document).ready(function() {
	$('#mainwrapper').hide();
	$('button').click(function() {
		$('#mainwrapper').toggle();
	})
	$('#mainwrapper .box').mouseenter(function() {
		$(this).css("opacity", 1);
	});
	$('#mainwrapper .box').mouseleave(function() {
		$(this).css("opacity", 0.2);
	});
	
});