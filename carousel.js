(function($) {
	$(document).ready(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
			.click(function(){
                $('.jcarousel').jcarousel('scroll','-=1')
            })
			.on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            });

        $('.jcarousel-control-next')
			.click(function(){
                $('.jcarousel').jcarousel('scroll','+=1')
            })
			.on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            });
	});    
})(jQuery);