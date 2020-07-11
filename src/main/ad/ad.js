$(document).ready(function(){

	$('.banner ul li').last().prependTo('.banner ul'); // 맨 처음 1번이 나오게

	rwd_wid();

	
	$(window).on('resize', rwd_wid);
	// = 
	// $(window).on('resize', function(){
	// 	rwd_wid();
	// })

	function rwd_wid(){
		var wid = $(this).width();
		
		if(wid>=1180) doBanner(4);
		if(wid>=540 && wid<1180) doBanner(2);
		if(wid<540) doBanner(1);
	}


	function doBanner(num){
		$('.banner ul').css({marginLeft:(-100 / num)+"%"});
		$('.prev, .next').off();
		$('.next').on('click', function(e){
			e.preventDefault();
			$('.banner ul').animate({marginLeft:((-100 / num)*2)+"%"}, 500, function(){
				$(this).children('li').first().appendTo(this);
				$(this).css({marginLeft:(-100 / num)+"%"});
			})
		})

		$('.prev').on('click', function(e){
			e.preventDefault();
			$('.banner ul').animate({marginLeft:'0%'}, 500, function(){
				$(this).children('li').last().prependTo(this);
				$(this).css({marginLeft:(-100 / num)+"%"});
			})
		})
	}

});
