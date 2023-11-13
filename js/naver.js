$(document).ready(function(){
    var headerHeight = $('#header').height();

    function floatSearch(){
        if($(window).scrollTop() > headerHeight){
            $('#search').addClass('fixed');
        }else{
            $('#search').removeClass('fixed');
        }
    }

    $(window).scroll(function(){
        floatSearch();
    });

    floatSearch();

    $('.gnb > li:nth-last-child(2)').click(function(){
        $('#allMenu').css('display','block');
        $('.gnb > li:last-child').css('display','block');
        $(this).css('display','none');
    });

    $('.gnb > li:last-child').click(function(){
        $('#allMenu').css('display','none');
        $('.gnb > li:nth-last-child(2)').css('display','block');
        $(this).css('display','none');
    });

    $('.shoppingArea .menu1').click(function(){
        $('.shoppingArea .menu1').addClass('gtextOn');
        $('.shoppingArea .menu2').removeClass('gtextOn');
        $('.shoppingArea .menu3').removeClass('gtextOn');
    });
    $('.shoppingArea .menu2').click(function(){
        $('.shoppingArea .menu2').addClass('gtextOn');
        $('.shoppingArea .menu1').removeClass('gtextOn');
        $('.shoppingArea .menu3').removeClass('gtextOn');
    });
    $('.shoppingArea .menu3').click(function(){
        $('.shoppingArea .menu3').addClass('gtextOn');
        $('.shoppingArea .menu2').removeClass('gtextOn');
        $('.shoppingArea .menu1').removeClass('gtextOn');
    });
    
    $('#popupBar button').click(function(){
        $('#popupBar').hide();
    });

    var now = 0;
    
    start();
    function start(){
        $('.slide').eq(0).siblings().css('margin-left','-3000px');
        setInterval(function(){slide();},3000);
    }
    function slide(){
        now = now == 3 ? 0 : now += 1;
        $('.slide').eq(now-1).css('margin-left','-3000px');
        $('.slide').eq(now).css('margin-left','0px');
    }

    $('.idTab').click(function(){
        $('.idTab').removeClass('tabBg');
        $('.numTab').addClass('tabBg');
        $('.qrTab').addClass('tabBg');
        $('.id_pop').show();
        $('.num_pop').hide();
        $('.qr_pop').hide();
    });
    $('.numTab').click(function(){
        $('.numTab').removeClass('tabBg');
        $('.idTab').addClass('tabBg');
        $('.qrTab').addClass('tabBg');
        $('.num_pop').show();
        $('.id_pop').hide();
        $('.qr_pop').hide();
    });
    $('.qrTab').click(function(){
        $('.qrTab').removeClass('tabBg');
        $('.idTab').addClass('tabBg');
        $('.numTab').addClass('tabBg');
        $('.qr_pop').show();
        $('.id_pop').hide();
        $('.num_pop').hide();
    });

    $('.idBox > .id').click(function(){
        $('.idBox > .icon1').hide();
        $('.idBox > .icon2').show();
        $('.passwordBox > .icon3').show();
        $('.passwordBox > .icon4').hide();
    });
    $('.passwordBox > .pw').click(function(){
        $('.passwordBox > .icon3').hide();
        $('.passwordBox > .icon4').show();
        $('.idBox > .icon1').show();
        $('.idBox > .icon2').hide();
    });

    $('.loginArea > .login_box').click(function(){
        $('#login_pop').show();
    });
    $('#login_pop > button').click(function(){
        $('#login_pop').hide();
    });

    $('.idBox > .id').focus(function(){
        $('.id_gLine').show();
    });
    $('.idBox > .id').blur(function(){
        $('.id_gLine').hide();
    });
    $('.passwordBox > .pw').focus(function(){
        $('.pw_gLine').show();
    });
    $('.passwordBox > .pw').blur(function(){
        $('.pw_gLine').hide();
    });

    $('.numBox > .num').focus(function(){
        $('.numBox').css("border-color","#19ce60")
    });
    $('.numBox > .num').blur(function(){
        $('.numBox').css("border-color","#c6c6c6")
    });
});

