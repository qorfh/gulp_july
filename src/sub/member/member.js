$(document).ready(function(){
    $("#join").on("submit", function(e){
        e.preventDefault();

        var agreed = $('#terms').is(':checked');
        var len = $('.required').length;
        var pwd = $('#pwd').val();
        var pwd2 = $('#pwd2').val();
        var radio = $('input[name=gender]').is(':checked');
        var isRequired = false;
        var isPwd = false;
        var isGender = false;
        var i=0;
        var noData = false;

        if(!agreed){
            alert("약관을 동의해 주세요.");
            $(".agreement textarea").addClass("red");
        }else{
            // 필수 텍스트 입력사항 반복문으로 체크
            $(".required").each(function(index){
                var data = $(this).val();

                if(!data){
                    $(this).addClass("red");
                    noData = true;
                }else{
                    i++;
                }
            });

            if(noData){
                alert("필수정보를 입력해주세요.");
                noData = false;
            }

            if(i==len){
                isRequired = true;
            }

            // 비밀번호 값이 같은지 체크
            if(pwd !== pwd2){
                alert('비밀번호를 동일하게 입력해주세요.');
                $('#pwd, #pwd2').addClass('red');
            }else{
                isPwd = true;   
            }

            //라디오버튼 체크
            if(!radio){
                alert('성별을 선택해주세요.');
                $('input[name=gender]').parent('td').addClass('red');
            }else{
                isGender = true;               
            }

            //최종인증처리
            if(isRequired && isPwd && isGender){
                alert('회원가입이 완료되었습니다.');

                $('.required').val('');
                $('#terms').prop('checked',false);
                $('input[name=gender]').prop('checked',false);
            } 
        }
    });
});