import { getAll } from "../api/product.api";
import { instance } from "../utils/common";

const ProductList = () => {
  const productList = document.getElementById("productList");
  console.log(productList);
  instance.get("/products").then(({ data }) => {
    console.log(data);
  });

  instance
    .post("/products", {
      title: "Test",
      price: 1000,
      thumbnail: "https://picsum.photos/200",
      description: "Test",
    })
    .then((data) => {
      console.log(data);
    });
  getAll().then(({ data }) => {
    const contentHTML = data
      .map(
        (item) => `
        <div class="product-card">
        <img src="${item.thumbnail}" alt="${item.title}" />
        <div class="product-infor">
         <h2>${item.title}</h2>
        <div>Giá: ${item.price}</div>
        <p>Mô tả: ${item.description}</p>
        <a data-navigo href="products/${item.id}">Xem chi tiết</a>
        </div>
        </div>
        `
      )
      .join("");
    productList.innerHTML = contentHTML;
  });
};

export default ProductList;
