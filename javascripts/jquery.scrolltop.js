/**
 * scrolltop   »Øµ½í”²¿ 1.0
 * @arguments
 * @Creator    guojian
 * @Depend     jQuery 1.3+
 * @Date       2013/03/25
 **/
(function($){
	var topShow = false;
    jQuery.scrolltop = function(options){
        var settings = {
			pageWidth : 960,
			controlHtml : '<img id="__top" src="/images/go-to-top.png" style="width:40px; height:40px; cursor:pointer;" />'
		}
		if (options) {
            jQuery.extend(settings, options);
        }
		var left_width = (jQuery(window).width() - settings.pageWidth)/2;
		var this_width = left_width + settings.pageWidth + 30;
		var $top = jQuery("#__topAct");
		var _top = jQuery(window).scrollTop();
		var _top_width = jQuery("#__top").width();
		if(this_width + _top_width > jQuery(window).width()){
			this_width =  this_width - _top_width - 10;
		}
		if (_top >= 100) {
			if (!topShow) {
				$top.blur().fadeIn();
			}
			/*
			if (jQuery.browser.msie && jQuery.browser.version == '6.0') {
				$top.css({
					position: 'absolute',
					bottom: 60,
					left: this_width
				});
			} else {*/
				$top.css({
					position: 'fixed',
					bottom: 60,
					left: this_width
				});
			//}
			topShow = true;
		} else {
			if (topShow) $top.fadeOut();
			topShow = false;
		}
		jQuery("#__topAct").html(settings.controlHtml);
		jQuery("#__top").click(function(){
			jQuery(window).scrollTop(0);
		})
	}
	jQuery.scrolltop.appendDiv = function(){
		var content = '<div id="__topAct" style="position:absolute;display:none; background:none no-repeat scroll 0 0 transparent; border-bottom: 0px solid #fff;"></div>';
		$('body').append(content);
	}
	jQuery.scrolltop.scrollStart = function(){
		jQuery.scrolltop.appendDiv();
		jQuery(window).scroll(jQuery.scrolltop);
	}
})(jQuery);