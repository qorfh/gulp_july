$(document).ready(function(){
    console.log('slide');
    $('#slide li').on('click', function(e){
        e.preventDefault();

        var i = $(this).index();

        $('#slide li').addClass('off');
        $(this).removeClass('off').addClass('on');

        $('.con>.inner').empty(); // 데이터 호출하기에 앞서 혹시 모를 데이터들을 제거


        // 데이터 호출
        $.ajax({
            url:"data/data.json",
            dataType:"json"
        })
        .success(function(data){
            console.log(data);
            var arr = data.data;
            $('.con .inner')
                .append(
                    $('<div class="pic">').css({backgroundImage:'url(img/'+arr[i].img+')'}),
                    $('<span>').text(arr[i].date),
                    $('<h2>').text(arr[i].title),
                    $('<p>').text(arr[i].desc)
                )
        })
        .error(function(){
            alert('Fail to load Data');
        })

         // con 활성화
        setTimeout(function(){
            $('.con').addClass('on');
        },500)
        

        $('#slide .close').on('click', function(e){
            e.preventDefault();

            $('#slide .con').removeClass('on');
            $('#slide li').removeClass('on');
            setTimeout(function(){
                $('#slide li').removeClass('off');
            }, 500);
        });


    });
});