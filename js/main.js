//top_left(gnb버튼)를 누르면 gnb가 왼쪽에서 튀어나옴
$('.top_left').click(function(){
    $('#gnb').animate({left : 0},300,'swing');
    $('.dark').css({'display':'block'});
});

//gnb 사라짐
$('.dark').click(function(){
    $('.dark').css({'display':'none'});
    $('#gnb').animate({left:-340},300,'swing');
    $('.login_popup').hide();   //dark 누르면 로그인팝업창 사라짐
});


//gnb에서 서브메뉴 슬라이드
$('.btn_sub').click(function(){
    $(this).find('span').toggleClass('on');
    $(this).siblings('.list_sub_wrap').slideToggle(300);
});


//로그인 팝업창
$('.login_require').click(function(){
    $('.login_popup').show();
    $('#gnb').animate({left:-340},300,'swing');
});

//로그인 팝업창 닫기버튼 누르면 로그인팝업창 사라짐
$('.btn_close').click(function(){
    $('.dark').css({'display':'none'});
    $('.login_popup').hide();
});