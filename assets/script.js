const ballOne = document.querySelector(".ball-one");
const ballTwo = document.querySelector(".ball-two");
const ballThree = document.querySelector(".ball-three");
const ballFour = document.querySelector(".ball-four");
const ballFive = document.querySelector(".ball-five");

const txtOne = document.querySelector(".hexagon-one .hexagon__text");
const txtTwo = document.querySelector(".hexagon-three .hexagon__text");
const txtThree = document.querySelector(".hexagon-four .hexagon__text");
const txtFour = document.querySelector(".hexagon-five .hexagon__text");

const hxgLine11 = document.querySelector(
  ".hexagon-one__lines span:nth-child(1)"
);
const hxgLine12 = document.querySelector(
  ".hexagon-one__lines span:nth-child(2)"
);
const hxgLine13 = document.querySelector(
  ".hexagon-one__lines span:nth-child(3)"
);
const hxgLine14 = document.querySelector(
  ".hexagon-one__lines span:nth-child(4)"
);
const hxgLine15 = document.querySelector(
  ".hexagon-one__lines span:nth-child(5)"
);

const hxgLine21 = document.querySelector(
  ".hexagon-two__lines span:nth-child(1)"
);
const hxgLine22 = document.querySelector(
  ".hexagon-two__lines span:nth-child(2)"
);

const hxgLine31 = document.querySelector(
  ".hexagon-three__lines span:nth-child(1)"
);
const hxgLine32 = document.querySelector(
  ".hexagon-three__lines span:nth-child(2)"
);
const hxgLine33 = document.querySelector(
  ".hexagon-three__lines span:nth-child(3)"
);

const hxgLine41 = document.querySelector(
  ".hexagon-four__lines span:nth-child(1)"
);
const hxgLine42 = document.querySelector(
  ".hexagon-four__lines span:nth-child(2)"
);
const hxgLine43 = document.querySelector(
  ".hexagon-four__lines span:nth-child(3)"
);
const hxgLine44 = document.querySelector(
  ".hexagon-four__lines span:nth-child(4)"
);

ballOne.addEventListener("mouseout", () => {
  hxgLine11.classList.toggle("active");
  hxgLine12.classList.toggle("active");
  hxgLine13.classList.toggle("active");
  hxgLine14.classList.toggle("active");
  hxgLine15.classList.toggle("active");
  ballTwo.classList.toggle("pulse");
  txtOne.classList.toggle("active");
});

ballOne.addEventListener("mouseover", () => {
  hxgLine11.classList.toggle("active");
  hxgLine12.classList.toggle("active");
  hxgLine13.classList.toggle("active");
  hxgLine14.classList.toggle("active");
  hxgLine15.classList.toggle("active");
  ballTwo.classList.toggle("pulse");
  txtOne.classList.toggle("active");
});

ballTwo.addEventListener("mouseout", () => {
  hxgLine21.classList.toggle("active");
  hxgLine22.classList.toggle("active");
  ballThree.classList.toggle("pulse");
  txtTwo.classList.toggle("active");
});

ballTwo.addEventListener("mouseover", () => {
  hxgLine21.classList.toggle("active");
  hxgLine22.classList.toggle("active");
  ballThree.classList.toggle("pulse");
  txtTwo.classList.toggle("active");
});

ballThree.addEventListener("mouseout", () => {
  hxgLine31.classList.toggle("active");
  hxgLine32.classList.toggle("active");
  hxgLine33.classList.toggle("active");
  ballFour.classList.toggle("pulse");
  txtThree.classList.toggle("active");
});

ballThree.addEventListener("mouseover", () => {
  hxgLine31.classList.toggle("active");
  hxgLine32.classList.toggle("active");
  hxgLine33.classList.toggle("active");
  ballFour.classList.toggle("pulse");
  txtThree.classList.toggle("active");
});

ballFour.addEventListener("mouseout", () => {
  hxgLine41.classList.toggle("active");
  hxgLine42.classList.toggle("active");
  hxgLine43.classList.toggle("active");
  hxgLine44.classList.toggle("active");
  ballFive.classList.toggle("pulse");
  txtFour.classList.toggle("active");
});

ballFour.addEventListener("mouseover", () => {
  hxgLine41.classList.toggle("active");
  hxgLine42.classList.toggle("active");
  hxgLine43.classList.toggle("active");
  hxgLine44.classList.toggle("active");
  ballFive.classList.toggle("pulse");
  txtFour.classList.toggle("active");
});

///////////SLIDER//////////////

const slide = document.querySelectorAll(".slider__item");
const arrowL = document.querySelector(".slider__left");
const arrowR = document.querySelector(".slider__right");
let currentSlide = 0;
arrowR.addEventListener("click", () => {
  for (i = 0; i < slide.length; i++) {
    slide[i].classList.remove("slide-active");
  }

  if (currentSlide + 1 == slide.length) {
    currentSlide = 0;
    slide[currentSlide].classList.add("slide-active");
  } else {
    slide[currentSlide + 1].classList.add("slide-active");
    currentSlide++;
  }
});

arrowL.addEventListener("click", () => {
  for (i = 0; i < slide.length; i++) {
    slide[i].classList.remove("slide-active");
  }

  if (currentSlide - 1 < 0) {
    currentSlide = slide.length - 1;
    slide[currentSlide].classList.add("slide-active");
  } else {
    slide[currentSlide - 1].classList.add("slide-active");
    currentSlide--;
  }
});
