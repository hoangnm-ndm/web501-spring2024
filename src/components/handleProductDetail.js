import api from "../apis";

const handleProductDetail = async (id) => {
  try {
    const { data } = await api.get(`/products/${id}`);
    const productDetail = document.getElementById("productDetail");
    const contentHTML = /*html*/ `
    <div class="row">
      <div class="col-6">
        <img width="100%" src="${data.thumbnail}" alt="${data.title}" />
      </div>
      <div class="col-6">
        <h2>${data.title}</h2>
        <div>Số lượng: ${data.stock}</div>
        <div>Gía: ${data.price}</div>
        <p>Mô tả: ${data.description}</p>
        <button class="btn btn-danger">Thêm vào giỏ hàng</button>
      </div>
    </div>
    `;

    productDetail.innerHTML = contentHTML;
  } catch (error) {
    // alert(`error: ${error}`);
    console.log(error);
  }
};

export default handleProductDetail;
