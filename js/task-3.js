const input = document.querySelector("#name-input");
input.addEventListener("input", babak);

const span = document.querySelector("#name-output");

function babak() {
  const inputValue = input.value.trim();
  if (inputValue === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = inputValue;
  }
}
