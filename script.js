window.onload = function () {
    window.onscroll = function () {
      if (document.body.scrollTop < 10) {
        welcomeAnimation();
      }
    };
  };

function welcomeAnimation(){
    let navLogoImg = document.querySelector(".navbar-brand svg");
    let navBar = document.querySelector(".navbar-collapse");
    let floatDiv = document.querySelector(".floatDiv");

    navLogoImg.style.transform = "none";
    navLogoImg.style.left = "70px";
    navLogoImg.style.top = "-40px";
    navLogoImg.style.width = "90px";
    navBar.style.transform = "none";
    navBar.style.right = "-200px"
    navBar.style.top = "40px"
    floatDiv.style.width = "100%";
    floatDiv.style.height = "13vh";
    floatDiv.style.borderRadius = "0";
}

setTimeout(scrollToContinue, 10);

function scrollToContinue(){
    let scrollDiv = document.querySelector("a.scrollToContinue");
    scrollDiv.style.opacity = 1;
    setTimeout(scrollToContinueBack, 2000);
}

function scrollToContinueBack(){
    let scrollDiv = document.querySelector("a.scrollToContinue");
    scrollDiv.style.opacity = 0.1;
    setTimeout(scrollToContinue, 2000);
}

