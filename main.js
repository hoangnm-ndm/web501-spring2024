import { AboutPage } from "./src/pages/AboutPage";
import { HomePage } from "./src/pages/HomePage";
import { NotFoundPage } from "./src/pages/NotFoundPage";
import { render, router } from "./src/utils/common";
import "./node_modules/bootstrap/dist/js/bootstrap.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import SignUp from "./src/pages/SignUp";
import register from "./src/components/Register";
import SignIn from "./src/pages/SignIn";
import login from "./src/components/Login";
import ProductList from "./src/components/ProductList";
import ProductDetail from "./src/pages/ProductDetail";
import productDetail from "./src/components/productDetail";
import AdminPage from "./src/pages/admin/AdminPage";
import handleAdminPage from "./src/components/handleAdminPage";

const app = document.getElementById("app");

router.on("/", () => render(app, HomePage), {
  after() {
    ProductList();
  },
});
router.on("/home", () => router.navigate("/"));
router.on("/products/:id", (data) => {
  render(app, ProductDetail);
  productDetail(data);
});
router.on("/about", () => render(app, AboutPage));
router.on("/register", () => render(app, SignUp), {
  after: () => {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.onclick = register;
  },
});

router.on("/login", () => render(app, SignIn), {
  after: () => {
    const btnSignIn = document.getElementById("btnSignIn");
    btnSignIn.onclick = login;
  },
});
router.on("/admin", () => render(app, AdminPage), {
  after() {
    handleAdminPage();
  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();
