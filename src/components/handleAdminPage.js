import { deleteOne, getAll } from "../api/product.api";

const handleAdminPage = () => {
  const productList = document.getElementById("productList");
  console.log(productList);
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
            <button class="btn btn=primary" id="deleteBtn">Delete</button>
            <button class="btn btn=primary" id="updateBtn">Update</button>
          </div>
        </div>
        `
      )
      .join("");
    productList.innerHTML = contentHTML;

    const deleteBtn = document.getElementById("deleteBtn");
    console.log(deleteBtn);

    deleteBtn.onclick = (id) => {
      deleteOne(id).then(({ data }) => console.log(data));
    };
  });
};

export default handleAdminPage;
