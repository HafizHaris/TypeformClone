const UpdateVideo = () => { 
    const vid = document.getElementById("vid");
    const source = document.getElementById("hvid");

    const vid2 = document.getElementById("vid2");
    const source2 = document.getElementById("hvid2");

    const vid3 = document.getElementById("vid3");
    const source3 = document.getElementById("hvid3");

    const gif_img = document.getElementById("gif-img");
  
    if (window.matchMedia("(min-width: 1200px)").matches) {
      source.setAttribute("src", "https://www.typeform.com/static/home-page/hero/video-1920.mp4");
      source2.setAttribute("src", "https://www.typeform.com/static/home-page/inline-form-1.mp4");
      source3.setAttribute("src", "https://www.typeform.com/static/home-page/inline-form-2.mp4");
      gif_img.setAttribute("src", "https://www.typeform.com/static/images/home-page/meaningful/meaningful-banner-lg.gif");
    } else if(window.matchMedia("(min-width: 777px)").matches){
      source.setAttribute("src", "https://www.typeform.com/static/home-page/hero/video-1024-below.mp4");
      source2.setAttribute("src", "https://www.typeform.com/static/home-page/inline-form-1.mp4");
      source3.setAttribute("src", "https://www.typeform.com/static/home-page/inline-form-2-mobile.mp4");
      gif_img.setAttribute("src", "https://www.typeform.com/static/images/home-page/meaningful/meaningful-banner-lg.gif");
    }else if(window.matchMedia("(max-width: 776px)").matches){
      source.setAttribute("src", "https://www.typeform.com/static/home-page/hero/video-mobile.mp4");
      source2.setAttribute("src", "https://www.typeform.com/static/home-page/inline-form-1-mobile.mp4");
      source3.setAttribute("src", "https://www.typeform.com/static/home-page/inline-form-2-mobile.mp4");
      gif_img.setAttribute("src", "https://www.typeform.com/static/images/home-page/meaningful/meaningful-banner-xs.gif");
    }
  
    vid.load();
    vid2.load();
    vid3.load();
}
  
  
  UpdateVideo();
  window.addEventListener("resize", function(){
   UpdateVideo();
  });


  (function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 3,
            nav: false,
            loop: false
          },
          1350: {
            items: 5,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();


  (function () {
    "use strict";
  
    var design_carousels = function () {
      $(".owl-carousel-design-section").owlCarousel({
        loop: false,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      design_carousels();
    })(jQuery);
  })();
  
  function DesignArrowClick(){
    document.querySelector('.owl-next').click();
    document.getElementById('arrow-section').style.display = "none";
  }