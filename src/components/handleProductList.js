import api from "../apis";

const handleProductList = async () => {
  const productList = document.getElementById("productList");
  try {
    // Bước 1: fetch data
    const { data } = await api.get("/products");
    // ! destructuring
    // Bước 2: Lấy được data thì map thành content
    const contentHTML = data
      .map(
        (product) => /*html*/ `
          <img src="${product.thumbnail}" />
          <div class="inner-product">
          <h2>${product.title}<h2>
          <p>Giá: ${product.price}<p>
          <p>Mô tả: ${product.description}<p>
          <a href="/detail/${product.id}" class="btn btn-success">Xem chi tiết</a>
          </div>
        `
      )
      .join("");

    // Bước 3: Gắn content vào DOM
    productList.innerHTML = contentHTML;
  } catch (error) {
    console.log(error);
  }
};

export default handleProductList;
