const HomePage = () => {
  return `
  <h1>Sản phẩm HOT<h1>
  <div id="productList"></div>
  `;
};

export default HomePage;
// export default HomePage;
// export default HomePage2;

/*
 * 1. Chỉ export default được 1 lần.
 * 2. Ko export default trên chính dòng khai báo biến được
 * 3. Nếu không export defaul thì có thể viết export cùng dòng khai báo biến.
 * 4. Có thể gom các biến cần export vào một object
 * 5. "type": "module"
 */
