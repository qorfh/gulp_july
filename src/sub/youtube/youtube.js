$(document).ready(function(){
    var $wrap = $('.youtube');
    var $prev = $wrap.find('.prevBtn');
    var $next = $wrap.find('.nextBtn');
    var $wrap = $('.youtubeWrap .wrap');

    $next.on('click',function(e){
        e.preventDefault();
        $wrap.find('.item').first().appendTo($wrap);
        activation();
    })

    $prev.on('click',function(e){
        e.preventDefault();
        $wrap.find('.item').last().prependTo($wrap);
        activation();
    });



    function activation(){
        $wrap.find('.item').removeClass('on');
        $wrap.find('.item').eq(3).addClass('on');    
    }


var URL = "https://www.googleapis.com/youtube/v3/playlistItems";
var playlistId = "PLGOVj4gmzJyDZ4VkTTHeQFBnJzNPCjxYJ";
var key = "AIzaSyA8xg64iiWhpfvbKxNz7fIb4-9G-BrS5RU";

var options = {
    part : 'snippet',
    key : key,
    maxResults : 7,
    playlistId : playlistId
}



$.ajax({
    url : URL,
    dataType : 'jsonp',
    data : options
})
.success(function(data){
    console.log(data.items);
    var item = data.items; // 7개의 배열

    $(item).each(function(index, data){
        console.log(index); // 해당 배열에서 반복을 도는 순서 값
        //console.log(data); // 해당 배열에서 반복을 도는 데이터 값
        console.log(this); // 해당 배열에서 반복을 도는 데이터 값(위와 동일)

        var thumb = data.snippet.thumbnails.standard.url; // 반복을 도는 '그' 대상의 이미지 주소
        var title = data.snippet.title; // 반복을 도는 대상의 제목
        var desc = data.snippet.description; // 반복을 도는 대상의 본문 내용
        var date = data.snippet.publishedAt; // 반복을 도는 대상의 날짜
        var videoId = data.snippet.resourceId.videoId; // 반복을 도는 대상의 영상 아이디

        if(title.length > 20){
            title = title.substring(0,20)+'...';
        }else{
            title = title;
        }
       

        if(desc.length > 30){
            desc = desc.substring(0,30)+'...';
        }else{
            desc = desc;
        }

        if(date.length > 10){
            date = date.substring(0,10)+'';
        }else{
            date = date;
        }


        $('.wrap')
            .append(
                $('<div class="item">').attr({'video-id':videoId,'data-index':index})
                    .append(
                        $('<div class="inner">')
                            .append(
                                $('<div class="pic">').css({'background-image':'url('+thumb+')'})
                            )
                    )
            )
    });
    
})
.error(function(){
    alert('Fail to load data!!!');    
});
// .item 클릭시 레이어 팝업으로 유튜브 영상 출력
$('body').on('click', '.item', function(){
    var videoId = $(this).attr('video-Id');
    var bg = $(this).css('background-color');
    
        $('.circle').css({backgroundColor:bg});
        $('.circle').addClass('on');
        setTimeout(function(){
            $('.circle').removeClass('on');
        },500)

        $('article.pic .pop').empty();
        $('article.pic .pop')
            .append(
                $('<iframe>').attr({
                    "width":"100%",
                    "height":"100%",
                    "src":"https://www.youtube.com/embed/"+videoId,
                    "frameborder":0,
                    "fullscreen":true
                })
            )

        
        
            

});


});
