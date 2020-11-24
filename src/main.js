/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let pinta = generateRadomSuit();
  document.querySelector(".top-suit").classList.add(pinta);
  document.querySelector(".top-suit").innerHTML = pinta;
  document.querySelector(".bottom-suit").classList.add(pinta);
  document.querySelector(".bottom-suit").innerHTML = pinta;
};

let generateRadomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRadomSuit = () => {
  let suit = ["♠", "♣", "♥", "♦"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
