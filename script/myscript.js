$(function(){
		$("ul li a").click(function(){
			$(this).siblings("li").removeClass('active');
			$(this).addClass('active');
			
		});
	});