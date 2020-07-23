$(document).ready(function(){
    
    var $wrap = $('#banner');
    var $slide = $wrap.find('.banner>ul');
    var $prev = $wrap.find('.prev');
    var $next = $wrap.find('.next');
    var slide_wid = $slide.children('li').outerWidth();
    var speed = 500;
    console.log(slide_wid);

    $next.on('click',function(e){
        e.preventDefault();

        $slide.stop().animate({marginLeft : -slide_wid*2 },speed,function(){
            $(this).css({marginLeft : -slide_wid});
            $(this).find('li').first().appendTo(this);
        });
    });

    $prev.on('click',function(e){
        e.preventDefault();

        $slide.stop().animate({marginLeft : 0 },speed,function(){
            $(this).css({marginLeft : -slide_wid});
            $(this).find('li').last().prependTo(this);
        });
    });
    
});