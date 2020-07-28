$(document).ready(function(){
    console.log('slide');
    $('li').on('click', function(e){
        e.preventDefault();

        var i = $(this).index();

        $('li').addClass('off');
        $(this).removeClass('off').addClass('on');

        $('.con>.inner').empty(); // 데이터 호출하기에 앞서 혹시 모를 데이터들을 제거


        // 데이터 호출
        $.ajax({
            
        })


    });
});