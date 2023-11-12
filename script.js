// const elemToObserve = document.querySelector("#sec_2");
// const elems = document.querySelectorAll(".section");
// console.log(elems);
// const galerySec = document.querySelector(".section h1");

// const option = {
//   root: null,
//   threshold: 0,
// };

// const observer = (enteries, observer) => {
//   enteries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       console.log("Element is in the viewport");
//       console.log(galerySec.classList);
//       galerySec.classList.add("slideup");
//     } else {
//       console.log("Element is not in the viewport");
//       galerySec.classList.remove("slideup");
//     }
//   });
// };

// elems.forEach((elem) => {
//   const intersectionObserver = new IntersectionObserver(observer, option);
//   intersectionObserver.observe(elem);
// });

// const observer = new IntersectionObserver((enteries, observer) => {
//   enteries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       console.log("Element is in the viewport");
//       galerySec.classList.add("slideup");

//       //   observer.unobserve(elemToObserve);
//     } else {
//       console.log("Element is not in the viewport");
//       galerySec.classList.remove("slideup");
//     }
//   });
// }, option);

// observer.observe(elemToObserve);

const elems = document.querySelectorAll(".section");
console.log(elems);

const option = {
  root: null,
  threshold: 0, // Adjust the threshold as needed
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log("Element is in the viewport");
      const galerySec = entry.target.querySelector("h1");
      if (galerySec) {
        galerySec.classList.add("slideup");
      }
    } else {
      console.log("Element is not in the viewport");
      const galerySec = entry.target.querySelector("h1");
      if (galerySec) {
        galerySec.classList.remove("slideup");
      }
    }
  });
}, option);

elems.forEach((elem) => {
  observer.observe(elem);
});

const scrollButton = document.getElementById("scroll-to-top");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

scrollButton.onclick = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

const caruselContainer = document.querySelector(".carousel");
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
prevButton.style.opacity = 0;
let index = 0;
const cardWidth = document.querySelector(".note-card").offsetWidth + 55;

// const ccc = document.querySelector(".carousel").offsetWidth;
// console.log(ccc);
console.log(cardWidth);

prevButton.addEventListener("click", () => {
  //its going down till 0
  index = Math.max(index - 1, 0);
  console.log(index);
  console.log(caruselContainer.children.length - index);
  if (index == 0) {
    nextButton.style.opacity = 1;
    prevButton.style.opacity = 0;
  }

  caruselContainer.style.transform = `translateX(${index * cardWidth}px)`;
});

nextButton.addEventListener("click", () => {
  //its going up till the length of the card-note array
  index = Math.min(index + 1, caruselContainer.children.length - 1);
  console.log(index);
  console.log(caruselContainer.children.length - index);
  if (caruselContainer.children.length - index == 3) {
    prevButton.style.opacity = 1;
    nextButton.style.opacity = 0;
  }

  caruselContainer.style.transform = `translateX(${-index * cardWidth}px)`;
});
