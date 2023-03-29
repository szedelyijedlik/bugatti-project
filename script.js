window.onload = function () {
    window.onscroll = function () {
      if (document.body.scrollTop < 10) {
        welcomeAnimation();
      }
    };
  };

function welcomeAnimation(){
    let navLogoImg = document.querySelector(".navbar-brand svg");
    let navBar = document.querySelector(".navbar-nav");
    let floatDiv = document.querySelector(".floatDiv");

    navLogoImg.style.left = "70px";
    navLogoImg.style.top = "-45px";
    navLogoImg.style.width = "90px";
    navBar.style.right = "100px"
    navBar.style.top = "40px"
    floatDiv.style.width = "100%";
    floatDiv.style.height = "13vh";
    floatDiv.style.borderRadius = "0";
}