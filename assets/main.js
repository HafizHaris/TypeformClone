const UpdateVideo = () => { 
    const vid = document.getElementById("vid");
    const source = document.getElementById("hvid");
  
    if (window.matchMedia("(min-width: 1200px)").matches) {
      source.setAttribute("src", "https://www.typeform.com/static/home-page/hero/video-1920.mp4");
    } else if(window.matchMedia("(min-width: 777px)").matches){
      source.setAttribute("src", "https://www.typeform.com/static/home-page/hero/video-1024-below.mp4");
    }else if(window.matchMedia("(max-width: 776px)").matches){
      source.setAttribute("src", "https://www.typeform.com/static/home-page/hero/video-mobile.mp4");
    }
  
    vid.load();
}
  
  
  UpdateVideo();
  window.addEventListener("resize", function(){
   UpdateVideo();
  });