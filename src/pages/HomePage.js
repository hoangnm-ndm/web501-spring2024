const HomePage = () => {
  return /*html*/ `
  <h1>Sản phẩm bán chạy</h1>
    <div id="productList"></div>
  `;
};

export default HomePage;

/*
 * 1. Sử dụng cú pháp import/export cần type: modules
 * 2. Export default thì khi import không cần {}
 * 3. Ko export default ngay khi khai báo biến được.
 * 4. Khi đổi tên với export thông thường cần "as"
 * 5. Khi cần export nhiều biến, gộp vào trong {}
 */
