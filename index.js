const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");

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

  footer.classList.add("display-none");
  footer.style.transition = "1s";
  sectionObserver.observe(section);
  sectionObserver.observe(footer);
});

// slider button functionality

const familyTimeCardContainer = document.querySelector(
  ".family-time-card-container"
);
const sliderButtonContainer = document.querySelector(".slider-btn-container");
const sliderButtonRight = document.querySelector(".slider-btn-right");
const sliderButtonLeft = document.querySelector(".slider-btn-left");

let slide = 0;
console.log(slide);
function sideSlide(e) {
  console.log(e.target);
  if (e.target === sliderButtonRight) {
    if (slide < 50) {
      slide += 25;
    }

    console.log(slide);
    familyTimeCardContainer.style.transform = `translateX(${-slide}%)`;
  }

  if (e.target === sliderButtonLeft) {
    if (slide > 0) {
      slide -= 25;
    } else {
      slide = 0;
    }

    console.log(slide);
    familyTimeCardContainer.style.transform = `translateX(${-slide}%)`;
  }

  if (slide === 0) {
    sliderButtonLeft.classList.add("not-clickable");
  }

  if (slide > 0) {
    sliderButtonLeft.classList.remove("not-clickable");
  }
  if (slide === 50) {
    sliderButtonRight.classList.add("not-clickable");
  } else {
    sliderButtonRight.classList.remove("not-clickable");
  }
}

sliderButtonContainer.addEventListener("click", sideSlide);

console.log(document.querySelector(".gallery").querySelectorAll("li"));
