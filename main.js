import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap.js";
import register from "./src/components/Register.js";
import login from "./src/components/SignIn.js";
import handleProductList from "./src/components/handleProductList";
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
    handleProductList();
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
