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

ftright_plaque.onclick = function() {
    ftright_plaque.style.cssText = "animation: flip 2s; transition: all 1s; box-shadow: inset 0vw 1.6vw red; background-color: gray; color: white;";
    SectionFooter.style.cssText = "background-color: black; transition: all 1s; color: white;";
    };

window.onscroll = function() {
    backgroundAnim()
}

function backgroundAnim() {
        var body = document.getElementsByTagName("body")[0];

        const [red, green, blue] = [19, 220, 235]

        window.addEventListener('scroll', () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 500
        y = y < 1 ? 1 : y
        let [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
}

carouselAuto()
carouselMan()
