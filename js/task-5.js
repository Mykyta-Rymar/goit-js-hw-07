function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const hopa = document.querySelector(".change-color");
const spam = document.querySelector(".widget-color");
const bodyFive = document.querySelector("body");

hopa.addEventListener("click", aboba);

function aboba() {
  const color = getRandomHexColor();
  bodyFive.style.backgroundColor = color;
  spam.textContent = color;
}
