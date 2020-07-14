$(document).ready(function(){	

    var pos1 = $('#visual').offset().top;
	var pos2 = $('#news').offset().top;
	var pos3 = $('#slide').offset().top;
	var pos4 = $('#detail').offset().top;
	var pos5 = $('#notice').offset().top;
	var pos6 = $('#tabmenu').offset().top;
	var pos7 = $('#ad').offset().top;
	var base = -300;
	
	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();

		if(scroll >= pos1+base && scroll < pos2+base){
			$('#scrollBtn li').removeClass('on');
			$('#scrollBtn li').eq(0).addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(0).addClass('on');
		}
		if(scroll >= pos2+base && scroll < pos3+base){
			$('#scrollBtn li').removeClass('on');
			$('#scrollBtn li').eq(1).addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(1).addClass('on');
		}
		if(scroll >= pos3+base && scroll < pos4+base){
			$('#scrollBtn li').removeClass('on');
			$('#scrollBtn li').eq(2).addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(2).addClass('on');
        }
        if(scroll >= pos4+base && scroll < pos5+base){
			$('#scrollBtn li').removeClass('on');
			$('#scrollBtn li').eq(3).addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(3).addClass('on');
        }
        if(scroll >= pos5+base && scroll < pos6+base){
			$('#scrollBtn li').removeClass('on');
			$('#scrollBtn li').eq(4).addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(4).addClass('on');
        }
        if(scroll >= pos6+base && scroll < pos7+base){
			$('#scrollBtn li').removeClass('on');
			$('#scrollBtn li').eq(5).addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(5).addClass('on');
		}
		if(scroll >= pos7+base ){
			$('#scrollBtn li').removeClass('on');
			$('#scrollBtn li').eq(6).addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(6).addClass('on');
		}
	});

	$('#scrollBtn li').on('click',function(){
		var i = $(this).index();
		var target = $('.box').eq(i).offset().top;		
		$('html,body').stop().animate({scrollTop : target},1000);
		
	});
});