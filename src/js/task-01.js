const listEl = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((category) => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});