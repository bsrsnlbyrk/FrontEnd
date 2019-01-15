(function($) {
	$(document).ready(function() {
        $('.card_area').jcarousel();

        $('#goLeft')
			.click(function(){
                $('.card_area').jcarousel('scroll','-=4')
            });
        $('#goRight')
			.click(function(){
                $('.card_area').jcarousel('scroll','+=4')
            });	
	});    
})(jQuery);