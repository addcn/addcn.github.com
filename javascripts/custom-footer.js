(function($) {
	jQuery(document).ready(function() {
		// ������ǰҳ
		var pathname = window.location.pathname;
		pathname = pathname.toLowerCase();
		if ( (pathname.indexOf("archives") == -1) && (pathname.indexOf("categories") == -1) ){
			jQuery("#container-header nav li").attr("class", "menu-item");
			jQuery("#container-header nav li#nav-index").attr("class", "menu-item current-menu-item");
		}else{
			jQuery("#container-header nav li").attr("class", "menu-item");
			jQuery("#container-header nav li#nav-archives").attr("class", "menu-item current-menu-item");
		}
		// ���ض���
		jQuery.scrolltop.scrollStart();
		//
		jQuery('a[href^="http"],a[href^="https"],a[href^="ftp"]').each(function(){
			var link = jQuery(this).attr("href");
			link = link.toLowerCase();
			if( ( (link.indexOf("http://") != -1) || (link.indexOf("https://") != -1) || (link.indexOf("ftp://") != -1) ) && (link.indexOf("uedao.com") == -1) ){
				jQuery(this).attr('target', '_blank');
			}
		});
	});
})(jQuery);