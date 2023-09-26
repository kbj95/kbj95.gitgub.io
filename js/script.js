$(document).ready(function() {

    // 스크롤 스파이 함수
    function scrollSpy() {
        var sections = $('section'); // 모든 섹션 요소 가져오기
        sections.each(function() {
            var top = $(this).offset().top; // 각 섹션의 상단 위치 계산
            var bottom = top + $(this).outerHeight(); // 각 섹션의 하단 위치 계산

            if ($(window).scrollTop() >= top && $(window).scrollTop() <= bottom) {
                var targetId = $(this).attr('id');
                $('li a').removeClass('active'); // 모든 네비게이션 링크의 활성 클래스 제거
                $('li a[href="#' + targetId + '"]').addClass('active'); // 현재 섹션에 해당하는 네비게이션 링크에 활성 클래스 추가
            }
        });
    }

    // 스크롤 이벤트 핸들러
    $(window).on('scroll', scrollSpy);

    var headerHeight = $('#box0').height();

    function fixedNav(){
        if($(window).scrollTop() > headerHeight){
            $('nav').addClass('position-fixed');
        }else{
            $('nav').removeClass('position-fixed');
        }
    }

    $(window).scroll(function(){
        fixedNav();
    });

    fixedNav();


    $({ val : 0 }).animate({ val : 101 }, {
        duration: 3000,
        step: function() {
            $(".protext").text(Math.floor(this.val));
        },
        complete: function() {
            $(".protext").text(Math.floor(this.val));
            $(".protext").css("color","#fff");
        }
        });

    // 시작
    function myFunction() {
        myVar = setTimeout(showPage, 3000);
        }
        
    function showPage() {
        $('.loadBox').css('display','none');
        $('#wrap').fadeIn();
        $('#load').fadeOut();
        scrollSpy();
    }

    myFunction();

    // 끝
    
    $(window).scroll(function(){
        var sc_top = $(this).scrollTop();
        $(".top").text(sc_top);
    });
});
