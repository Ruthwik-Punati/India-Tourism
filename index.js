const sections = document.querySelectorAll("section");

//  NAV BTN RELATED
const navBtn = document.querySelector(".nav-btn");
const navCloseIcon = navBtn.querySelector(".nav-close-icon");
const navOpenIcon = navBtn.querySelector(".nav-open-icon");
const navLinks = document.querySelector(".nav-links");

// NAV BUTTON FUNCTIONALITY
navBtn.addEventListener("click", function (e) {
  console.log(e.target);
  // if (!navOpenIcon.classList.contains("display-none")){
  //   navLinks.classList.add()
  // }

  navCloseIcon.classList.toggle("display-full");
  navOpenIcon.classList.toggle("display-none");
  navLinks.classList.toggle("display-full");
});

// LAZY LOADING

const sectionSlideUpOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-30px",
};

function slideUp(entries, arg) {
  console.log(arg);
  console.log(entries);
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.style.transform = "none";
      entry.target.classList.remove("display-none");
    }
  });
}

const sectionObserver = new IntersectionObserver(
  slideUp,
  sectionSlideUpOptions
);

sections.forEach((section) => {
  section.style.transform = "translateY(20rem)";
  section.classList.add("display-none");
  section.style.transition = "1s";
  sectionObserver.observe(section);
});
