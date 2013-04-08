(function($) {
	jQuery(document).ready(function() {
		// µ¼º½µ±Ç°Ò³
		var pathname = window.location.pathname;
		pathname = pathname.toLowerCase();
		if ( (pathname.indexOf("archives") == -1) && (pathname.indexOf("categories") == -1) ){
			jQuery("#header nav li").attr("class", "menu-item");
			jQuery("#header nav li#nav-index").attr("class", "menu-item current-menu-item");
		}else{
			jQuery("#header nav li").attr("class", "menu-item");
			jQuery("#header nav li#nav-archives").attr("class", "menu-item current-menu-item");
		}
		//
		jQuery.scrolltop.scrollStart();
	});
})(jQuery);