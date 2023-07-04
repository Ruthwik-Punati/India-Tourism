const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");

//  NAV BTN RELATED
const nav = document.querySelector("nav");
const navBtn = document.querySelector(".nav-btn");
const navCloseIcon = navBtn.querySelector(".nav-close-icon");
const navOpenIcon = navBtn.querySelector(".nav-open-icon");
const navLinks = document.querySelector(".nav-links");
const navLinkAll = document.querySelectorAll(".nav-link");

// NAV BUTTON FUNCTIONALITY
function navLinksToggle(e) {
  e.preventDefault();
  navCloseIcon.classList.toggle("display-full");
  navOpenIcon.classList.toggle("display-none");
  navLinks.classList.toggle("display-full");
}

function navClose() {
  navCloseIcon.classList.remove("display-full");
  navOpenIcon.classList.remove("display-none");
  navLinks.classList.remove("display-full");
}

navBtn.addEventListener("click", navLinksToggle);
navLinkAll.forEach((navLink) => {
  navLink.addEventListener("click", function (e) {
    e.preventDefault();
    navClose();
  });
});

const navLinksCloseOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

function navLinksClose(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navClose();
    }
  });
}

// document.querySelector("body").onscroll = (e) => {
//   console.log(e);
// };

let prevScrollPosition = 1000;

document.addEventListener("scroll", function (e) {
  console.log(window.scrollY);

  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > 720) {
    nav.classList.add("fixed");
    nav.style.marginTop = "-5rem";
  } else {
    nav.classList.remove("fixed");
    nav.style.marginTop = "0";
  }

  if (
    prevScrollPosition > currentScrollPosition &&
    currentScrollPosition > 720
  ) {
    console.log("moving up");
    nav.style.marginTop = "0";
  }

  navClose();

  prevScrollPosition = currentScrollPosition;
});
const navLinksObserver = new IntersectionObserver(
  navLinksClose,
  navLinksCloseOptions
);

navLinksObserver.observe(navLinks);

// LAZY LOADING

const sectionSlideUpOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-30px",
};

function slideUp(entries, arg) {
  entries.forEach((entry) => {
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

// SLIDER BUTTON FUNCTIONALITY

const familyTimeCardContainer = document.querySelector(
  ".family-time-card-container"
);
const sliderButtonContainer = document.querySelector(".slider-btn-container");
const sliderButtonRight = document.querySelector(".slider-btn-right");
const sliderButtonLeft = document.querySelector(".slider-btn-left");

let slide = 0;

let classes = [];

function buttonBorderSlideRight() {
  sliderButtonContainer.classList.add("btn-translate-right");
  sliderButtonContainer.classList.remove("btn-translate-left");
  console.log("moved right");
}

function buttonBorderSlideLeft() {
  sliderButtonContainer.classList.remove("btn-translate-right");
  sliderButtonContainer.classList.add("btn-translate-left");
  console.log("moved left");
}

function sideSlide(e) {
  if (e.target === sliderButtonRight) {
    if (slide < 50) {
      slide += 25;

      familyTimeCardContainer.style.transform = `translateX(${-slide}%)`;
      buttonBorderSlideRight();
    }
  }

  if (e.target === sliderButtonLeft) {
    if (slide > 0) {
      slide -= 25;

      familyTimeCardContainer.style.transform = `translateX(${-slide}%)`;

      buttonBorderSlideLeft();
    }
  }

  if (slide === 0) {
    sliderButtonLeft.classList.add("not-clickable");
    buttonBorderSlideRight();
  }

  if (slide > 0) {
    sliderButtonLeft.classList.remove("not-clickable");
  }
  if (slide === 50) {
    sliderButtonRight.classList.add("not-clickable");
    buttonBorderSlideLeft();
  } else {
    sliderButtonRight.classList.remove("not-clickable");
  }

  classes = sliderButtonContainer.getAttribute("class");
  console.log(classes);
}

sliderButtonContainer.addEventListener("click", sideSlide);

sliderButtonContainer.addEventListener("mouseover", function (e) {
  if (
    e.target === sliderButtonRight &&
    !e.target.classList.contains("not-clickable")
  ) {
    classes = sliderButtonContainer.getAttribute("class");
    console.log(classes);
    buttonBorderSlideRight();
  }

  if (
    e.target === sliderButtonLeft &&
    !e.target.classList.contains("not-clickable")
  ) {
    classes = sliderButtonContainer.getAttribute("class");
    console.log(classes);
    buttonBorderSlideLeft();
  }
});

sliderButtonContainer.addEventListener("mouseout", function (e) {
  console.log(sliderButtonContainer.getAttribute("class"));
  if (e.target === sliderButtonLeft || e.target === sliderButtonRight) {
    console.log(classes);
    console.log(1);
    sliderButtonContainer.className = classes;
  }
});
