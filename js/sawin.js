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


jQuery(document).ready(function() {
	jQuery('a[href*=#]').unbind('click');
   jQuery('a[href*=#]').bind('click', function(e) {
       
	var target = $=jQuery(this).attr("href");
	if ( jQuery(window).innerWidth() < 718 ) { 
		var offset  = jQuery('.header-banner-top .main-navigation').height() - 50;
	}
	else {
	var offset  = jQuery('.header-banner-top .main-navigation').height() - 20;
    }
	jQuery('html, body').stop().animate({ scrollTop: jQuery(target).offset().top - offset}, 500, function() {
	     //location.hash = target;  //attach the hash (#jumptarget) to the pageurl
	});
			
	return false;
   });
  
});

if ( jQuery(window).innerWidth() < 718 ) {
	jQuery('.menu-item-has-children > a').unbind('click');
	    jQuery('.menu-item-has-children').each(function(){
	    	jQuery(this).addClass("closed");
	    })
	jQuery('.menu-item-has-children > a').on('click', function(e) {
			jQuery(this).toggleClass("expanded-item");
			jQuery(this).parent('.menu-item-has-children').toggleClass("closed");
	      	jQuery(this).parent().toggleClass("expanded");	
	      	jQuery(this).next('.sub-menu').toggleClass("pressed");
	      	console.log(jQuery(this).parent().hasClass(''));
	      	if (jQuery(this).parent().hasClass('expanded')) {
	      		console.log('closed');
	      		e.preventDefault();	      	
	      }
	    });

}