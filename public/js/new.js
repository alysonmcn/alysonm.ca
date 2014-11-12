$(document).ready(function(){
	var $win = $(window),
		isTouch = !!('ontouchstart' in window),
		clickEvent = isTouch ? 'tap' : 'click';

	
	
	// Video Showcase Example
	(function(){
		var $carousel = $('#video_showcase'),
		$frame = $('.frame', $carousel),
		$title = $('div.details #title', $carousel),
		$desc = $('div.details #desc', $carousel);
		$frame.mightySlider({
			speed: 500,
			autoScale: 1,
			viewport: 'fill',

			// Navigation options
			navigation: {
				activateOn: clickEvent,
				slideSize: '53%'
			},
			
			// Buttons options
			buttons: {
				prev: $('#video_showcase_prev'),
				next: $('#video_showcase_next')
			},

			// Dragging options
			dragging: {
				swingSpeed:    0.1
			}
		}, {
			active: function(name, index){
				$title.html(this.slides[index].options.title);
				$desc.html(this.slides[index].options.desc);
			}
		});
	})();
	// End of Video Showcase Example
	
	
	$('a[href*=".jpg"]').each(function(){
		$(this).iLightBox({
			skin: 'metro-black',
			fullViewPort: 'fit'
		});
	});
});

window.___gcfg = {lang: "en"};
(function() {
	var po = document.createElement("script"); po.type = "text/javascript"; po.async = true;
	po.src = "https://apis.google.com/js/plusone.js";
	var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);
})();