const bobr = document.querySelectorAll(".item");
console.log(`Number of categories: ${bobr.length}`);

bobr.forEach((biba) => {
  const hamb = biba.querySelector(".head-item");
  console.log(hamb.textContent);
  const bebra = biba.querySelectorAll(".insert-item");
  console.log(bebra.length);
});
