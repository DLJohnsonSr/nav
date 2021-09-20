"use strict";

const navButton = document.querySelector(".nav-button");
const navLinkList = document.querySelector(".nav-list-display");
const burgers = document.querySelector(".nav-burgers").children;
const userActions = ["click", "enter"];

// toggle mobile menu

userActions.forEach((action) =>
  navButton.addEventListener(action, navListTrigger)
);

// close menu list when link clicked
userActions.forEach((action) =>
  navLinkList.addEventListener(action, navListTrigger)
);

function navListTrigger() {
  toggleList();
  transformBurger();
}

function toggleList() {
  navLinkList.classList.toggle("nav-list-display");
}

function transformBurger() {
  burgers[0].classList.toggle("nav-burger-a");
  burgers[1].classList.toggle("nav-burger-b");
  burgers[2].classList.toggle("nav-burger-c");
}
