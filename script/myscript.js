$(function(){
		$("ul li a").click(function(){
			$(this).siblings("li").removeClass('active');
			$(this).addClass('active');
		});
// show the small nav bar
		$('.menu').click(function(e){
			e.stopPropagation();
			$('#main-nav').toggleClass('mobile-active');
		});


	});
