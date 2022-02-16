const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("li");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset > sectionTop - sectionHeight / 4) {
      currentSection = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(currentSection)) {
      li.classList.add("active");
    }
  });
  const maxHeight = window.document.body.scrollHeight - window.innerHeight;
  const percentage = (window.scrollY / maxHeight) * 100;
  document.querySelector(".scroll-indicator").style.width = percentage + "%";
});
