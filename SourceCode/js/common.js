// /**
//  * 메인페이지 툴팁
//  * 
//  */

// var mainTooltip = {
//     init: function() {
//         this.mTool();
//     },
//     mTool: function() {
//         var mb03 = $('.mainblock-03 .mb03 a');

//         mb03.tooltip();
//     }
// };
// mainTooltip.init();



// --------------------------------------------------------------------
// 새로 작성하는 js
// --------------------------------------------------------------------

/**
 * 푸터 하단의 패밀리 사이트
 * 
 */
// (function(){
//     'use strict';

//     var dt = $('.footer-menu dt a'),
//         dd = $('.footer-menu dd');

//     dt.on('click', function() {
//         if (dd.css('display') == 'none') {
//             dd.slideDown();
//         } else {
//             dd.slideUp();
//         }
//     });
// })();        


/**
 * quick menu
 * 1. 퀵메뉴의 높이값을 100로 설정
 * 2. scrollToFixed 플러그인 사용
 */
// (function(){
//     'use strict';

//     var w_height = $(window).height(),
//         d_height = $(document).height(),
//         quick = $('.quick');
//     // console.log('window height: ' + w_height);
//     // console.log('document height: ' + d_height);
//     // console.log('quick height: ' + w_height);

//     quick.css('height', d_height + 'px');
// })();        



/**
 * popup plugins
 * 우리동네 메디팜약국찾기, mediStore_040700.html 참고
 */
// (function(){
//     'use strict';

//     $('.popup-link').magnificPopup({
//         type: 'ajax',
//         overflowY: 'scroll' 
//     });
// })();        



/**
 * bxslider
 * 메디팜 제품,bxslider-02
 */
(function(){
    'use strict';

    // test slide
    // $('.test-bxSlider .bxslider').bxSlider({
    //     mode: 'fade',
    //     captions: true
    //     // 자동일경우 auto, 기본 멈춤
    //     // auto: false,
    //     // autoControls: true,
    //     // pager: false,
    //     // minSlides: 4,
    //     // maxSlides: 4,
    //     // slideWidth: 170,
    //     // sliderMargin: 0
    // });

    // // 메디팜 약국, 메디팜제품,mediStore_040201.html
    // $('.bxslider-02 .bxslider').bxSlider({
    //     pager: false,
    //     minSlides: 4,
    //     maxSlides: 4,
    //     slideWidth: 170,
    //     sliderMargin: 0
    // });

    // $('.box-03 .bxslider').bxSlider({
    //     pager: false
    // });
// 

})();        


// dom 이 로드된 다음 실행해야할 스크립트
// $(document).ready(function() {
//     'use strict';
    
//     // quick
//     // $('#quick').scrollToFixed();
//     $('#quick').scrollToFixed({ zIndex : 9});

//     // mediChain_030402 구인채용정보
//     $( '#datepicker' ).datepicker({
//       showOn: 'button',
//       buttonImage: '../images/icon/calendar.gif',
//       buttonImageOnly: true,
//       buttonText: 'Select date'
//     });

// });



// 리사이즈 할때 퀵메뉴 우측에 고정
// $( window ).resize(function() {
//     $('#quick').css('right','0');
// });