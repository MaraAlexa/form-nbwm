$(function(){
	//highlight bedrijfsdoc or ubo-doc navbar when clicked
		$("ul li a").click(function(){
			$(this).siblings("li").removeClass('active');
			$(this).addClass('active');
		});
// show the small nav bar
		$('.menu').click(function(){
			//e.stopPropagation();
			$('#main-nav').toggleClass('mobile-active');
		});
	}); // End wrapping function
