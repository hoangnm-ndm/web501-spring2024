const products = [];

fetch("http://localhost:3000/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    products.push(...data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("done");
  });

const app = document.getElementById("app");
const htmlContent = products
  .map((item) => {
    return `
  <h1>${item.title}</h1>
  `;
  })
  .join("");

console.log(htmlContent);
