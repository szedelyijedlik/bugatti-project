window.onload = function () {
    window.onscroll = function () {
      if (document.body.scrollTop < 10) {
        welcomeAnimation();
      }
    };
  };

function welcomeAnimation(){
    let navLogoImg = document.querySelector(".navbar-brand");
    let navBar = document.querySelector(".navbar-collapse");
    let floatDiv = document.querySelector(".floatDiv");
    let navbarToggler = document.querySelector(".navbar-toggler");

    navLogoImg.classList.add("manCollapse");
    navBar.classList.add("manCollapse");
    floatDiv.classList.add("manCollapse");
    navbarToggler.classList.add("manCollapse");
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

let navbarCollapse = document.querySelector(".navbar-collapse");
