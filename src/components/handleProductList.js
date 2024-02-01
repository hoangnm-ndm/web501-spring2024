import instance from "../apis";

const handleProductList = async () => {
  try {
    const productList = document.getElementById("productList");
    const { data } = await instance.get("/products");
    console.log(data);
    const contentHTML = data
      .map(
        (item) => /*html*/ `
        <div class="product-card">
          <img src="${item.thumbnail}" alt="${item.title}" />
          <div class="product-infor">
            <h2>${item.title}</h2>
            <div>Giá: ${item.price}</div>
            <p>Mô tả: ${item.description}</p>
            <a href="/detail/${item.id}">Xem chi tiết</a>
          </div>
        </div>
        `
      )
      .join("");
    productList.innerHTML = contentHTML;
  } catch (error) {
    console.log(error);
  }
};

export default handleProductList;
