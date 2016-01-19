//overwrite StackParallx for shorter banner
/*function StackParallax() {
	if ( jQuery(window).innerWidth() > 667 ) {
	scrollPos = jQuery(this).scrollTop();
	jQuery('#stack-banner, .parallax').css({
		'background-position' : '50% ' + (-scrollPos/6)+"px"
	});
	
	jQuery('#bannertext').css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/200)
	});
}
}*/
function StackParallax2() {
	if ( jQuery(window).innerWidth() > 667 ) {
	scrollPos = jQuery(this).scrollTop();
	jQuery('#stack-banner, .parallax').css({
		'background-position' : '50% ' + (-scrollPos/6)+"px"
	});
	
	jQuery('#bannertext .buttons-ctn').css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/250)
	});
}
}
/*if(!isMobile.any()) {
jQuery(document).ready(function(){
	jQuery(window).scroll(function() {
		StackParallax2();
	});
	
});
}*/