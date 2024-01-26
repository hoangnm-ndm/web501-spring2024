import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap.js";
import register from "./src/components/Register.js";
import login from "./src/components/SignIn.js";
import AboutPage from "./src/pages/AboutPage.js";
import HomePage from "./src/pages/HomePage.js";
import NotFoundPage from "./src/pages/NotFoundPage.js";
import SignIn from "./src/pages/SignIn.js";
import SignUp from "./src/pages/SignUp.js";
import { render, router } from "./src/utils/common.js";
import "./style.css";
const app = document.getElementById("app");

router.on("/home", () => render(app, HomePage), {
  after() {
    const productList = document.getElementById("productList");
    console.log(productList);
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        const contentHTML = data
          .map(
            (product) => `
          <img src="${product.thumbnail}" />
          <div class="inner-product">
          <h2>${product.title}<h2>
          <p>Giá: ${product.price}<p>
          <p>Mô tả: ${product.description}<p>
          </div>
        `
          )
          .join("");
        // console.log(contentHTML);
        productList.innerHTML = contentHTML;
      });
  },
});
router.on("/", router.navigate("/home"));
router.on("/about", () => render(app, AboutPage));
router.on("/signup", () => render(app, SignUp), {
  after() {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.onclick = register;
  },
});
router.on("/signin", () => render(app, SignIn), {
  after() {
    const btnSignIn = document.getElementById("btnSignIn");
    btnSignIn.onclick = login;
  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();
