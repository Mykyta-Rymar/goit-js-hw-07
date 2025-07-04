const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);

listItem.forEach((list) => {
  const headItem = list.querySelector(".head-item");
  console.log(`Category: ${headItem.textContent}`);
  const liIncludes = list.querySelectorAll(".insert-item");
  console.log(`Elements: ${liIncludes.length}`);
});
