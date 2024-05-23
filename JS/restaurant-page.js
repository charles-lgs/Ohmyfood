const heart = document.getElementById("heart");
const menuCheckOne = document.querySelector(
  ".restaurant__container_menu--check-one"
);
const menuCheckTwo = document.querySelector(
  ".restaurant__container_menu--check-two"
);
const menuCheckThree = document.querySelector(
  ".restaurant__container_menu--check-three"
);
const menuCheckDishesOne = document.querySelector(
  ".restaurant__container_menu--check-dishes-one"
);
const menuCheckDishesTwo = document.querySelector(
  ".restaurant__container_menu--check-dishes-two"
);
const menuCheckDishesThree = document.querySelector(
  ".restaurant__container_menu--check-dishes-three"
);

const checkEntranceOne = document.getElementById("check__entrance-one");
const checkEntranceTwo = document.getElementById("check__entrance-two");
const checkEntranceThree = document.getElementById("check__entrance-three");
const checkDishesOne = document.getElementById("check__dishes-one");
const checkDishesTwo = document.getElementById("check__dishes-two");
const checkDishesThree = document.getElementById("check__dishes-three");

heart.addEventListener("click", (e) => {
  e.preventDefault();
  heart.classList.toggle("fa-solid");
});

checkEntranceOne.addEventListener("click", (e) => {
  e.preventDefault();

  if (menuCheckOne.style.display === "flex") {
    menuCheckOne.classList.remove("check-on");
    menuCheckOne.style.display = "none";
  } else {
    menuCheckOne.style.display = "flex";
    menuCheckOne.classList.add("check-on");
  }
});

checkEntranceTwo.addEventListener("click", (e) => {
  e.preventDefault();

  if (menuCheckTwo.style.display === "flex") {
    menuCheckTwo.classList.remove("check-on");
    menuCheckTwo.style.display = "none";
  } else {
    menuCheckTwo.style.display = "flex";
    menuCheckTwo.classList.add("check-on");
  }
});

checkEntranceThree.addEventListener("click", (e) => {
  e.preventDefault();

  if (menuCheckThree.style.display === "flex") {
    menuCheckThree.classList.remove("check-on");
    menuCheckThree.style.display = "none";
  } else {
    menuCheckThree.style.display = "flex";
    menuCheckThree.classList.add("check-on");
  }
});

checkDishesOne.addEventListener("click", (e) => {
  e.preventDefault();

  if (menuCheckDishesOne.style.display === "flex") {
    menuCheckDishesOne.classList.remove("check-on");
    menuCheckDishesOne.style.display = "none";
  } else {
    menuCheckDishesOne.style.display = "flex";
    menuCheckDishesOne.classList.add("check-on");
  }
});

checkDishesTwo.addEventListener("click", (e) => {
  e.preventDefault();

  if (menuCheckDishesTwo.style.display === "flex") {
    menuCheckDishesTwo.classList.remove("check-on");
    menuCheckDishesTwo.style.display = "none";
  } else {
    menuCheckDishesTwo.style.display = "flex";
    menuCheckDishesTwo.classList.add("check-on");
  }
});

checkDishesThree.addEventListener("click", (e) => {
  e.preventDefault();

  if (menuCheckDishesThree.style.display === "flex") {
    menuCheckDishesThree.classList.remove("check-on");
    menuCheckDishesThree.style.display = "none";
  } else {
    menuCheckDishesThree.style.display = "flex";
    menuCheckDishesThree.classList.add("check-on");
  }
});
