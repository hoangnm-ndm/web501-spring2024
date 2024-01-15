const url = "http://localhost:3000";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${url}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  });
  return `
  <h2>Apple</h2>
    ${products.map((item) => {
      return `
      ${item.name}
      `;
    })}
  `;
};

export default ProductList;
