console.log("JS Loaded successfully.")

var slidePos = 0;

//carouselAuto- Allows the carousel to automatically loop without user input
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

//carouselManClick - Allows the user to navigate the carousel with clickable buttons.
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

//carouselMan - Allows the user to navigate the carousel with keyboard inputs.
function carouselMan() {
    var slides = document.getElementsByClassName("Slide");
    var btnRight = document.getElementById("next");
    var btnLeft = document.getElementById("prev");
    var btnAnimOn = "animation: jump 1s ease;";
    var btnAnimOff = "animation: none;"
    let slideIn = "animation: FadeIn 2s ease; display: block; ";
    let slideOut = "animation: FadeOut 2s ease; display: none; ";

    window.addEventListener("keydown", keyPressCheck, false);

    function keyPressCheck(e) {
      if (e.keyCode == "39") {  //RIGHT
        btnRight.style.cssText = btnAnimOff;
        slides[slidePos-1].style.cssText = slideOut;
        if (slidePos >= slides.length) {
          slidePos = 0
        }
        slidePos++; 
        slides[slidePos-1].style.cssText = slideIn;
        btnAnim_right()
      } 

      if (e.keyCode == "37") {  //LEFT
            btnLeft.style.cssText = btnAnimOff;
            slides[slidePos-1].style.cssText = slideOut;
            if (slidePos == 1) {
              slides[slidePos-1].style.cssText = slideOut;
              slidePos = slides.length;
              slides[slidePos-1].style.cssText = slideIn; 
          } else { 
              slidePos--;
              slides[slidePos-1].style.cssText = slideIn;
              btnAnim_left()
        }

        for(s in slides) {
          btnAnim_left()
        } 
    }
  }
  return slidePos

  //btnAnim_left & btnAnim_right - Animate the button on keyboard input.
  function btnAnim_left() {
    btnLeft.style.cssText = btnAnimOn;
  }

  function btnAnim_right() {
    btnRight.style.cssText = btnAnimOn;
  }
}

ftright_plaque.onclick = function() {
    ftright_plaque.style.cssText = "animation: flip 2s; transition: all 1s; box-shadow: inset 0vw 1.6vw red; background-color: gray; color: white;";
    SectionFooter.style.cssText = "background-color: black; transition: all 1s; color: white;";
    };

window.onscroll = function() {
    backgroundAnim()
}

//backgroundAnim- dim the background colour as the user scrolls down the page.
function backgroundAnim() {
  var body = document.getElementsByTagName("body")[0];
  const [red, green, blue] = [19, 220, 235];

  window.addEventListener("scroll", colourChange);

  function colourChange() {
    let pos = 1 + (window.scrollY || window.pageYOffset) / 500

    if (pos < 1) {
       pos = 1 
      } else {
        pos = pos  }

    let[r, g, b] = [red/pos, green/pos, blue/pos].map(Math.round)
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})` 
    }
}

carouselAuto()
carouselMan()
