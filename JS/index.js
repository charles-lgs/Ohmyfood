const heartOne = document.getElementById("heart-one");
const heartTwo = document.getElementById("heart-two");
const heartThree = document.getElementById("heart-three");
const heartFour = document.getElementById("heart-four");

heartOne.addEventListener("click", (e) => {
  e.preventDefault();
  heartOne.classList.toggle("fa-solid");
});

heartTwo.addEventListener("click", (e) => {
  e.preventDefault();
  heartTwo.classList.toggle("fa-solid");
});

heartThree.addEventListener("click", (e) => {
  e.preventDefault();
  heartThree.classList.toggle("fa-solid");
});

heartFour.addEventListener("click", (e) => {
  e.preventDefault();
  heartFour.classList.toggle("fa-solid");
});
