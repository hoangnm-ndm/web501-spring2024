const app = document.getElementById("app");

const callAPI = async () => {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  console.log(data);
  const htmlContent = data
    .map((item) => {
      return `
      <h1>${item.title}</h1>
  `;
    })
    .join("");
  app.innerHTML = htmlContent;
};

callAPI();
