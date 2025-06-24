let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
alert;

// blurr
document.addEventListener("DOMContentLoaded", function () {
  function toggleGlassEffect() {
    const triggerHeight = window.innerHeight * 0.9;
    const navbar = document.querySelector(".header");

    if (window.scrollY > triggerHeight) {
      navbar.classList.add("glass-effect");
    } else {
      navbar.classList.remove("glass-effect");
    }
    34;
  }

  window.addEventListener("scroll", toggleGlassEffect);

  toggleGlassEffect();
});
