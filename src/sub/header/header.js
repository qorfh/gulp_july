$(document).ready(function(){
    var speed = 500;

    // 브라우저 로딩 시 rwd 호출
    rwd();

    // 브라우저가 리사이즈 될 때마다 rwd( ) 호출
    $(window).on('resize', function(){
        rwd();
    });

   

    // 브라우저 넓이 값에 따른 다른 이벤트 함수 연결
    function rwd(){
        var wid = $(window).width();

        // 웹
        if(wid >= 1000){
            $("#gnbMo").removeClass("on");
            $("#header_sub").on("mouseenter", openSub);
        
            $("#header_sub").on("mouseleave", closeSub);
        }else{
            // 타블릿 이하
            // off() 있는 함수를 제거하는 함수
            $("#header_sub").off("mouseenter");
        
            $("#header_sub").off("mouseleave");
        }
    }
    
    // btnCall 클릭 시
    $(".btnCall").on("click", function(){
        var isOpen = $("#gnbMo").hasClass("on");

        if(isOpen){
            $("#gnbMo").removeClass("on");
        }else{
            $("#gnbMo").addClass("on")
        }
    });

    $(".is-close-menu").on('click', function(){
        $("#gnbMo").removeClass("on");
    });

    //gnbMo 2depth 보이기
    $("#gnbMo>ul>li>a").on("click", function(e){
        e.preventDefault();

        var isOpen = $(this).next("ul").css("display");
        if(isOpen == "block"){
            $(this).next("ul").slideUp();
        }
        if(isOpen == "none"){
            $(this).next("ul").slideDown();
        }
    });

    //1depth메뉴 활성화 유지    
    $("#header_sub #gnb li").on('mouseenter',function(){
        $(this).children('a').addClass('on');
    });
    $("#header_sub #gnb li").on('mouseleave',function(){
        $(this).children('a').removeClass('on');
    });

    function openSub(){
        $("#gnb ul").stop().slideDown(speed);
        $(".bgGnb").stop().slideDown(speed);
    }
    function closeSub(){
        $("#gnb ul").slideUp(speed-300);
        $(".bgGnb").slideUp(speed);
    }
})