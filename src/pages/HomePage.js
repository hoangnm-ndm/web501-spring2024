import ProductList from "../components/ProductList";

const HomePage = () => {
  return `
    <div class="container">
      <h1>Home Page</h1>
      ${ProductList()}
    </div>
  `;
};

export default HomePage;
