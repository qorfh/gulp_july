$(document).ready(function(){	
    
    $('#wrap dt a').on('click focusin', function(e){
        e.preventDefault();

        var target = $(this).attr('href');
        
        $('#wrap dd').hide().removeClass('on');
        $(target).show();
        setTimeout(function(){
            $(target).addClass('on');
        },100);

        $('#wrap dt a').removeClass('on');
        $(this).addClass('on');
    });

    $('.box').on({
        'click':function(e){
            e.preventDefault();
            console.log('You clicked!');
        },
        'mouseenter':function(){
            console.log('You mouseentered');
        },
        'mouseleave':function(){
            console.log('You mouseleave');
        }
        
    })


});









