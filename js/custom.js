
  (function ($) {
  
  "use strict";

    // HERO SLIDE
    $('.hero-slide').backstretch([
      "images/slideshow/20250312_103717.JPG",
      "images/slideshow/20250312_103649.jpg",
      "images/slideshow/20250312_103859.jpg", 
      "images/slideshow/comptoir riad.jpg",
      
      "images/slideshow/20240312_094145.JPG", 
      "images/slideshow/20240312_094207.JPG", 
      "images/slideshow/wqq11-1024x768.JPG",
      "images/slideshow/20240312_094129.JPG",
      "images/slideshow/20201007_161855.JPG",
      "images/slideshow/1309412108475826177-1.jpg",
      "images/slideshow/20230617_105828.jpg",
      "images/slideshow/20250311_122000.jpg",
      "images/slideshow/20250311_133333.jpg",
      "images/slideshow/20250311_122041.jpg",
      "images/slideshow/20250311_122041.jpg",
      "images/slideshow/Untitled-22.png",
      "images/slideshow/20250221_182028.jpg",
      "images/slideshow/20250311_133318.jpg",
      "images/slideshow/IMG_2610.jpg",
      "images/slideshow/20250311_123322.jpg",
      "images/slideshow/20250311_123334.jpg",
      "images/slideshow/20250311_123457.jpg",
      "images/slideshow/20250311_123546.jpg",
      "images/slideshow/Untitled-31.png",
  
      "images/slideshow/Untitled-12.png",
      "images/slideshow/20230718_121917.jpg",
      "images/slideshow/IMG_2617.jpg"
    ],  {duration: 3000, fade: 750});

    // REVIEWS CAROUSEL
    $('.reviews-carousel').owlCarousel({
    items:3,
    loop:true,
    dots: false,
    nav: true,
    autoplay: true,
    margin:30,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    })

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);


