
$(document).ready(function(){	
	
	

	var pos;
    var pos1 = $('#visual').offset().top;
	var pos2 = $('#news').offset().top;
	var pos3 = $('#slide').offset().top;
	var pos4 = $('#detail').offset().top;
	var pos5 = $('#notice').offset().top;
	var pos6 = $('#tabmenu').offset().top;
	var pos7 = $('#ad').offset().top;
	var base = -300;
	
	//브라우저가 로딩완료시 setPos함수 호출
	setPos();	
	
	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();

		if(scroll >= pos1+base && scroll < pos2+base){
			$('#scrollBtn>li>a').removeClass('on');
			$('#scrollBtn>li').eq(0).children('a').addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(0).addClass('on');
		}
		if(scroll >= pos2+base && scroll < pos3+base){
			$('#scrollBtn>li>a').removeClass('on');
			$('#scrollBtn>li').eq(1).children('a').addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(1).addClass('on');
		}
		if(scroll >= pos3+base && scroll < pos4+base){
			$('#scrollBtn>li>a').removeClass('on');
			$('#scrollBtn>li').eq(2).children('a').addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(2).addClass('on');
        }
        if(scroll >= pos4+base && scroll < pos5+base){
			$('#scrollBtn>li>a').removeClass('on');
			$('#scrollBtn>li').eq(3).children('a').addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(3).addClass('on');
        }
        if(scroll >= pos5+base && scroll < pos6+base){
			$('#scrollBtn>li>a').removeClass('on');
			$('#scrollBtn>li').eq(4).children('a').addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(4).addClass('on');
        }
        if(scroll >= pos6+base && scroll < pos7+base){
			$('#scrollBtn>li>a').removeClass('on');
			$('#scrollBtn>li').eq(5).children('a').addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(5).addClass('on');
		}
		if(scroll >= pos7+base ){
			$('#scrollBtn>li>a').removeClass('on');
			$('#scrollBtn>li').eq(6).children('a').addClass('on');
			$('.box').removeClass('on');
			$('.box').eq(6).addClass('on');
		}
	});

	//버튼 클릭시 매칭되는 박스의 위치값으로 이동
	$('#scrollBtn>li>a').on('click',function(e){
		e.preventDefault();

		var target = $(this).attr('href');
		var target_pos = $(target).offset().top;		
		$('html,body').stop().animate({scrollTop : target_pos},1000);
		
	});
	
	
	//배열에 각 박스의 세로위치값을 저장하는 함수정의
	function setPos(){  
		pos=[];  
		$('.box').each(function(index,item){     
			pos.push( $(item).offset().top );
		});
		//console.log(pos);
	}


	// wheelmotion
	$('.box').on('mousewheel', function(e, delta){
		e.preventDefault();
		// console.log(delta);

		var active_index = $('#scrollBtn>li>a.on').parent('li').index();
		var len = $('#scrollBtn>li').length;
	
		if(delta > 0){
			//console.log('up');
			if(active_index == 0) return;

			var prev_pos = $(this).prev().offset().top;
			$('html,body').stop().animate({scrollTop: prev_pos}, 500);
		}else{
			//console.log('down');
			if(active_index == len-1) return;

			var next_pos = $(this).next().offset().top;
			$('html,body').stop().animate({scrollTop: next_pos}, 500);
	
		}
	
	
	});


});