const HomePage = () => {
  return `<div>${html}</div>`;
};

const datas = [
  { id: "1", name: "Iphone 15", price: 2000, desc: "San pham moi" },
  { id: "2", name: "Iphone 16", price: 3000, desc: "San pham moi" },
  { id: "3", name: "Iphone 100", price: 1000000, desc: "San pham moi" },
];

const html = datas
  .map((item) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.price}</p>
      <a href="#" class="btn btn-primary">Add to card</a>
    </div>
  </div>`;
  })
  .join("");

export default HomePage;

/*
 * 1. Sử dụng cú pháp import/export cần type: modules
 * 2. Export default thì khi import không cần {}
 * 3. Ko export default ngay khi khai báo biến được.
 * 4. Khi đổi tên với export thông thường cần "as"
 * 5. Khi cần export nhiều biến, gộp vào trong {}
 */
