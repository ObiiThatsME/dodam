
$(document).ready(function(){
    header_up_down();
    slide_play();
    act_tab();
    table_tab2();
    scroll_counting();
    top_btn_fade();
});


// 변수 선언
const $gnb = $('.gnb > li');
const $header = $('#header');
const CLASS_NAME = 'on';

const $act_btns = $('.act_btns > li');
const $act_wrap = $('.act_wrap > li');
const ACT_NAME = 'active';

const $adopt_btns = $('.adopt_btns > li');
const $adopt_slide = $('div.adopt_slide');


// 함수 선언
function header_up_down(){
    $gnb.on('mouseover', function () {
        $(this).addClass(CLASS_NAME);
        $header.addClass(CLASS_NAME);
    });
    $gnb.on('mouseout', function () {
        $(this).removeClass(CLASS_NAME);
    });
    $header.on('mouseout', function () {
        $(this).removeClass(CLASS_NAME);
    });
}

function slide_play(){
    // 메인슬라이드
    $('#slide #main_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    
    // 입양슬라이드
    $('#adopt .adopt_slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
}

function act_tab(){
    //도담도담 연도별 활동
    $act_btns.click(function(){
		let tab_id = $(this).attr('value');

		$act_btns.removeClass(ACT_NAME);
		$act_wrap.removeClass(ACT_NAME);

		$(this).addClass(ACT_NAME);
		$('.act_wrap > li#'+tab_id).addClass(ACT_NAME);
	});
    
    //도담도담 입양
    $adopt_btns.click(function(){
        let tab_id = $(this).attr('value');
        
        $adopt_btns.removeClass(ACT_NAME);
        $adopt_slide.removeClass(ACT_NAME);
       
        $(this).addClass(ACT_NAME);
		$('#adopt #'+tab_id).addClass(ACT_NAME);
    });
}


function table_tab2(){
    $("select#shelter_list").change(function () {
        $('.shelter_tbody').removeClass('active');
        $('#' + $(this).val()).addClass('active');
    });
}

function counting_number(){
    
    let cnt0 = 78550;
    counterFn();

    function counterFn() {
        id0 = setInterval(count0Fn, 40);

        function count0Fn() {
            cnt0++;
            if (cnt0 > 78611) {
                clearInterval(id0);
            } else {
                $(".number_effect").text(cnt0);
            }
        }
    }
}

function scroll_counting(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 500){
           counting_number();
        }
    });
}

function top_btn_fade(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 300){
           $('.go_top').fadeIn();
        }else{
           $('.go_top').fadeOut();
        }
    });
    
    $('.go_top').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop:0},500);
    });
}