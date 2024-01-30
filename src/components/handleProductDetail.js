import instance from "../apis";

const handleProductDetail = async (data) => {
  const productElement = document.getElementById("productDetail");
  const id = data.data.id;
  const { data: product } = await instance.get(`/products/${id}`);
  const contentHTML = /*html*/ `
  <div class="container">
    <div class="row">
      <div class="col-6">
      <img src="${product.thumbnail}" alt="${product.title}" /></div>
      <div class="col-6">
      <h2>${product.title}</h2>
      <div>${product.price}</div>
      <p>${product.description}</p>
      </div>
    </div>
  </div>
  `;
  productElement.innerHTML = contentHTML;
};

export default handleProductDetail;
