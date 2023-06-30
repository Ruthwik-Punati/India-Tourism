// document.querySelector(".worker").addEventListener("click", function () {
//   console.log(1);
//   for (i = 0; i < 1000000000; i++) {
//     let j = i;
//   }
//   alert("worker done!");
// });

// document.querySelector(".normal").addEventListener("click", function () {
//   alert("normal clicked");
// });
const sectionGallery = document.querySelector(".section-gallery");
const sliderBtnLeft = document.querySelector(".slider-btn-left");
const sliderBtnRight = document.querySelector(".slider-btn-right");
const sliderBtnContainer = document.querySelector(".slider-btn-container");
const slider = document.querySelector(".family-time-card-container");
const galleryListItem = document
  .querySelector(".gallery")
  .querySelectorAll("li");

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

// GALLERY ANIMATON

// let move = 50;

// console.log(window.visualViewport.width);

// setInterval(function () {
//   translateGalleryItems();
// }, 10);

// function translateGalleryItems() {
//   galleryListItem.forEach(
//     (list) => (list.style.transform = `translate(${move}px)`)
//   );
//   if (move === 500) {
//     move = 0;
//   } else {
//     move = move + 1;
//   }
// }

// const observer = new IntersectionObserver(
//   function (entries) {
//     console.log(entries);
//     entries.forEach((e) => {
//       if (!e.isIntersecting) {
//         console.log(e.target);
//         e.target.style.transform = "translate(-400%)";
//       }
//     });
//   },
//   { root: sectionGallery, rootMargin: "50px", threshold: [0] }
// );

// galleryListItem.forEach((list) => observer.observe(list));

// document
//   .querySelector(".slider-btn-container")
//   .addEventListener("click", function (e) {
//     console.log(e.target);
//     if (e.target === sliderBtnLeft) {
//       slider.style.transform = "translate(-20%)";
//     }
//     if (e.target === sliderBtnRight) {
//       slider.style.marginLeft = "20%";
//     }
//   });
