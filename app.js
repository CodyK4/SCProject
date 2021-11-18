var slidePos = 0;

console.log("JS Loaded successfully.")

function carouselAuto() { 
    var slides = document.getElementsByClassName("Slide");
    
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.cssText = "animation: FadeOut 2s ease; display: none; ";
      }
      slidePos++ 
      if (slidePos > slides.length) {slidePos = 1}

    slides[slidePos-1].style.cssText = "animation: FadeIn 2s ease; display: block; ";
    setTimeout(carouselAuto, 18000); //18 sec

    return slidePos
}


function carouselManClick(onclick) {
    var slides = document.getElementsByClassName("Slide");

    for (let i = 0; i < slides.length; i++) {
        slides[slidePos-1].style.cssText = "animation: FadeOut 2s ease; display: none; ";
    }
    slidePos += onclick;
    if (slidePos > slides.length) {slidePos = 1}
    if (slidePos == 0) {slidePos = slides.length;}

    slides[slidePos-1].style.cssText = "animation: FadeIn 2s ease;  2s ease; display: block; ";

    return slidePos
}

function carouselMan() {
    var slides = document.getElementsByClassName("Slide");
    let slideIn = "animation: FadeIn 2s ease; display: block; ";
    let slideOut = "animation: FadeOut 2s ease; display: none; ";

    window.addEventListener("keydown", keyPressCheck, false);

    function keyPressCheck(e) {
      if (e.keyCode == "39") {  //RIGHT
        slides[slidePos-1].style.cssText = slideOut;
        if (slidePos >= slides.length) {
          slidePos = 0
        }
        slidePos++; 
        slides[slidePos-1].style.cssText = slideIn;
      } 

      if (e.keyCode == "37") {  //LEFT
            slides[slidePos-1].style.cssText = slideOut;
            if (slidePos == 1) {
              slides[slidePos-1].style.cssText = slideOut;
              slidePos = slides.length;
              slides[slidePos-1].style.cssText = slideIn; 
          } else { 
              slidePos--;
              slides[slidePos-1].style.cssText = slideIn;
        }
    }
  }
  return slidePos
}

carouselAuto()
carouselMan()
