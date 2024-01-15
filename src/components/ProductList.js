import { useEffect, useState } from "../utils/hook";

const url = "http://localhost:3000";

const ProductList = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  console.log(products);
  return /*html*/ `
  <h2>Apple</h2>
  <div >
    ${products
      // .filter((product) => product.brand === "Apple")
      .map(
        (product) => /*html*/ `
        <div class="product-card">
          <img class="product-image" src="${product.thumbnail}" alt="${
          product.title
        }" >
          <div class="product-info">
            <h3 class="product-name">${product.title}</h3>
            <div class="product-price">Giá gốc: ${product.price}</div>
            <div class="product-price">Khuyến mại: ${Math.floor(
              (product.price * (100 - product.discountPercentage)) / 100
            )}</div>
            <button class="btn btn-primary" id="btnAddToCart" onclick="addToCart()">Thêm vào giỏ hàng</button>
          </div>
        </div>
      `
      )
      .join("")}
  </div>
  `;
};

export default ProductList;
