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
const checkEntranceOne = document.getElementById("check__entrance-one");
const checkEntranceTwo = document.getElementById("check__entrance-two");
const checkEntranceThree = document.getElementById("check__entrance-three");

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
