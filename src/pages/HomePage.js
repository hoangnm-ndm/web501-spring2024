export const HomePage = () => {
  return `<div>${html}</div>`;
};

export const datas = [
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
