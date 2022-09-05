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
            items: 2,
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
        smartSpeed: 600,
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


  (function () {
    "use strict";
  
    var design_carousels = function () {
      $(".owl-carousel-create-section").owlCarousel({
        loop: false,
        // center: true,
        margin: 0,
        responsiveClass: true,
        smartSpeed: 600,
        ltl: true,
        nav: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          680: {
            items: 2,
            nav: true,
            loop: false
          },
          1000: {
            items: 4,
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

  function NextStory(story){
    let NextStory = 2 ;
    if(story==2) NextStory = 1;
    $(`#story${story}`).fadeOut(0);
    $(`#story${NextStory}`).fadeIn(750);
  }


  // dynamic carousel
  let CurrentSlide = 1;
  const RootElement = document.querySelector(':root');
  const RootStyle = getComputedStyle(RootElement);
  const MainImage = document.querySelector('.share-section .col-md-5 img');
  const FloatingImage = document.querySelector('.share-section .col-xl-7 img');
  const MainBg = document.querySelector('.share-section .container-fluid');
  const MainSection = document.querySelector('.share-section');
  
  $('.owl-carousel-create-section .owl-nav .owl-next').click(function() {
    if(CurrentSlide!=3){
    if(CurrentSlide==1){
        MainImage.src = "https://www.typeform.com/static/images/home-page/share-section/bg-email@1x.webp";
        FloatingImage.src = "https://www.typeform.com/static/images/home-page/share-section/example-email-en@1x.webp";
        MainBg.style.backgroundColor = RootStyle.getPropertyValue('--sharebg2');
        MainSection.style.color = "white";
    }else if(CurrentSlide==2){
        MainImage.src = "assets/images/bg-share3.jpg";
        FloatingImage.src = "https://www.typeform.com/static/images/home-page/share-section/example-share-en@1x.webp";
        MainBg.style.backgroundColor = RootStyle.getPropertyValue('--sharebg3');
        MainSection.style.color = RootStyle.getPropertyValue('--dark');
    }
    CurrentSlide++;
    }
  });


  $('.owl-carousel-create-section .owl-nav .owl-prev').click(function() {
    if(CurrentSlide!=1){
    if(CurrentSlide==2){
        MainImage.src = "https://www.typeform.com/static/images/home-page/share-section/bg-embed@1x.webp";
        FloatingImage.src = "https://www.typeform.com/static/images/home-page/share-section/example-embed-en@1x.webp";
        MainBg.style.backgroundColor = RootStyle.getPropertyValue('--sharebg1');
        MainSection.style.color = "white";
    }else if(CurrentSlide==3){
        MainImage.src = "https://www.typeform.com/static/images/home-page/share-section/bg-email@1x.webp";
        FloatingImage.src = "https://www.typeform.com/static/images/home-page/share-section/example-email-en@1x.webp";
        MainBg.style.backgroundColor = RootStyle.getPropertyValue('--sharebg2');
        MainSection.style.color = "white";
    }
    CurrentSlide--;
    }
  });


  window.onscroll = function() {scrollFunction()};
 
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      document.getElementById("navbar").style.background = "white";
    } else {
     
      document.getElementById("navbar").style.background = "none";
    }
  }
  