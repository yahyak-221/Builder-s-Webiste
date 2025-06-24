AOS.init();

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const topOffset =
      section.getBoundingClientRect().top +
      window.scrollY -
      window.innerHeight * 0.1;

    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  }
}
