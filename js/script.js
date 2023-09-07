// loading
// (function(){
//     window.onload = function(){
//     const preloader = document.querySelector('.page-loading');
//     const wrap = document.getElementById('wrap');
//     wrap.style.display = "none";
//     preloader.classList.remove('active');
//     setTimeout(function(){
//         preloader.remove();
//         wrap.style.display = "block";
//     },3000);
//     };
// })();


// const preloader = document.querySelector('.page-loading');
// const wrap = document.getElementById('wrap');
// const active = document.querySelector('.nav-link');
// wrap.style.visibility = "hidden"

// function test(){
//     preloader.remove();
//     wrap.style.visibility = "visible";
//     active.classList.add = "active";

// }

// setTimeout(test,1000);

$(document).ready(function() {

    // 스크롤 스파이 함수
    function scrollSpy() {
        var sections = $('div'); // 모든 섹션 요소 가져오기
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

    // 페이지 로드 시 초기 스크롤 위치에서도 스크롤 스파이 실행
    scrollSpy();


    var headerHeight = $('#box1').height();

    function floatSearch(){
        if($(window).scrollTop() > headerHeight){
            $('nav').addClass('position-fixed');
        }else{
            $('nav').removeClass('position-fixed');
        }
    }

    $(window).scroll(function(){
        floatSearch();
    });

    floatSearch();


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

    function myFunction() {
        myVar = setTimeout(showPage, 3000);
        }
        
    function showPage() {
    $('#load').css('display','none');
    $('#wrap').css('display','block');
    scrollSpy();
    }

    myFunction();
});
