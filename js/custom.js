$(document).ready(function(){
    $('.menutoggle').click(function(){
        $('body').toggleClass('opened');
        $('.menu_item').toggleClass('menuopened')
    });
    // submneu toggle
    $('.li_menu  a').click(function(){
        if ($(window).width()< 992) {
            var target = $(this);
                 $('ul.submenu').slideToggle();
                 $(this).parent().toggleClass('active');
        }
    });
    // sticky header
    $(window).scroll(function(){
        if ($(this).scrollTop()>1) {
            $('header').addClass('sticky');
          } else {
            $('header').removeClass('sticky');
          }
    });
    // slick slider
    $('.card_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },  
          {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
      $('.profile_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },  
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
     
              
});